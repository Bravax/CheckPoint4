CREATE DATABASE  IF NOT EXISTS `carslegend` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `carslegend`;

DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar (20) NOT NULL,
  `model` varchar (20) NOT NULL,
  `year` DATE,
  `pictures` varchar (255) NULL,
  `text` TEXT NULL,
  PRIMARY KEY (`id`)
);
