-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 24, 2024 at 09:03 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projet_mjira`
--

-- --------------------------------------------------------

--
-- Table structure for table `equipe`
--

CREATE TABLE `equipe` (
  `ID` int(10) NOT NULL,
  `ProjetID` int(10) NOT NULL,
  `Nom_equipe` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `equipe_membre`
--

CREATE TABLE `equipe_membre` (
  `EquipeID` int(10) NOT NULL,
  `MembreMail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `membre`
--

CREATE TABLE `membre` (
  `Mail` varchar(255) NOT NULL,
  `Nom` varchar(255) DEFAULT NULL,
  `Prenom` varchar(255) DEFAULT NULL,
  `Photo` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Poste` varchar(255) DEFAULT NULL,
  `Discriminator` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `membre`
--

INSERT INTO `membre` (`Mail`, `Nom`, `Prenom`, `Photo`, `Password`, `Poste`, `Discriminator`) VALUES
('aurelieevrard@example.org', 'Imbert', 'Corinne', NULL, 'J$8ByCcP2K', 'psychologue de l\'Éducation nationale spécialité éducation, développement et apprentissages', ''),
('catherine33@example.net', 'Mace', 'Victoire', NULL, 'm5XBtbiE&8', 'enseignant humanitaire', ''),
('celinedenis@example.net', 'Verdier', 'Dominique', NULL, 'l!i8Xn!Q9(', 'responsable de laboratoire de contrôle en chimie', ''),
('dblanc@example.net', 'Vallet', 'Margaux', NULL, ')wuq0XlJ#G', 'attaché commercial commerciale', ''),
('lucedurand@example.com', 'Didier', 'Raymond', NULL, 'L2N1u_q^%c', 'consultant informatique', ''),
('test@test.com', 'test', 'test', NULL, 'test', 'test', '1');

-- --------------------------------------------------------

--
-- Table structure for table `projet`
--

CREATE TABLE `projet` (
  `ID` int(10) NOT NULL,
  `MembreMail` varchar(255) DEFAULT NULL,
  `Nom_projet` varchar(255) DEFAULT NULL,
  `Date_debut` date DEFAULT NULL,
  `Date_fin` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `projet`
--

INSERT INTO `projet` (`ID`, `MembreMail`, `Nom_projet`, `Date_debut`, `Date_fin`) VALUES
(2, 'lucedurand@example.com', 'pénétrer', '2024-03-31', '2024-03-15'),
(3, 'lucedurand@example.com', 'droit', '2024-03-16', '2024-03-15'),
(4, 'lucedurand@example.com', 'encore', '2024-03-26', '2024-03-15'),
(5, 'lucedurand@example.com', 'souvenir', '2024-03-21', '2024-03-15');

-- --------------------------------------------------------

--
-- Table structure for table `tache`
--

CREATE TABLE `tache` (
  `ID` int(10) NOT NULL,
  `MembreMail` varchar(255) DEFAULT NULL,
  `ProjetID` int(10) NOT NULL,
  `Nom_tache` varchar(255) DEFAULT NULL,
  `Description_tache` varchar(255) DEFAULT NULL,
  `Priorite` enum('Basse','Moyenne','Haute','') DEFAULT NULL,
  `Date_debut` date DEFAULT NULL,
  `Date_fin` date DEFAULT NULL,
  `Statut` enum('A Faire','En Cours','Terminée','') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tache`
--

INSERT INTO `tache` (`ID`, `MembreMail`, `ProjetID`, `Nom_tache`, `Description_tache`, `Priorite`, `Date_debut`, `Date_fin`, `Statut`) VALUES
(1, 'aurelieevrard@example.org', 5, 'Programmation', 'Souffrance plus faux. Ceci police vie frère esprit exiger répondre.', 'Basse', '2024-03-15', '2024-03-27', 'En Cours'),
(2, 'aurelieevrard@example.org', 5, 'Base de Données', 'Beau durer fermer lèvre. Ensemble corps réveiller envie.', 'Haute', '2024-03-15', '2024-03-22', 'Terminée'),
(3, 'aurelieevrard@example.org', 5, 'Base de Données', 'Famille milieu abri maintenant fond détruire juste. Différent nécessaire autour drame inutile.', 'Moyenne', '2024-03-15', '2024-04-02', 'Terminée'),
(4, 'aurelieevrard@example.org', 5, 'Conception', 'Fils souffrance entraîner aile vivre libre. D\'Autres présent voici professeur faux.', 'Haute', '2024-03-15', '2024-03-19', 'Terminée'),
(5, 'aurelieevrard@example.org', 5, 'Conception', 'Table an passé falloir fort cacher question. Figure voisin pur travailler larme espèce.', 'Basse', '2024-03-15', '2024-03-18', 'Terminée'),
(6, 'aurelieevrard@example.org', 5, 'Conception', 'François quoi supporter presque. Bruit étranger foi lever cri heure même.', 'Basse', '2024-03-15', '2024-04-02', 'En Cours'),
(7, 'aurelieevrard@example.org', 5, 'IHM', 'Plan peuple instinct autrement dix père. Vide croire prévoir flot voyage ennemi remarquer.', 'Moyenne', '2024-03-15', '2024-03-22', 'En Cours'),
(8, 'aurelieevrard@example.org', 5, 'Test', 'Couler main réel. Nombre un françois grain. Durer agiter rendre moindre demande.', 'Basse', '2024-03-15', '2024-03-16', 'En Cours'),
(9, 'aurelieevrard@example.org', 5, 'IHM', 'Source avis présenter repas odeur. Quartier sein croix question parler neuf.', 'Basse', '2024-03-15', '2024-03-25', 'A Faire'),
(10, 'aurelieevrard@example.org', 5, 'Test', 'Difficile pourquoi davantage sourire séparer enlever. Disparaître oeuvre nu.', 'Haute', '2024-03-15', '2024-03-27', 'Terminée');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `equipe`
--
ALTER TABLE `equipe`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `intervenir` (`ProjetID`);

--
-- Indexes for table `equipe_membre`
--
ALTER TABLE `equipe_membre`
  ADD PRIMARY KEY (`EquipeID`,`MembreMail`),
  ADD KEY `appartenir2` (`MembreMail`);

--
-- Indexes for table `membre`
--
ALTER TABLE `membre`
  ADD PRIMARY KEY (`Mail`);

--
-- Indexes for table `projet`
--
ALTER TABLE `projet`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `superviser` (`MembreMail`);

--
-- Indexes for table `tache`
--
ALTER TABLE `tache`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `tache` (`ProjetID`),
  ADD KEY `realiser` (`MembreMail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `equipe`
--
ALTER TABLE `equipe`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projet`
--
ALTER TABLE `projet`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tache`
--
ALTER TABLE `tache`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `equipe`
--
ALTER TABLE `equipe`
  ADD CONSTRAINT `intervenir` FOREIGN KEY (`ProjetID`) REFERENCES `projet` (`ID`);

--
-- Constraints for table `equipe_membre`
--
ALTER TABLE `equipe_membre`
  ADD CONSTRAINT `appartenir` FOREIGN KEY (`EquipeID`) REFERENCES `equipe` (`ID`),
  ADD CONSTRAINT `appartenir2` FOREIGN KEY (`MembreMail`) REFERENCES `membre` (`Mail`);

--
-- Constraints for table `projet`
--
ALTER TABLE `projet`
  ADD CONSTRAINT `superviser` FOREIGN KEY (`MembreMail`) REFERENCES `membre` (`Mail`);

--
-- Constraints for table `tache`
--
ALTER TABLE `tache`
  ADD CONSTRAINT `realiser` FOREIGN KEY (`MembreMail`) REFERENCES `membre` (`Mail`),
  ADD CONSTRAINT `tache` FOREIGN KEY (`ProjetID`) REFERENCES `projet` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
