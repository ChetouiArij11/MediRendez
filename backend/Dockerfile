# Utilisation de l'image de base Node.js
FROM  node:16

# Création du répertoire de travail dans l'image Docker
WORKDIR /app

# Copie des fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du code source de l'application dans l'image Docker
COPY . .

# Exposition du port 3000 pour l'application Node.js
EXPOSE 3000

# Commande pour démarrer l'application Node.js
CMD ["node", "app.js"]
