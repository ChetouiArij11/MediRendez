const Medecin = require('../models/medecinModel');

// Méthode pour récupérer tous les médecins
exports.getAllMedecins = async (req, res) => {
    try {
        const medecins = await Medecin.find({});
        res.json(medecins);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération des médecins');
    }
};

// Méthode pour récupérer un médecin par son ID
exports.getMedecinById = async (req, res) => {
    try {
        const medecinId = req.params.id;
        const medecin = await Medecin.findById(medecinId);
        
        if (!medecin) {
            res.status(404).send('Médecin non trouvé');
            return;
        }
        
        res.json(medecin);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération du médecin');
    }
};

// Méthode pour créer un nouveau médecin

exports.createMedecin = async (req, res) => {
    try {
        const newMedecin = new Medecin(req.body);
        const medecin = await newMedecin.save();
        res.status(201).json(medecin);
    } catch (error) {
        console.error('Erreur lors de la création du médecin : ', error); // Afficher l'erreur dans la console pour un débogage facile
        res.status(500).send('Erreur lors de la création du médecin : ' + error.message); // Renvoyer un message d'erreur plus détaillé
    }
};


// Méthode pour mettre à jour un médecin
exports.updateMedecin = async (req, res) => {
    try {
        const medecinId = req.params.id;
        const updatedMedecin = await Medecin.findByIdAndUpdate(medecinId, req.body, { new: true });
        res.json(updatedMedecin);
    } catch (error) {
        res.status(500).send('Erreur lors de la mise à jour du médecin');
    }
};

// Méthode pour supprimer un médecin
exports.deleteMedecin = async (req, res) => {
    try {
        const medecinId = req.params.id;
        const deletedMedecin = await Medecin.findByIdAndDelete(medecinId);
        res.json(deletedMedecin);
    } catch (error) {
        res.status(500).send('Erreur lors de la suppression du médecin');
    }
};


// Méthode pour rechercher les médecins par nom, prénom, adresse ou spécialité
exports.searchMedecins = async (req, res) => {
    try {
        const { nom, prenom, adresse_cabinet, specialite } = req.body;

        // Construire le filtre de recherche
        const filter = {};
        if (nom) filter.nom = { $regex: nom, $options: 'i' }; // Recherche insensible à la casse
        if (prenom) filter.prenom = { $regex: prenom, $options: 'i' };
        if (adresse_cabinet) filter.adresse_cabinet = { $regex: adresse_cabinet, $options: 'i' };
        if (specialite) filter.specialite = { $regex: specialite, $options: 'i' };

        const medecins = await Medecin.find(filter);
        res.json(medecins);
    } catch (error) {
        res.status(500).send('Erreur lors de la recherche des médecins');
    }
};
