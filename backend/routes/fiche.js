const express = require('express');
const router = express.Router();
const ficheController = require('../controllers/ficheController');

// Route GET pour récupérer toutes les fiches
router.get('/', ficheController.getAllFiches);

// Route GET pour récupérer une fiche par ID
router.get('/:id', ficheController.getFicheById);

// Route POST pour créer une nouvelle fiche
router.post('/', ficheController.createFiche);

// Route PUT pour mettre à jour une fiche existante
router.put('/:id', ficheController.updateFiche);

// Route DELETE pour supprimer une fiche par ID
router.delete('/:id', ficheController.deleteFiche);


router.get('/rechercher/:idPatient', ficheController.rechercherFichesParPatient);

module.exports = router;
