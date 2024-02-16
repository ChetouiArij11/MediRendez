const mongoose = require('mongoose');

const rendezVousSchema = new mongoose.Schema({
    patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    medecin_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Medecin', required: true },
    date_heure_rdv: { type: Date, required: true },
    duree: { type: Number, required: true },
    motif: String,
    statut: { type: String, enum: ['Planifié', 'En cours', 'Terminé'], default: 'Planifié' }
});

const RendezVous = mongoose.model('RendezVous', rendezVousSchema);

module.exports = RendezVous;
