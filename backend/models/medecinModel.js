const mongoose = require('mongoose');

const medecinSchema = new mongoose.Schema({

    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    specialite: { type: String, required: true },
    numero_de_telephone: String,
    adresse_email: String,
    adresse_cabinet: String,
    cin: {
        type: String,
        required: true,
        validate: {
          validator: function(v) {
            return /^\d{8}$/.test(v); // Vérifie si le champ contient exactement 8 chiffres
          },
          message: props => `${props.value} n'est pas un CIN valide! Le CIN doit contenir exactement 8 chiffres.`
        }
      }
});

const Medecin = mongoose.model('Medecin', medecinSchema);

module.exports = Medecin;
