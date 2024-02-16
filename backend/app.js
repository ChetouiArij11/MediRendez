const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Import des routes pour les patients et les fiches médicales
const patientRoutes = require('./routes/patient');
const ficheRoutes = require('./routes/fiche');
const medecinRoutes = require('./routes/medecin');
const rendezVousRoutes = require('./routes/rendezvous');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/MediRendez');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à la base de données :'));
db.once('open', () => {
  console.log('Connecté à la base de données MongoDB');
});

// Utilisation des routes pour les patients et les fiches médicales
app.use('/patients', patientRoutes);
app.use('/fiches', ficheRoutes);
app.use('/', medecinRoutes);
app.use(rendezVousRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
