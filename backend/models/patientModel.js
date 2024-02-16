const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  date_de_naissance: { type: Date, required: true },
  sexe: { type: String, required: true },
  adresse: { type: String, required: true },
  numero_de_telephone: { type: String, required: true },
  adresse_email: { type: String, required: true },
  autres_informations_medicales: { type: String },
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

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
