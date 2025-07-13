import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import { PrismaClient, Prisma } from '../generated/prisma/index.js';
import { sendEmailCodigo } from '../src/email.js'
import { calcularIMC, calcularTMB, calcularConsumoAgua } from './utils/calculoSaude.js';
import {sendTextToGemini} from './ia_gemini/scriptIA.js'


// Remova a linha abaixo se estiver usando Node.js 18 ou superior
import fetch from 'node-fetch';

const codigos = new Map(); // chave: email, valor: código
const usuariosPendentes = new Map(); // chave: email, valor: senha
const metasPorUsuario = new Map(); 

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.post('/sugestaoMetas', async (req, res) => {
  const { email, dataNascimento, peso, altura, sexo, objetivo, nivelAtividade } = req.body;

  try {
    const texto = `Uma pessoa do sexo ${sexo} começou a fazer dieta. Ela nasceu em ${dataNascimento}, pesa ${peso} kg,
    tem ${altura} cm de altura, objetivo de ${objetivo} e seu nível de atividade física é ${nivelAtividade}.
    Com esses dados, sugira a quantidade diária recomendada de água (em ml), calorias, proteínas, carboidratos e gorduras para uma semana.
    A resposta deve estar **apenas** no seguinte formato JSON: {"calorias": ..., "proteinas": ..., "carboidratos": ..., "agua": ..., "gorduras": ...}`;

    const respostaGemini = await sendTextToGemini(texto);

    let sugestao;
    try {
      const limpa = respostaGemini.replaceAll("```json", "").replaceAll("```", "").trim();
      sugestao = JSON.parse(limpa);
    } catch {
      console.warn('Resposta não veio em JSON válido. Retornando como texto.');
      sugestao = { texto: respostaGemini };
    }
    metasPorUsuario.set(email, sugestao);
    res.status(200).json({ sugestao });
  } catch (error) {
    console.error('Erro ao obter sugestão do Gemini:', error);
    res.status(500).json({ message: 'Erro ao obter sugestão do Gemini.' });
  }
});

app.post('/sugestaoAlimentacao', async (req, res) => {
  const { dataNascimento, peso, altura, sexo, objetivo, nivelAtividade, dados } = req.body;

  try {
    const texto = `Uma pessoa do sexo ${sexo} começou a fazer dieta. Ela nasceu em ${dataNascimento}, pesa ${peso} kg,
    tem ${altura} cm de altura, objetivo de ${objetivo} e seu nível de atividade física é ${nivelAtividade}. E o seu consumo para essa semana é:
    água: ${dados.agua} ml
    calorias: ${dados.calorias}
    proteína: ${dados.proteina}
    carboidrato: ${dados.carboidrato}
    gordura: ${dados.gordura}

    Projete uma dieta para uma semana de forma que ela consiga atingir o objetivo.
    A resposta deve estar **apenas** no seguinte formato JSON:
    {
      "segunda": {
        "cafe": {...},
        "almoco": {...},
        "janta": {...}
      },
      "terça": {
        "cafe": {...},
        "almoco": {...},
        "janta": {...}
      },
      ...
    }`;

    const respostaGemini = await sendTextToGemini(texto);

    let sugestao;
    try {
      const limpa = respostaGemini.replaceAll("```json", "").replaceAll("```", "").trim();
      sugestao = JSON.parse(limpa);
    } catch {
      console.warn('Resposta não veio em JSON válido. Retornando como texto.');
      sugestao = { texto: respostaGemini };
    }

    res.status(200).json({ sugestao });
  } catch (error) {
    console.error('Erro ao obter sugestão do Gemini:', error);
    res.status(500).json({ message: 'Erro ao obter sugestão do Gemini.' });
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

    // const sugestaoMetas = metasPorUsuario.get(email);

    // const metasCriadas = await prisma.meta.create({
    //   data: {
    //     calorias: parseFloat(sugestaoMetas.calorias),
    //     proteinas: parseFloat(sugestaoMetas.proteinas),
    //     carboidratos: parseFloat(sugestaoMetas.carboidratos),
    //     agua: parseFloat(sugestaoMetas.agua),
    //     gorduras: parseFloat(sugestaoMetas.gorduras),
    //     usuarioId: user.id,
    //   }
    // });
    // metasPorUsuario.delete(email);  



    usuariosPendentes.delete(email);
    


    res.status(200).json({ 
      message: 'Cadastro completo com sucesso!', 
      userId: user.id, 
      perfilId: perfil.id,
      metas: metasCriadas
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

app.get('/recomendacoes/:usuarioId', async (req, res) => {
  const { usuarioId } = req.params;

  try {
    // 1) Busca o perfil do usuário
    const perfil = await prisma.perfil.findUnique({
      where: { usuarioId }
    });
    if (!perfil) return res.status(404).json({ message: 'Perfil não encontrado' });

    const { peso, altura, dataNascimento, sexo } = perfil;
    const idade = new Date().getFullYear()
                 - new Date(dataNascimento).getFullYear();

    // 2) Executa os 3 cálculos
    const imc             = calcularIMC(peso, altura);
    const tmb             = calcularTMB(peso, altura, idade, sexo);
    const aguaRecomendada = calcularConsumoAgua(peso);

    // 3) Devolve tudo num só JSON
    return res.json({ imc, tmb, aguaRecomendada });

  } catch (error) {
    console.error('Erro ao calcular recomendações:', error);
    return res.status(500).json({ message: 'Erro interno ao processar recomendações' });
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


// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
