**tables:
-- Création de la table Patient
CREATE TABLE Patient (
    patient_id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    date_de_naissance DATE,
    sexe ENUM('Homme', 'Femme', 'Autre'),
    adresse VARCHAR(255),
    numero_de_telephone VARCHAR(20),
    adresse_email VARCHAR(255),
    autres_informations_medicales TEXT
);

-- Création de la table Médecin
CREATE TABLE Medecin (
    medecin_id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    specialite VARCHAR(255),
    numero_de_telephone VARCHAR(20),
    adresse_email VARCHAR(255),
    adresse_cabinet VARCHAR(255)
);

-- Création de la table Rendez-vous
CREATE TABLE Rendez_vous (
    rendezvous_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    medecin_id INT,
    date_heure_rdv DATETIME,
    duree INT,
    motif VARCHAR(255),
    statut ENUM('Confirmé', 'Annulé', 'En attente', 'Terminé'),
    FOREIGN KEY (patient_id) REFERENCES Patient(patient_id),
    FOREIGN KEY (medecin_id) REFERENCES Medecin(medecin_id)
);
----------------------------------------------------------------------------------
