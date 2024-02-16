const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientControllers');

// Route GET pour récupérer tous les patients
router.get('/', patientController.getAllPatients);

// Route GET pour récupérer un patient par ID
router.get('/:id', patientController.getPatientById);

// Route POST pour créer un nouveau patient
router.post('/', patientController.createPatient);

// Route PUT pour mettre à jour un patient existant
router.put('/:id', patientController.updatePatient);

// Route DELETE pour supprimer un patient par ID
router.delete('/:id', patientController.deletePatient);
router.get('/rechercher/:cin', patientController.rechercherPatientParCIN);


module.exports = router;
