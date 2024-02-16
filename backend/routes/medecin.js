const express = require('express');
const router = express.Router();
const medecinController = require('../controllers/medecinController');

// Route pour obtenir tous les médecins
router.get('/medecins', medecinController.getAllMedecins);

// Route pour obtenir un médecin par son ID
router.get('/medecins/:id', medecinController.getMedecinById);

// Route pour créer un nouveau médecin
router.post('/medecins', medecinController.createMedecin);

// Route pour mettre à jour un médecin
router.put('/medecins/:id', medecinController.updateMedecin);

// Route pour supprimer un médecin
router.delete('/medecins/:id', medecinController.deleteMedecin);

// Route pour rechercher des médecins par nom, prénom, adresse ou spécialité
router.get('/medicins/recherche', medecinController.searchMedecins);

module.exports = router;
