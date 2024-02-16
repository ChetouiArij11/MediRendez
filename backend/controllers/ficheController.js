const Fiche = require('../models/ficheModel');

// Fonction pour récupérer toutes les fiches
exports.getAllFiches = async (req, res) => {
    try {
        const fiches = await Fiche.find({});
        res.json(fiches);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération des fiches');
    }
};

// Fonction pour récupérer une fiche par ID
exports.getFicheById = async (req, res) => {
    try {
        const fiche = await Fiche.findById(req.params.id);
        if (!fiche) {
            return res.status(404).send('Fiche non trouvée');
        }
        res.json(fiche);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération de la fiche');
    }
};

// Fonction pour créer une nouvelle fiche
exports.createFiche = async (req, res) => {
    try {
        const nouvelleFiche = new Fiche(req.body);
        const ficheEnregistree = await nouvelleFiche.save();
        res.status(201).json(ficheEnregistree);
    } catch (error) {
        res.status(500).send('Erreur lors de la création de la fiche');
    }
};

// Fonction pour mettre à jour une fiche existante
exports.updateFiche = async (req, res) => {
    try {
        const fiche = await Fiche.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!fiche) {
            return res.status(404).send('Fiche non trouvée');
        }
        res.json(fiche);
    } catch (error) {
        res.status(500).send('Erreur lors de la mise à jour de la fiche');
    }
};

// Fonction pour supprimer une fiche par ID
exports.deleteFiche = async (req, res) => {
    try {
        const fiche = await Fiche.findByIdAndDelete(req.params.id);
        if (!fiche) {
            return res.status(404).send('Fiche non trouvée');
        }
        res.send('Fiche supprimée avec succès');
    } catch (error) {
        res.status(500).send('Erreur lors de la suppression de la fiche');
    }
};
exports.rechercherFichesParPatient = async (req, res) => {
    try {
        const idPatient = req.params.idPatient;
        const fiches = await Fiche.find({ patient: idPatient });

        if (!fiches) {
            res.status(404).send('Fiches non trouvées');
            return;
        }

        res.json(fiches);
    } catch (error) {
        console.error('Erreur lors de la recherche des fiches : ', error);
        res.status(500).send('Erreur lors de la recherche des fiches');
    }
};