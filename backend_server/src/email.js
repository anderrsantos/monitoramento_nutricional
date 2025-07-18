import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Configuração do serviço de e-mail
const transporter = nodemailer.createTransport({
  host: process.env.HOST_MAIL,
  port: Number(process.env.PORT_MAIL),
  secure: Number(process.env.PORT_MAIL) === 465,
  auth: {
    user: process.env.USERNAME_MAIL,
    pass: process.env.PASSWORD_MAIL,
  }
});

// Envia o código de permissão por e-mail
export const sendEmailCodigo = async (email, codigo) => {
  console.log(email);
  try {
    await transporter.sendMail({
      from: `NutriTracker <${process.env.USERNAME_MAIL}>`,
      to: email,
      subject: 'Envio do código de permissão.',
      html: `<p>Olá,</p><p>Seu código de permissão é: <strong>${codigo}</strong></p><p>Atenciosamente,<br>NutriTracker</p>`,
      text: `Olá,\n\nSeu código de permissão é: ${codigo}\n\nAtenciosamente,\nNutriTracker`
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
