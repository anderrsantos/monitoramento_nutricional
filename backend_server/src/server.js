import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import { PrismaClient, Prisma } from '../generated/prisma/index.js';
import { sendEmailCodigo } from '../src/email.js';
import {calcularIMC,calcularTMB,calcularConsumoAgua,calcularMacroNutrientes} from './utils/calculoSaude.js';
import {sendTextToGemini} from './ia_gemini/scriptIA.js';
import { criarOuAtualizarMeta } from './utils/criarOuAtualizarMeta.js';


// Remova a linha abaixo se estiver usando Node.js 18 ou superior
import fetch from 'node-fetch';

const codigos = new Map(); // chave: email, valor: código
const usuariosPendentes = new Map(); // chave: email, valor: senha
const metasPorUsuario = new Map(); 

const prisma = new PrismaClient();
const app = express();


app.use(cors());
app.use(express.json());


app.post('/sugestaoAlimentacao', async (req, res) => {
  const { usuarioId, dataNascimento, peso, altura, sexo, objetivo, nivelAtividade, dados } = req.body;
  try {
    console.log("wdckawjnckjwncjavjnv")
    const texto = `Uma pessoa do sexo ${sexo} começou a fazer dieta. Ela nasceu em ${dataNascimento}, pesa ${peso} kg,
    tem ${altura} cm de altura, objetivo de ${objetivo} e seu nível de atividade física é ${nivelAtividade}. E o seu consumo para essa semana é:
    água: ${dados.agua} ml
    calorias: ${dados.calorias}
    proteína: ${dados.proteina}
    carboidrato: ${dados.carboidrato}
    gordura: ${dados.gordura}

    Projete uma dieta para uma semana de forma que ela consiga atingir o objetivo.

    A resposta deve estar **apenas** no seguinte formato JSON (sem texto explicativo):

    {
      "Segunda": {
        "cafe": {
          "alimentos": [
            { "nome": "Iogurte", "quantidade": "200ml" },
            { "nome": "Pão integral", "quantidade": "2 fatias" },
            { "nome": "Banana", "quantidade": "1 unidade" }
          ],
          "calorias": 350,
          "proteina": 20,
          "carboidrato": 40,
          "gordura": 10
        },
        "almoco": {
          "alimentos": [
            { "nome": "Arroz", "quantidade": "100g" },
            { "nome": "Feijão", "quantidade": "100g" },
            { "nome": "Frango grelhado", "quantidade": "150g" },
            { "nome": "Salada", "quantidade": "1 prato" }
          ],
          "calorias": 600,
          "proteina": 40,
          "carboidrato": 50,
          "gordura": 15
        },
        "janta": {
          "alimentos": [
            { "nome": "Sopa de legumes", "quantidade": "300ml" },
            { "nome": "Torrada integral", "quantidade": "2 unidades" }
          ],
          "calorias": 300,
          "proteina": 15,
          "carboidrato": 30,
          "gordura": 5
        }
      }
    }`;
    const respostaGemini = await sendTextToGemini(texto);

    let sugestao;
    try {
      const limpa = respostaGemini.replaceAll("```json", "").replaceAll("```", "").trim();
      sugestao = JSON.parse(limpa);
    } catch {
      return res.status(500).json({ message: 'Resposta da IA inválida.' });
    }

    const diasSemana = ['Domingo', 'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const resultados = [];
    const keys = Object.keys(sugestao);
    keys.sort((a, b) => diasSemana.indexOf(a) - diasSemana.indexOf(b));

    for (const diaNome of keys) {
      const refeicoesObj = sugestao[diaNome];

      const refeicoes = Object.entries(refeicoesObj).map(([tipo, detalhes]) => {
        return {
          tipo,
          calorias: detalhes.calorias,
          proteinas: detalhes.proteina || 0,
          carboidratos: detalhes.carboidrato || 0,
          gorduras: detalhes.gordura || 0,
          alimentos: {
            create: detalhes.alimentos.map(alimento => ({
              nome: alimento.nome,
              quantidade: parseFloat(alimento.quantidade) || 0
            }))
          }
        };
      });

      const sugestaoExistente = await prisma.sugestaoAlimentacao.findFirst({
        where: {
          usuarioId,
          diaSemana: diaNome,
          createdAt: { gte: hoje }
        },
        include: {
          sugestaoRefeicoes: { include: { alimentos: true } }
        }
      });

      if (!sugestaoExistente) {
        const nova = await prisma.sugestaoAlimentacao.create({
          data: {
            usuarioId,
            diaSemana: diaNome,
            sugestaoRefeicoes: {
              create: refeicoes.map(ref => ({
                tipo: ref.tipo,
                calorias: ref.calorias,
                proteinas: ref.proteinas,
                carboidratos: ref.carboidratos,
                gorduras: ref.gorduras,
                alimentos: ref.alimentos
              }))
            },
          },
          include: {
            sugestaoRefeicoes: { include: { alimentos: true } },
          },
        });
        resultados.push(nova);
      }
    }

    //console.log('set: ', resultados);
    res.status(201).json({ resultados });
  } catch (error) {
    console.error('Erro ao obter sugestão do Gemini:', error);
    res.status(500).json({ message: 'Erro ao processar sugestão de alimentação.' });
  }
});

app.get('/getSugestaoAlimentacao', async (req, res) => {
  const { usuarioId } = req.query;

  try {
    const hoje = new Date();

    // Define início da semana (domingo) e fim da semana (sábado)
    const inicioSemana = new Date(hoje);
    inicioSemana.setDate(hoje.getDate() - hoje.getDay());
    inicioSemana.setHours(0, 0, 0, 0);

    const fimSemana = new Date(inicioSemana);
    fimSemana.setDate(inicioSemana.getDate() + 6);
    fimSemana.setHours(23, 59, 59, 999);

    // Busca apenas sugestões da semana atual
    const sugestoes = await prisma.sugestaoAlimentacao.findMany({
      where: {
        usuarioId,
        createdAt: {
          gte: inicioSemana,
          lte: fimSemana,
        },
      },
      include: {
        sugestaoRefeicoes: {
          include: {
            alimentos: true,
          },
        },
      },
    });

    if (sugestoes.length === 0) {
      return res.status(200).json({ message: 'Nenhuma sugestão de alimentação encontrada.' });
    }

    const agrupadoPorDia = {};
    for (const sugestao of sugestoes) {
      const dia = sugestao.diaSemana;

      agrupadoPorDia[dia] = agrupadoPorDia[dia] || {};

      for (const refeicao of sugestao.sugestaoRefeicoes) {
        agrupadoPorDia[dia][refeicao.tipo] = {
          calorias: refeicao.calorias,
          proteinas: refeicao.proteinas,
          carboidratos: refeicao.carboidratos,
          gorduras: refeicao.gorduras,
          alimentos: refeicao.alimentos.map(a => ({
            nome: a.nome,
            quantidade: a.quantidade,
          })),
        };
      }
    }

    // Ordenação cronológica dos dias da semana
    const ordemDias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const agrupadoOrdenado = {};
    ordemDias.forEach(dia => {
      if (agrupadoPorDia[dia]) {
        agrupadoOrdenado[dia] = agrupadoPorDia[dia];
      }
    });

    //console.log('get:', agrupadoOrdenado);
    res.status(200).json(agrupadoOrdenado);
  } catch (error) {
    console.error('Erro ao buscar sugestão de alimentação:', error);
    res.status(500).json({ message: 'Erro ao buscar sugestão de alimentação.' });
  }
});



// Enviar código por e-mail
app.post('/serviceEmail', async (req, res) => {
  try {
    const emailDestinatario = req.body.email;

    if (!emailDestinatario) {
      return res.status(400).json({ message: 'Email não fornecido.' });
    }

    const codigoGerado = Math.floor(100000 + Math.random() * 900000); // Gera um código de 6 dígitos

    codigos.set(emailDestinatario, String(codigoGerado)); // Armazena como string

    await sendEmailCodigo(emailDestinatario, codigoGerado);

    res.status(200).json({ message: 'Código de verificação enviado para o email.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar email.' });
  }
});

app.get('/getVerificarCodigo', async (req, res) => {
  try {
    const { email, codigoRecebido } = req.query;

    if (!email || !codigoRecebido) {
      return res.status(400).json({ message: 'Dados incompletos fornecidos.' });
    }

    console.log('Verificação afmaowfnajfnjfe')
    const codigoEsperado = codigos.get(email);
    console.log(codigoEsperado)

    if (!codigoEsperado) {
      return res.status(400).json({ message: 'Código expirado ou não encontrado.' });
    }

    const recebidoNormalizado = String(codigoRecebido).trim();
    const esperadoNormalizado = String(codigoEsperado).trim();

    if (recebidoNormalizado !== esperadoNormalizado) {
      return res.status(400).json({ message: 'Código de verificação inválido.' });
    }
    codigos.delete(email); // Remove o código após uso

    return res.status(200).json({ message: 'Código confirmado com sucesso.' });
  } catch (error) {
    console.error('Erro no getVerificarCodigo:', error);
    return res.status(500).json({ message: 'Erro interno ao verificar o código.' });
  }
});

app.post('/register', async (req, res) => {
  try {
    const { email, password,} = req.body;


    // Armazenamos email e senha temporariamente em memória (não no banco)
    usuariosPendentes.set(email, password);


    res.status(200).json({ message: 'Código validado. Agora preencha o perfil.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário.' });
  }
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log('Login attempt:', { email, password });

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
    
    const senhaConfere = await bcrypt.compare(password, user.password);

    if (!senhaConfere) {
      return res.status(401).json({ message: 'Senha incorreta.' });
    }

    res.status(200).json({ message: 'Login realizado com sucesso!', userId: user.id });
  } catch (error) {
    res.status(500).json({ message: 'Erro interno no servidor.' });
  }
});

app.put('/updateUser', async (req, res) => {
  const { email, password } = req.body;
  console.log('Recebido:', { email, password });

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      console.log(' Usuário não encontrado:', email);  
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { email: user.email },
      data: { password: hashedPassword }
    });


    console.log('Senha atualizada com sucesso para o usuário:', email);
    res.status(200).json({ message: 'Senha atualizada com sucesso.' });

  } catch (error) {
    console.error(' Erro ao atualizar usuário:', error); 
    res.status(500).json({ message: 'Erro ao atualizar usuário.' });
  }
});

// Buscar usuário por email
app.get('/searchUser', async (req, res) => {
  const email = req.query.email; 

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

// Verificar se o perfil do usuário já está cadastrado
app.get('/searchUserPerfil', async (req, res) => {
  const { userId } = req.query;

  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ message: 'ID do usuário não fornecido ou inválido.' });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    const verificaPerfil = await prisma.perfil.findUnique({
      where: { usuarioId: user.id }
    });
    console.log('verificacao: ',verificaPerfil)

    if(!verificaPerfil){
      return res.status(405).json({ message: 'Perfil não encontrado.' });
    }

    console.log('verificacao: ',verificaPerfil)

    res.status(200).json({
      userId: verificaPerfil.userId,
    });

  } catch (error) {
    //console.error('Erro ao buscar perfil do usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

app.post('/setPerfil', async (req, res) => {
  const { email, nome, sobrenome, dataNascimento, peso, altura, sexo, objetivo, nivelAtividade } = req.body;

  try {
    if (!usuariosPendentes.has(email)) {
      return res.status(400).json({ message: 'Usuário não encontrado ou código não validado.' });
    }

    const password = usuariosPendentes.get(email);
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    const perfil = await prisma.perfil.create({
      data: {
        nome,
        sobrenome,
        dataNascimento: new Date(dataNascimento),
        peso: parseFloat(peso),
        altura: parseFloat(altura),
        sexo,
        objetivo,
        nivelAtividade,
        usuarioId: user.id,
      }
    });

    const metasCriadas = await criarOuAtualizarMeta(user.id, {
      peso: parseFloat(peso),
      altura: parseFloat(altura),
      dataNascimento: new Date(dataNascimento),
      sexo,
      nivelAtividade
    });


    usuariosPendentes.delete(email);

    // res.status(200).json({ 
    //   message: 'Cadastro completo com sucesso!', 
    //   userId: user.id, 
    //   perfilId: perfil.id,
    //   metas: metasCriadas
    // });


    res.status(200).json({ 
     message: 'Cadastro completo com sucesso!', 
      userId: user.id, 
      perfilId: perfil.id
     });


  } catch (error) {
    console.error('Erro ao registrar perfil:', error);
    res.status(500).json({ message: 'Erro interno no servidor.' });
  }
});

app.get('/getPerfil', async (req, res) => {
  try {
    const userId = req.query.userId;

    if (!userId) {
      return res.status(400).json({ message: 'ID do usuário é obrigatório.' });
    }


    const perfil = await prisma.perfil.findUnique({
      where: { usuarioId: userId }
    });

    if (!perfil) {
      return res.status(404).json({ message: 'Perfil não encontrado.' });
    }

    console.log(perfil)

    res.status(200).json({ perfil });

  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    res.status(500).json({ message: 'Erro interno no servidor.' });
  }
});

app.delete('/deleteUser', async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: 'ID do usuário não fornecido.' });
  }

  try {
    // Remove todas as refeições
    await prisma.refeicao.deleteMany({
      where: { usuarioId: userId }
    });

    // Remove todos os registros de consumo de água
    await prisma.consumoAgua.deleteMany({
      where: { usuarioId: userId }
    });

    // Remove a meta (se existir)
    await prisma.meta.deleteMany({
      where: { usuarioId: userId }
    });

    // Remove o perfil (se existir)
    await prisma.perfil.deleteMany({
      where: { usuarioId: userId }
    });

    // Por fim, remove o usuário
    await prisma.user.delete({
      where: { id: userId }
    });

    res.status(200).json({ message: 'Usuário e todos os dados relacionados foram deletados com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    res.status(500).json({ message: 'Erro ao deletar o usuário.' });
  }
});


app.put('/updatePerfil', async (req, res) => {
  const { userId, nome, sobrenome, dataNascimento, peso, altura, sexo, objetivo, nivelAtividade } = req.body;

  if (!userId) {
    return res.status(400).json({ message: 'ID do usuário é obrigatório.' });
  }

  try {
    // Verifica se o perfil existe
    const perfilExistente = await prisma.perfil.findUnique({ where: { usuarioId: userId } });
    if (!perfilExistente) {
      return res.status(404).json({ message: 'Perfil não encontrado.' });
    }

    const perfilAtualizado = await prisma.perfil.update({
      where: { usuarioId: userId},
      data: {
        nome,
        sobrenome,
        dataNascimento: dataNascimento ? new Date(dataNascimento) : undefined,
        peso: peso !== undefined ? parseFloat(peso) : undefined,
        altura: altura !== undefined ? parseFloat(altura) : undefined,
        sexo,
        objetivo,
        nivelAtividade,
      },
    });

    res.status(200).json({ perfil: perfilAtualizado });
  } catch (error) {
    console.error('Erro ao atualizar perfil:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

app.post('/setMeta', async (req, res) => {
  const { userId } = req.body;
  const { proteinFrac = '0.3', carboFrac = '0.5', fatFrac = '0.2' } = req.query;

  try {
    const perfil = await prisma.perfil.findUnique({ where: { usuarioId: userId } });

    if (!perfil) {
      return res.status(404).json({ message: 'Perfil não encontrado' });
    }

    const metas = await criarOuAtualizarMeta(userId, perfil, {
      proteinFrac: parseFloat(proteinFrac),
      carboFrac: parseFloat(carboFrac),
      fatFrac: parseFloat(fatFrac)
    });

    return res.status(200).json(metas);
  } catch (error) {
    console.error('Erro ao salvar metas:', error);
    return res.status(500).json({ message: 'Erro interno ao processar metas' });
  }
});

app.get('/getMetas', async (req, res) => {
  const { userId } = req.query;

  try {
    const meta = await prisma.meta.findUnique({
      where: {
        usuarioId: userId
      },
      select: {
        agua: true,
        calorias: true,
        proteinas: true,
        carboidratos: true,
        dataCriacao: true,
        gorduras: true
      }
    });

    if (!meta) {
      return res.status(404).json({ message: 'Meta não encontrada para o usuário.' });
    }

    res.status(200).json({ meta });

  } catch (error) {
    console.error('Erro ao buscar meta:', error);
    res.status(500).json({ message: 'Erro ao buscar meta no banco de dados.' });
  }
});


app.get('/getMeta', async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: 'Parâmetro userId é obrigatório.' });
  }

  try {
    const meta = await prisma.meta.findUnique({
      where: { userId }
    });

    if (!meta) {
      return res.status(404).json({ message: 'Metas não encontradas para este usuário.' });
    }
    console.log(meta)
    return res.status(200).json({ meta });
  } catch (error) {
    console.error('Erro ao buscar metas:', error);
    return res.status(500).json({ message: 'Erro interno ao buscar metas.' });
  }
});

// Listar todos os usuários
app.get('/showUsers', async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
      },
    });

    res.status(200).json(allUsers);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ message: 'Erro ao buscar usuários no banco de dados.' });
  }
});

// Proxy para Open Food Facts
app.get('/api/openfoodfacts', async (req, res) => {
  const { search } = req.query;
  if (!search) return res.status(400).json({ error: 'Parâmetro de busca obrigatório' });

  try {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(search)}&search_simple=1&action=process&json=1`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar na Open Food Facts' });
  }
});


// Manipulação de Refeições ==============================================================

// Salvar nova refeição
app.post('/refeicoes', async (req, res) => {
  try {
    const { usuarioId, nome, alimentos } = req.body;
    console.log('addw: ', req.body)
    if (!usuarioId || !nome || !alimentos || !Array.isArray(alimentos)) {
      return res.status(400).json({ error: 'Dados inválidos' });
    }

    // Calcular totais da refeição
    const totais = alimentos.reduce((acc, alimento) => {
      return {
        calorias: acc.calorias + (parseFloat(alimento.calorias) || 0),
        proteinas: acc.proteinas + (parseFloat(alimento.proteinas) || 0),
        carboidratos: acc.carboidratos + (parseFloat(alimento.carboidratos) || 0),
        gorduras: acc.gorduras + (parseFloat(alimento.gorduras) || 0)
      };
    }, { calorias: 0, proteinas: 0, carboidratos: 0, gorduras: 0 });

    // Criar refeição no banco
    const refeicao = await prisma.refeicao.create({
      data: {
        nome,
        calorias: totais.calorias,
        proteinas: totais.proteinas,
        carboidratos: totais.carboidratos,
        gorduras: totais.gorduras,
        usuarioId
      }
    });

    console.log('refeicao: ',refeicao)

    // Criar alimentos da refeição
    for (const alimento of alimentos) {
      await prisma.alimentoRefeicao.create({
        data: {
          nomeAlimento: alimento.nomeAlimento,
          quantidade: alimento.quantidade,
          calorias: alimento.calorias,
          proteinas: alimento.proteinas,
          carboidratos: alimento.carboidratos,
          gorduras: alimento.gorduras,
          codigoOpenFood: alimento.codigoOpenFood,
          refeicaoId: refeicao.id
        }
      });
    }
    console.log('refeicao: ',refeicao)

    res.status(201).json({ 
      message: 'Refeição salva com sucesso',
      refeicao: { ...refeicao, alimentos }
    });
  } catch (error) {
    console.error('Erro ao salvar refeição:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Buscar refeições do usuário
app.get('/getRefeicoes', async (req, res) => {
  try {
    const { usuarioId } = req.params;
    
    const refeicoes = await prisma.refeicao.findMany({
      where: { usuarioId },
      include: {
        alimentos: true
      },
      orderBy: { horario: 'desc' }
    });

    res.json(refeicoes);
  } catch (error) {
    console.error('Erro ao buscar refeições:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Buscar calorias consumidas hoje
app.get('/getCaloriasHoje', async (req, res) => {
  try {
    const { usuarioId } = req.params;
    console.log('entrou no caloriqaqs hoke')
    const hoje = new Date();
    const inicioDia = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    const fimDia = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + 1);
    console.log('calorias do dia ')
    const refeicoesHoje = await prisma.refeicao.findMany({
      where: {
        usuarioId,
        horario: {
          gte: inicioDia,
          lt: fimDia
        }
      }
    });

    const totalCalorias = refeicoesHoje.reduce((acc, refeicao) => {
      return acc + refeicao.calorias;
    }, 0);

    res.json({ 
      totalCalorias,
      refeicoesHoje: refeicoesHoje.length
    });
  } catch (error) {
    console.error('Erro ao buscar calorias de hoje:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
//========================================================================================

// Manipulação do consumo de Agua  =======================================================
// dias = 1 → últimas 24h
// dias = 7 → última semana
// dias = 30 → último mês
// dias = 365 → último ano
app.post('/setConsumoAgua', async (req, res) => {
  const { usuarioId, quantidade } = req.body;

  // Validação simples
  if (!quantidade || !usuarioId) {
    return res.status(400).json({ error: 'Quantidade e usuarioId são obrigatórios.' });
  }

  console.log('setConsumo:', req.body);

  try {
    const novoRegistro = await prisma.consumoAgua.create({
      data: {
        quantidade: parseFloat(quantidade),
        usuarioId: usuarioId,
      },
    });

    return res.status(200).json(novoRegistro);
  } catch (error) {
    console.error('Erro ao registrar consumo de água:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});


app.get('/getConsumoAguaPorDia', async (req, res) => {
  const { userId, dias } = req.query;

  if (!userId || !dias) {
    return res.status(400).json({ error: 'Parâmetros usuarioId e dias são obrigatórios.' });
  }

  const numeroDias = parseInt(dias, 10);
  if (isNaN(numeroDias) || numeroDias <= 0) {
    return res.status(400).json({ error: 'O parâmetro dias deve ser um número inteiro positivo.' });
  }

  const dataInicial = new Date();
  dataInicial.setDate(dataInicial.getDate() - numeroDias);

  try {
    // Busca os registros no intervalo
    const registros = await prisma.consumoAgua.findMany({
      where: {
        usuarioId : userId,
        data: {
          gte: dataInicial,
        },
      },
    });

    // Agrupando os registros por data (formato: YYYY-MM-DD)
    const consumoPorDia = {};

    registros.forEach((registro) => {
      const data = new Date(registro.data);
      const dia = data.toISOString().split('T')[0]; // formato 'YYYY-MM-DD'

      if (!consumoPorDia[dia]) {
        consumoPorDia[dia] = 0;
      }
      consumoPorDia[dia] += registro.quantidade;
    });
    console.log(consumoPorDia)
    return res.status(200).json({ consumoPorDia });
  } catch (error) {
    console.error('Erro ao buscar consumo diário:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

app.get('/getConsumoAguaAgrupamentoDias', async (req, res) => {
  const { userId, dias } = req.query;

  if (!userId || !dias) {
    return res.status(400).json({ error: 'Parâmetros usuarioId e dias são obrigatórios.' });
  }

  const numeroDias = parseInt(dias, 10);
  if (isNaN(numeroDias) || numeroDias <= 0) {
    return res.status(400).json({ error: 'O parâmetro dias deve ser um número inteiro positivo.' });
  }

  const dataInicial = new Date();
  dataInicial.setDate(dataInicial.getDate() - numeroDias);

  try {
    const registros = await prisma.consumoAgua.findMany({
      where: {
        usuarioId: userId,
        data: {
          gte: dataInicial,
        },
      },
      orderBy: {
        data: 'asc',  // ordena do mais antigo para o mais recente
      },
    });

    // Retorna o array de registros sem somar
    console.log(registros)
    return res.status(200).json({ registrosconsumoPorDia:registros });
  } catch (error) {
    console.error('Erro ao buscar registros:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

//========================================================================================



















// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
