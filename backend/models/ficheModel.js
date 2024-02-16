const mongoose = require('mongoose');

const ficheSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  rendezVous: [{ 
    date: { type: Date, required: true },
    heure: { type: String, required: true },
    motif: { type: String, required: true }
  }],
  medicaments: [{ 
    nom: { type: String, required: true },
    posologie: { type: String, required: true }
  }],
  recettes: [{ 
    aliment: { type: String, required: true },
    instructions: { type: String, required: true }
  }]
});

const Fiche = mongoose.model('Fiche', ficheSchema);

module.exports = Fiche;
