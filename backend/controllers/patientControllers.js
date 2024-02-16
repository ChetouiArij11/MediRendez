const Patient = require('../models/patientModel');

// Fonction pour récupérer tous les patients
exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find({});
        res.json(patients);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération des patients');
    }
};

// Fonction pour récupérer un patient par ID
exports.getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).send('Patient non trouvé');
        }
        res.json(patient);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération du patient');
    }
};

// Fonction pour créer un nouveau patient
exports.createPatient = async (req, res) => {
    try {
        const nouveauPatient = new Patient(req.body);
        const patientEnregistre = await nouveauPatient.save();
        res.status(201).json(patientEnregistre);
    } catch (error) {
        res.status(500).send('Erreur lors de la création du patient');
    }
};

// Fonction pour mettre à jour un patient existant
exports.updatePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!patient) {
            return res.status(404).send('Patient non trouvé');
        }
        res.json(patient);
    } catch (error) {
        res.status(500).send('Erreur lors de la mise à jour du patient');
    }
};

// Fonction pour supprimer un patient par ID
exports.deletePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (!patient) {
            return res.status(404).send('Patient non trouvé');
        }
        res.send('Patient supprimé avec succès');
    } catch (error) {
        res.status(500).send('Erreur lors de la suppression du patient');
    }
};


exports.rechercherPatientParCIN = async (req, res) => {
    try {
        const cin = req.params.cin;
        const patient = await Patient.findOne({ cin });

        if (!patient) {
            res.status(404).send('Patient non trouvé');
            return;
        }

        res.json(patient);
    } catch (error) {
        console.error('Erreur lors de la recherche du patient : ', error);
        res.status(500).send('Erreur lors de la recherche du patient');
    }
};