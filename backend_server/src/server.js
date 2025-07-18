import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '../generated/prisma/index.js';
import { sendEmailCodigo } from '../src/email.js';
import { sendTextToGemini } from './ia_gemini/scriptIA.js';
import { criarOuAtualizarMeta } from './utils/criarOuAtualizarMeta.js';
import fetch from 'node-fetch'; // (necessário apenas se for Node < 18)

const codigos = new Map();              // email → código
const usuariosPendentes = new Map();    // email → senha (em verificação)
const metasPorUsuario = new Map();      // cache de metas por usuário

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

/**
 * Rota: POST /sugestaoAlimentacao
 * Gera sugestão alimentar da semana usando IA (Gemini) e salva no banco.
 */
app.post('/sugestaoAlimentacao', async (req, res) => {
  const { usuarioId, dataNascimento, peso, altura, sexo, objetivo, nivelAtividade, dados } = req.body;

  try {
    // Gera o prompt com base nos dados do usuário e sua meta
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
      },
      "Terça":..... "Quarta":....."Sábado".....
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
    const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
    const resultados = [];

    // Ordena os dias da semana
    const keys = Object.keys(sugestao);
    keys.sort((a, b) => diasSemana.indexOf(a) - diasSemana.indexOf(b));

    for (const diaNome of keys) {
      const refeicoesObj = sugestao[diaNome];

      const refeicoes = Object.entries(refeicoesObj).map(([tipo, detalhes]) => ({
        tipo,
        calorias: detalhes.calorias,
        proteinas: detalhes.proteina || 0,
        carboidratos: detalhes.carboidrato || 0,
        gorduras: detalhes.gordura || 0,
        alimentos: {
          create: detalhes.alimentos.map(alimento => ({
            nome: alimento.nome,
            quantidade: alimento.quantidade || "0"
          }))
        }
      }));

      // Deleta sugestão anterior (se houver)
      const sugestaoExistente = await prisma.sugestaoAlimentacao.findFirst({
        where: { usuarioId, diaSemana: diaNome, createdAt: { gte: hoje } },
        include: { sugestaoRefeicoes: { select: { id: true } } }
      });

      if (sugestaoExistente) {
        for (const ref of sugestaoExistente.sugestaoRefeicoes) {
          await prisma.sugestaoAlimento.deleteMany({ where: { sugestaoRefeicaoId: ref.id } });
        }
        await prisma.sugestaoRefeicao.deleteMany({ where: { sugestaoAlimentacaoId: sugestaoExistente.id } });
        await prisma.sugestaoAlimentacao.delete({ where: { id: sugestaoExistente.id } });
      }

      // Cria nova sugestão
      const nova = await prisma.sugestaoAlimentacao.create({
        data: {
          usuarioId,
          diaSemana: diaNome,
          sugestaoRefeicoes: {
            create: refeicoes
          }
        },
        include: {
          sugestaoRefeicoes: { include: { alimentos: true } }
        }
      });

      resultados.push(nova);
    }

    res.status(201).json({ resultados });
  } catch (error) {
    console.error('Erro ao obter sugestão do Gemini:', error);
    res.status(500).json({ message: 'Erro ao processar sugestão de alimentação.' });
  }
});

/**
 * Rota: GET /getSugestaoAlimentacao
 * Retorna sugestões alimentares da semana atual para o usuário.
 */
app.get('/getSugestaoAlimentacao', async (req, res) => {
  const { usuarioId } = req.query;

  try {
    const hoje = new Date();
    const inicioSemana = new Date(hoje);
    inicioSemana.setDate(hoje.getDate() - hoje.getDay());
    inicioSemana.setHours(0, 0, 0, 0);

    const fimSemana = new Date(inicioSemana);
    fimSemana.setDate(inicioSemana.getDate() + 6);
    fimSemana.setHours(23, 59, 59, 999);

    const sugestoes = await prisma.sugestaoAlimentacao.findMany({
      where: {
        usuarioId,
        createdAt: { gte: inicioSemana, lte: fimSemana }
      },
      include: {
        sugestaoRefeicoes: { include: { alimentos: true } }
      }
    });

    if (sugestoes.length === 0) {
      return res.status(200).json({ message: 'Nenhuma sugestão de alimentação encontrada.' });
    }

    // Agrupa as sugestões por dia
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
            quantidade: a.quantidade
          }))
        };
      }
    }

    // Ordena dias da semana
    const ordemDias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const agrupadoOrdenado = {};
    ordemDias.forEach(dia => {
      if (agrupadoPorDia[dia]) agrupadoOrdenado[dia] = agrupadoPorDia[dia];
    });

    res.status(200).json(agrupadoOrdenado);
  } catch (error) {
    console.error('Erro ao buscar sugestão de alimentação:', error);
    res.status(500).json({ message: 'Erro ao buscar sugestão de alimentação.' });
  }
});

/**
 * Rota: POST /serviceEmail
 * Gera e envia código de verificação por e-mail.
 */
app.post('/serviceEmail', async (req, res) => {
  try {
    const emailDestinatario = req.body.email;
    const emailLower = emailDestinatario.toLowerCase();

    if (!emailLower) {
      return res.status(400).json({ message: 'Email não fornecido.' });
    }

    const codigoGerado = Math.floor(100000 + Math.random() * 900000);
    codigos.set(emailLower, String(codigoGerado));

    await sendEmailCodigo(emailLower, codigoGerado);

    res.status(200).json({ message: 'Código de verificação enviado para o email.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar email.' });
  }
});

/**
 * Rota: GET /getVerificarCodigo
 * Verifica se o código de verificação enviado é válido.
 */
app.get('/getVerificarCodigo', async (req, res) => {
  try {
    const { email, codigoRecebido } = req.query;
    const emailLower = email.toLowerCase();

    if (!emailLower || !codigoRecebido) {
      return res.status(400).json({ message: 'Dados incompletos fornecidos.' });
    }

    const codigoEsperado = codigos.get(emailLower);
    if (!codigoEsperado) {
      return res.status(400).json({ message: 'Código expirado ou não encontrado.' });
    }

    if (String(codigoRecebido).trim() !== String(codigoEsperado).trim()) {
      return res.status(400).json({ message: 'Código de verificação inválido.' });
    }

    codigos.delete(emailLower);
    return res.status(200).json({ message: 'Código confirmado com sucesso.' });
  } catch (error) {
    console.error('Erro no getVerificarCodigo:', error);
    return res.status(500).json({ message: 'Erro interno ao verificar o código.' });
  }
});

/**
 * Rota: POST /register
 * Registra usuário pendente após validação do código.
 */
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailLower = email.toLowerCase();

    usuariosPendentes.set(emailLower, password);
    res.status(200).json({ message: 'Código validado. Agora preencha o perfil.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário.' });
  }
});

/**
 * Rota: POST /login
 * Realiza login do usuário com email e senha.
 */
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const emailLower = email.toLowerCase();
    const user = await prisma.user.findUnique({ where: { email: emailLower } });

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

/**
 * Rota: PUT /updateUser
 * Atualiza a senha do usuário.
 */
app.put('/updateUser', async (req, res) => {
  const { email, password } = req.body;

  try {
    const emailLower = email.toLowerCase();
    const user = await prisma.user.findUnique({ where: { email: emailLower } });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.update({
      where: { email: emailLower },
      data: { password: hashedPassword }
    });

    res.status(200).json({ message: 'Senha atualizada com sucesso.' });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ message: 'Erro ao atualizar usuário.' });
  }
});

/**
 * Rota: GET /searchUser
 * Busca usuário pelo email e retorna seu ID.
 */
app.get('/searchUser', async (req, res) => {
  const email = req.query.email;
  try {
    const emailLower = email.toLowerCase();
    const user = await prisma.user.findUnique({
      where: { email: emailLower },
      select: { id: true },
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

/**
 * Rota: GET /searchUserPerfil
 * Verifica se o perfil do usuário está cadastrado.
 */
app.get('/searchUserPerfil', async (req, res) => {
  const { userId } = req.query;

  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ message: 'ID do usuário não fornecido ou inválido.' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    const verificaPerfil = await prisma.perfil.findUnique({ where: { usuarioId: user.id } });
    if (!verificaPerfil) {
      return res.status(405).json({ message: 'Perfil não encontrado.' });
    }

    res.status(200).json({ userId: verificaPerfil.userId });
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

/**
 * Rota: POST /setPerfil
 * Cria usuário e perfil completo, além de gerar metas nutricionais.
 */
app.post('/setPerfil', async (req, res) => {
  const { email, nome, sobrenome, dataNascimento, peso, altura, sexo, objetivo, nivelAtividade } = req.body;

  try {
    const emailLower = email.toLowerCase();

    // Verifica se o usuário passou pela validação de código
    if (!usuariosPendentes.has(emailLower)) {
      return res.status(400).json({ message: 'Usuário não encontrado ou código não validado.' });
    }

    // Recupera senha pendente e cria hash
    const password = usuariosPendentes.get(emailLower);
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria usuário no banco
    const user = await prisma.user.create({
      data: {
        email: emailLower,
        password: hashedPassword,
      },
    });

    // Cria perfil associado ao usuário
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

    // Gera ou atualiza meta nutricional
    await criarOuAtualizarMeta(user.id, perfil);

    // Remove usuário pendente após criação
    usuariosPendentes.delete(emailLower);

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

/**
 * Rota: GET /getPerfil
 * Busca perfil completo do usuário pelo userId.
 */
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

    res.status(200).json({ perfil });
  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    res.status(500).json({ message: 'Erro interno no servidor.' });
  }
});

/**
 * Rota: DELETE /deleteUser
 * Deleta usuário e todos os dados relacionados (perfil, metas, refeições, sugestões).
 */
app.delete('/deleteUser', async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: 'ID do usuário não fornecido.' });
  }

  try {
    // Verifica se o usuário existe
    const userExists = await prisma.user.findUnique({ where: { id: userId } });
    if (!userExists) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    // Deleta sugestões de alimentação e seus filhos (refeições, alimentos)
    const sugestoes = await prisma.sugestaoAlimentacao.findMany({
      where: { usuarioId: userId },
      select: { id: true }
    });

    for (const sugestao of sugestoes) {
      const sugestaoId = sugestao.id;
      const sugestoesRefeicao = await prisma.sugestaoRefeicao.findMany({
        where: { sugestaoAlimentacaoId: sugestaoId },
        select: { id: true }
      });

      for (const refeicao of sugestoesRefeicao) {
        await prisma.sugestaoAlimento.deleteMany({
          where: { sugestaoRefeicaoId: refeicao.id }
        });
      }

      await prisma.sugestaoRefeicao.deleteMany({
        where: { sugestaoAlimentacaoId: sugestaoId }
      });
    }

    await prisma.sugestaoAlimentacao.deleteMany({
      where: { usuarioId: userId }
    });

    // Deleta refeições e seus alimentos associados
    const refeicoes = await prisma.refeicao.findMany({
      where: { usuarioId: userId },
      select: { id: true }
    });

    for (const refeicao of refeicoes) {
      await prisma.alimentoRefeicao.deleteMany({
        where: { refeicaoId: refeicao.id }
      });
    }

    await prisma.refeicao.deleteMany({
      where: { usuarioId: userId }
    });

    // Deleta demais dados relacionados
    await prisma.consumoAgua.deleteMany({ where: { usuarioId: userId } });
    await prisma.meta.deleteMany({ where: { usuarioId: userId } });
    await prisma.perfil.deleteMany({ where: { usuarioId: userId } });

    // Deleta o usuário
    const deletedUser = await prisma.user.deleteMany({ where: { id: userId } });
    if (deletedUser.count === 0) {
      console.warn(`Usuário com ID ${userId} já foi deletado ou não existe.`);
    }

    res.status(200).json({ message: 'Usuário e todos os dados relacionados foram deletados com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    res.status(500).json({ message: 'Erro ao deletar o usuário.' });
  }
});

/**
 * Rota: PUT /updatePerfil
 * Atualiza os dados do perfil do usuário.
 */
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

    // Atualiza o perfil com os dados recebidos
    const perfilAtualizado = await prisma.perfil.update({
      where: { usuarioId: userId },
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

/**
 * Rota: POST /setMeta
 * Recalcula e atualiza a meta nutricional do usuário com base no perfil.
 */
app.post('/setMeta', async (req, res) => {
  const { userId } = req.body;

  try {
    // Busca o perfil do usuário
    const perfil = await prisma.perfil.findUnique({ where: { usuarioId: userId } });

    if (!perfil) {
      return res.status(404).json({ message: 'Perfil não encontrado' });
    }

    // Recalcula ou cria metas nutricionais
    const metas = await criarOuAtualizarMeta(userId, perfil);

    return res.status(200).json(metas);
  } catch (error) {
    console.error('Erro ao salvar metas:', error);
    return res.status(500).json({ message: 'Erro interno ao processar metas' });
  }
});

/**
 * Rota: GET /getMetas
 * Busca as metas nutricionais do usuário.
 */
app.get('/getMetas', async (req, res) => {
  const { userId } = req.query;

  try {
    const meta = await prisma.meta.findUnique({
      where: { usuarioId: userId },
      select: {
        agua: true,
        calorias: true,
        proteinas: true,
        carboidratos: true,
        gorduras: true,
        dataCriacao: true,
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

/**
 * Rota: GET /getMeta
 * Busca as metas nutricionais do usuário pelo ID.
 */
app.get('/getMeta', async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: 'Parâmetro userId é obrigatório.' });
  }

  try {
    // Busca meta pelo userId (verifique se o campo na tabela é 'usuarioId' ou 'userId')
    const meta = await prisma.meta.findUnique({
      where: { userId }
    });

    if (!meta) {
      return res.status(404).json({ message: 'Metas não encontradas para este usuário.' });
    }

    return res.status(200).json({ meta });
  } catch (error) {
    console.error('Erro ao buscar metas:', error);
    return res.status(500).json({ message: 'Erro interno ao buscar metas.' });
  }
});

/**
 * Rota: GET /showUsers
 * Lista todos os usuários cadastrados (id e email).
 */
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

/**
 * Rota: GET /api/openfoodfacts
 * Proxy para consulta à API do Open Food Facts.
 * Parâmetro: search (string) - termo para busca.
 */
app.get('/api/openfoodfacts', async (req, res) => {
  const { search } = req.query;

  if (!search) {
    return res.status(400).json({ error: 'Parâmetro de busca obrigatório' });
  }

  try {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(search)}&search_simple=1&action=process&json=1`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Erro ao buscar na Open Food Facts:', err);
    res.status(500).json({ error: 'Erro ao buscar na Open Food Facts' });
  }
});

/**
 * Rota: POST /refeicoes
 * Salva uma nova refeição com seus alimentos e calcula totais nutricionais.
 */
app.post('/refeicoes', async (req, res) => {
  try {
    const { usuarioId, nome, alimentos } = req.body;

    if (!usuarioId || !nome || !alimentos || !Array.isArray(alimentos)) {
      return res.status(400).json({ error: 'Dados inválidos' });
    }

    // Calcula totais nutricionais da refeição
    const totais = alimentos.reduce((acc, alimento) => ({
      calorias: acc.calorias + (parseFloat(alimento.calorias) || 0),
      proteinas: acc.proteinas + (parseFloat(alimento.proteinas) || 0),
      carboidratos: acc.carboidratos + (parseFloat(alimento.carboidratos) || 0),
      gorduras: acc.gorduras + (parseFloat(alimento.gorduras) || 0),
    }), { calorias: 0, proteinas: 0, carboidratos: 0, gorduras: 0 });

    // Cria a refeição no banco de dados
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

    // Cria os registros dos alimentos associados à refeição
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

    res.status(201).json({
      message: 'Refeição salva com sucesso',
      refeicao: { ...refeicao, alimentos }
    });

  } catch (error) {
    console.error('Erro ao salvar refeição:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

/**
 * Rota: GET /getRefeicoes
 * Busca todas as refeições do usuário, incluindo alimentos, ordenadas por horário decrescente.
 */
app.get('/getRefeicoes', async (req, res) => {
  try {
    const { usuarioId } = req.query;

    const refeicoes = await prisma.refeicao.findMany({
      where: { usuarioId },
      include: { alimentos: true },
      orderBy: { horario: 'desc' }
    });

    res.json(refeicoes);

  } catch (error) {
    console.error('Erro ao buscar refeições:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

/**
 * Rota: GET /getCaloriasHoje
 * Calcula o total de calorias consumidas pelo usuário no dia atual.
 */
app.get('/getCaloriasHoje', async (req, res) => {
  try {
    const { usuarioId } = req.query;
    const hoje = new Date();
    const inicioDia = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    const fimDia = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + 1);

    const refeicoesHoje = await prisma.refeicao.findMany({
      where: {
        usuarioId,
        horario: {
          gte: inicioDia,
          lt: fimDia
        }
      }
    });

    const totalCalorias = refeicoesHoje.reduce((acc, refeicao) => acc + refeicao.calorias, 0);

    res.json({
      totalCalorias,
      refeicoesHoje: refeicoesHoje.length
    });

  } catch (error) {
    console.error('Erro ao buscar calorias de hoje:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

/**
 * Rota: POST /setConsumoAgua
 * Registra o consumo de água de um usuário.
 * Retorna: JSON com o registro criado do consumo de água.
 */
app.post('/setConsumoAgua', async (req, res) => {
  const { usuarioId, quantidade } = req.body;

  if (!quantidade || !usuarioId) {
    return res.status(400).json({ error: 'Quantidade e usuarioId são obrigatórios.' });
  }

  try {
    const novoRegistro = await prisma.consumoAgua.create({
      data: {
        quantidade: parseFloat(quantidade),
        usuarioId,
      },
    });

    return res.status(200).json(novoRegistro);
  } catch (error) {
    console.error('Erro ao registrar consumo de água:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

/**
 * Rota: GET /getConsumoAguaPorDia
 * Busca o consumo diário de água do usuário nos últimos N dias.
 * 
 * Query params:
 *  - usuarioId (string): ID do usuário.
 *  - dias (number): Quantidade de dias anteriores para buscar (ex: 1, 7, 30).
 * 
 * Retorna:
 *  - JSON com objeto onde as chaves são datas (YYYY-MM-DD) e valores a soma do consumo naquele dia.
 */
app.get('/getConsumoAguaPorDia', async (req, res) => {
  const { usuarioId, dias } = req.query;
  console.log(req.query)
  if (!usuarioId || !dias) {
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
        usuarioId,
        data: { gte: dataInicial }
      }
    });

    const consumoPorDia = {};
    registros.forEach(({ data, quantidade }) => {
      const dia = new Date(data).toISOString().split('T')[0];
      consumoPorDia[dia] = (consumoPorDia[dia] || 0) + quantidade;
    });

    return res.status(200).json({ consumoPorDia });
  } catch (error) {
    console.error('Erro ao buscar consumo diário:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

/**
 * Rota: GET /getConsumoAguaAgrupamentoDias
 * Retorna os registros detalhados de consumo de água dos últimos N dias, ordenados por data.
 * Retorna: JSON com array de registros de consumo, incluindo data e quantidade.
 */
app.get('/getConsumoAguaAgrupamentoDias', async (req, res) => {
  const { usuarioId, dias } = req.query;

  if (!usuarioId || !dias) {
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
        usuarioId,
        data: { gte: dataInicial }
      },
      orderBy: { data: 'asc' }
    });

    return res.status(200).json({ registrosConsumoPorDia: registros });
  } catch (error) {
    console.error('Erro ao buscar registros:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

/**
 * Iniciar servidor
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
