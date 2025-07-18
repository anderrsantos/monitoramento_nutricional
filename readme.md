# 🌐 NutriTracker — Monitoramento Nutricional

Este repositório contém o projeto desenvolvido como trabalho final da disciplina de *Engenharia de Software* do curso de Engenharia da Computação (CEFET-MG).

O objetivo principal foi criar um sistema completo a partir do zero, desde a definição dos requisitos até a entrega final do produto. A ideia escolhida foi o desenvolvimento de um site para monitoramento alimentar.

**NutriTracker** é um sistema web que permite que usuários monitorem sua alimentação diária, consumo de água, calorias, objetivos nutricionais e progresso físico.

---

## ⚙️ Funcionalidades

- Documentação baseada nos requisitos levantados.
- Desenvolvimento completo da aplicação:
  - **Banco de Dados**: MongoDB
  - **Backend**: Node.js — lógica do servidor e integração com APIs
  - **Frontend**: React — interface gráfica e interação com o usuário
- Criação do manual de uso e documentação do código

---

## 📁 Estrutura do Projeto

```

monitoramento_nutricional/              # Raiz do projeto
├── backend_server/                     # Backend em Node.js com Prisma
│   ├── src/
│   │   ├── ia_gemini/                  # Integração com IA (ex: geração de planos)
│   │   ├── prisma/                     # Esquemas e acesso ao banco de dados 
│   │   ├── utils/                      # Funções auxiliares
│   │   ├── email.js                    # Serviço de envio de e-mail
│   │   └── server.js                   # Inicialização e rotas do servidor
│   ├── .env_exemplo                    # Exemplo da estrutura de variáveis de ambiente
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
│
├── frontend/                           # Frontend com React
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/                     # Imagens e arquivos estáticos
│   │   ├── components/                 # Componentes reutilizáveis
│   │   ├── pages/                      # Páginas principais da aplicação
│   │   │   ├── Conteudo/
│   │   │   ├── EditPerfil/
│   │   │   ├── Home/
│   │   │   ├── RecuperarSenha/
│   │   │   └── Register/
│   │   ├── services/                   # Comunicação com backend (APIs)
│   │   ├── App.jsx                     # Componente principal do React
│   │   ├── index.jsx                   # Ponto de entrada da aplicação
│   │   └── index.css                   # Estilos globais
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .gitignore
│   └── README.md
|
└── readme.md
  

```
---
## Estados (useState) usados no Frontend

- O componente `Conteudo.jsx` é responsável por renderizar os dados nutricionais diários.
- Os `useState` controlam informações como: dados pessoais do usuário (peso, altura, IMC), metas nutricionais (calorias, proteínas, carboidratos, gorduras), consumo de água, refeições e alimentos registrados, além do controle da interface (modais, gráficos e buscas).



---

## 🥪 Tecnologias Utilizadas

- **JavaScript**
- **MongoDB**
- **Node.js**
- **Prisma**
- **React**
- **Vite** – estrutura inicial do frontend
- **API OpenFoodFacts** – dados nutricionais
- **API Gemini (Google)** – geração de sugestões alimentares

---

## 🚀 Como Executar

1. **Clone o repositório:**

```bash
git clone https://github.com/anderrsantos/monitoramento_nutricional.git
cd monitoramento_nutricional
```

2. **Configure o ambiente:**
- Renomeie o arquivo .env_exemplo para .env
- Preencha as variáveis com as credenciais e configurações necessárias (ex: conexão com o banco de dados, chave da API, etc.)

3. Inicie o Backend:

```bash
cd backend_server 
npm install
npm run start
```

4. Inicie o Frontend (em outro terminal):

```bash
cd frontend 
npm install
npm run dev
```

5. Acesse a aplicação: 
```bash
http://localhost:5173
```
Ou clique no link exibido no terminal após o passo 4.

---

## 📊 Resultados

O sistema final foi implementado com sucesso, integrando frontend e backend de forma funcional. Entre as funcionalidades principais:

- Cadastro e login de usuários
- Geração de planos alimentares personalizados com base em dados fornecidos
- Interface responsiva e amigável

A aplicação pode ser executada localmente ou adaptada facilmente para deploy em produção

---

## 👩‍💻 Autores

- **Anderson Rodrigues dos Santos** — [anderson.912rs@gmail.com](mailto:anderson.912rs@gmail.com) 
- **Adrian Paiva** — [adrianabreupaiva@gmail.com](mailto:adrianabreupaiva@gmail.com)  
- **Bruno Prado** — [bruno.pradosantos1910@gmail.com](mailto:bruno.pradosantos1910@gmail.com)  
- **Eduardo Henrique Queiroz Almeida** — [eduardo.almeida@aluno.cefetmg.br](mailto:eduardo.almeida@aluno.cefetmg.br)  
- **João Antônio** — [joaoantmeloz@gmail.com ](mailto:joaoantmeloz@gmail.com)  
- **Lucas Portela** — [lucascerqueiraportela04@gmail.com](mailto:lucascerqueiraportela04@gmail.com)  

---

## 🎓 Informações Acadêmicas

- **Disciplina**: Engenharia de Software
- **Instituição**: CEFET-MG  
- **Professor**: Igor
- **Ano/Semestre**: 2025/1

---

## 📄 Licença

Projeto desenvolvido exclusivamente para fins acadêmicos e educacionais.
