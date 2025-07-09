import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import { PrismaClient, Prisma } from '../generated/prisma/index.js';
import email from '../../backend_email/src/email.js'; 

let codigo = 0;

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Enviar código por e-mail
app.post('/serviceEmail', async (req, res) => {
  try {
    console.log('Requisição recebida para enviar código por email:', req.body);
    const emailDestinatario = req.body.email;
    if (!emailDestinatario) {
      return res.status(400).json({ message: 'Email não fornecido.' });
    }

    codigo = Math.floor(100000 + Math.random() * 900000); // Gera um código de 6 dígitos

    await email.sendEmailCodigo(emailDestinatario, codigo);

    res.status(200).json({ message: 'Código de verificação enviado para o email.' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ message: 'Erro ao enviar email.' });
  }
});

// Registrar usuário
app.post('/register', async (req, res) => {
  try {
    const { email, password, codigoRecebido } = req.body;

    if (Number(codigoRecebido) !== codigo) {
      return res.status(400).json({ message: 'Código de verificação inválido.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ id: user.id, email: user.email });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2002' &&
      error.meta?.target?.includes('email')
    ) {
      res.status(409).json({ message: 'Email já está em uso.' });
    } else {
      console.error(error);
      res.status(500).json({ message: 'Erro interno no servidor.' });
    }
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
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro interno no servidor.' });
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

// Buscar usuário por email
app.get('/searchUser', async (req, res) => {
  const { email } = req.query;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        password: true,
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

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
