const RendezVous = require('../models/rendezvousModel');

exports.getRendezVous = async (req, res) => {
    try {
        const rendezVous = await RendezVous.find({});
        res.json(rendezVous);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération des rendez-vous');
    }
};

exports.getRendezVousById = async (req, res) => {
    try {
        const rendezVousId = req.params.id;
        const rendezVous = await RendezVous.findById(rendezVousId);
        if (!rendezVous) {
            res.status(404).send('Rendez-vous non trouvé');
            return;
        }
        res.json(rendezVous);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération du rendez-vous');
    }
};


exports.createRendezVous = async (req, res) => {
    try {
        const { patient_id, medecin_id, date_heure_rdv, duree, motif, statut } = req.body;

        const newRendezVous = new RendezVous({
            patient_id,
            medecin_id,
            date_heure_rdv,
            duree,
            motif,
            statut
        });

        const rendezVous = await newRendezVous.save();
        res.status(201).json(rendezVous);
    } catch (error) {
        console.error('Erreur lors de la création du rendez-vous : ', error);
        res.status(500).send('Erreur lors de la création du rendez-vous');
    }
};

exports.updateRendezVous = async (req, res) => {
    try {
        const rendezVousId = req.params.id;
        const updatedRendezVous = await RendezVous.findByIdAndUpdate(rendezVousId, req.body, { new: true });
        if (!updatedRendezVous) {
            res.status(404).send('Rendez-vous non trouvé');
            return;
        }
        res.json(updatedRendezVous);
    } catch (error) {
        res.status(500).send('Erreur lors de la mise à jour du rendez-vous');
    }
};

exports.deleteRendezVous = async (req, res) => {
    try {
        const rendezVousId = req.params.id;
        const deletedRendezVous = await RendezVous.findByIdAndDelete(rendezVousId);
        if (!deletedRendezVous) {
            res.status(404).send('Rendez-vous non trouvé');
            return;
        }
        res.status(200).send('Rendez-vous supprimé avec succès');
    } catch (error) {
        res.status(500).send('Erreur lors de la suppression du rendez-vous');
    }
};
