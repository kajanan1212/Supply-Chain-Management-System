
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: db_buymore
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` double NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `cost` double DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `capacity` decimal(3,2) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'bed','made up of wood',100000,'bed.jpg',NULL,9),(2,'sofa','more comfortable',80000,'sofa.jpg',NULL,3),(3,'dinnig set','dinning simple set ',70000,'tabchair.jpg',NULL,0),(4,'book track','spacious',50000,'track.jpg',NULL,0),(5,'table and a bench','made up of wood',20000,'faveris-live-edge-table.png',NULL,1),(6,'chair','comfort',15000,'chair1.jpg',NULL,10),(7,'stools','stylish',8000,'stools.png',NULL,9),(8,'coffee table','circular shaped',11000,'coffeeetable.png',NULL,16),(9,'office table','more comfortable',9000,'officetable.jpg',NULL,49),(10,'cushion','super long',55000,'cushions.jpg',NULL,3),(11,'cushion','softer',12000,'cushion.jpg',NULL,1),(12,'wardrobe','melamine finish wardrobe',35000,'Wadrobe.jpg',NULL,0),(13,'recliner','fabric',25000,'recliner.jpg',NULL,11),(14,'night stand','having 2 drawers',12000,'nightstand.jpg',NULL,20),(15,'mercury bedroom','more comfortable',120000,'mercury_bedroom.jpg',NULL,10),(16,'corner stand','portable',22000,'cornerstand.jpg',NULL,5),(17,'wooden sofa','Ergonomical design',100000,'woodensofa.jpg',NULL,6),(18,'wall shelf','compact',16000,'wallshelf.jpg',NULL,7),(19,'cupboard','glass shutter',80000,'cupboard.jpg',NULL,2),(20,'study desk','shelfs and storage space',60000,'studydesk.jpg',NULL,10),(21,'dressing table','3 Storage Drawer',75000,'dressingtable.jpg',NULL,9),(22,'audio video track','compact',14000,'track(1).jpg',NULL,6),(23,'wooden coffee table','Wood grain design',40000,'woodencoffeetable.jpg',NULL,8),(24,'corner sofa','Unique Corner Module ',120000,'sofa.jpg',NULL,8),(25,'cupboard','compact',50000,'cupboard1.jpg',NULL,8),(26,'recliner sofa','more comfortable',150000,'reclinersofa.jpg',NULL,0),(27,'shoe rack','Compact design',70000,'shoerack.jpg',NULL,0),(28,'wadrobe','Adjustable shelf',90000,'wadrobe1.jpg',NULL,1),(29,'mirror table','portable',20000,'mirrortable.jpg',NULL,10),(30,'wooden shelf','3 drawers',15000,'shelf.jpg',NULL,11);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-03 19:41:20
