# Usa imagem oficial Node.js LTS
FROM node:18

# Diretório dentro do container
WORKDIR /app

# Copia package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todo o código da aplicação
COPY . .

# Expõe a porta que o servidor usa
EXPOSE 3000

# Comando para rodar o servidor
CMD ["node", "server.js"]
