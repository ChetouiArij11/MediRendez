const express = require('express');
const router = express.Router();
const rendezVousController = require('../controllers/rendezVousController');

// Route POST pour créer un nouveau rendez-vous
router.post('/rendezvous', rendezVousController.createRendezVous);

// Route GET pour récupérer tous les rendez-vous
router.get('/rendezvous', rendezVousController.getRendezVous);

// Route GET pour récupérer un rendez-vous par son ID
router.get('/rendezvous/:id', rendezVousController.getRendezVousById);

// Route PUT pour mettre à jour un rendez-vous par son ID
router.put('/rendezvous/:id', rendezVousController.updateRendezVous);

// Route DELETE pour supprimer un rendez-vous par son ID
router.delete('/rendezvous/:id', rendezVousController.deleteRendezVous);

module.exports = router;
