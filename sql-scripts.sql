CREATE DATABASE `examonline` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;


CREATE TABLE `userdata` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `picture` varchar(455) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


USE `examonline`;
DROP procedure IF EXISTS `InsertData`;

DELIMITER $$
USE `examonline`$$
CREATE PROCEDURE `InsertData` (name varchar(45),pwd varchar(45),pic varchar(255))
BEGIN
INSERT INTO userdata(name,password,picture)
VALUES(name,pwd,pic);
END$$

DELIMITER ;

