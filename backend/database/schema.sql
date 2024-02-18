CREATE DATABASE  IF NOT EXISTS `cars` 
USE `cars`;

DROP TABLE IF EXISTS `cars;
CREATE TABLE `cars` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar (20) NOT NULL,
  `model` varchar (20) NOT NULL,
  `year` INT NULL,
  `pictures` varchar (1000) NULL,
  `text` varchar (1000) NULL,
  PRIMARY KEY (`id`)
);
