-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: db_buymore
-- ------------------------------------------------------
-- Server version	8.0.28
--
-- Table structure for table `assistant`
--

DROP TABLE IF EXISTS `assistant`;
CREATE TABLE `assistant` (
  `assistant_id` varchar(45) NOT NULL,
  `email` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `phone_num` varchar(15) NOT NULL,
  `image` varchar(50) DEFAULT 'default.jpg',
  `salary` int NOT NULL,
  PRIMARY KEY (`assistant_id`),
  UNIQUE KEY `email` (`email`)
)

INSERT INTO `assistant` VALUES ('assistant_0687595195f2ae2a','arun@gmail.com','Arun','Praveen','754103623','default.jpg',16000),('assistant_1777ccfbe2f54e33','ahamed@gmail.com','Ahamed','Immran','778932465','default.jpg',7000),('assistant_219d7eb66d781a0f','thenuja@gmail.com','Thenuja','Rajaah','758931025','default.jpg',20000),('assistant_23c294b8e21df320','ragavan@gmail.com','Ragavan','Harish','782326521','default.jpg',25000),('assistant_2664e1e2f4e741ad','balaji@gmail.com','Ravinfrea','Balaji','7765651413','default.jpg',3000),('assistant_403e78f3c41df612','vijay@gmail.com','Vaijaya','Rajan','778491625','default.jpg',3000),('assistant_5b46f662983f7380','mervin@gmail.com','Mervin','Stephen','702553613','default.jpg',20000),('assistant_68a7a3b5a90dcaf9','fasrina@gmail.com','Fasrina','Mohammed','713265204','default.jpg',10000),('assistant_6a8207f0bbfe2916','david@gmail.com','David','Miller','758301423','default.jpg',25000),('assistant_9f946550193f61a5','shamini@gmail.com','Shamini','Kunaratna','715028906','default.jpg',4500),('assistant_ac1309e9bf1fc143','answar@gmail.com','Answar','Farvin','772265014','default.jpg',30000),('assistant_bdf90093c8c0dd6f','thaseek@gmail.com','Thaseek','Karan','718886236','default.jpg',6000),('assistant_c213fe870e704449','nithush@gmail.com','Nithush','Sothilingam','758965654','default.jpg',5000),('assistant_cb80289cd53f4cf0','rishaan@gmail.com','Rishaan','Gunaa','772563108','default.jpg',5000),('assistant_e3452c798bde01f4','sandaali@gmail.com','Sandaali','Rajapaksha','778903403','default.jpg',3500),('assistant_f6f6ac85eac5c7e3','gajan@gmail.com','Gajan','Rajendran','712360430','default.jpg',15000);

--
-- Table structure for table `contains`
--

DROP TABLE IF EXISTS `contains`;
CREATE TABLE `contains` (
  `truck_s_id` varchar(36) NOT NULL,
  `order_id` varchar(32) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `truckSid` (`truck_s_id`)
)

INSERT INTO `contains` VALUES ('ts_0688e529d3851188','ord_2d2465be26d1119b'),('ts_166a3ad208238f93','ord_d1ff93b480b1e20b'),('ts_1c70355c2c9bd22d','ord_67aec47c80993e65'),('ts_24d98150e5f3d63f','ord_9672e351f3fb47b0'),('ts_2ca16483f6c499c3','ord_4030d3baf57f76e6'),('ts_3a720fd2a0aa772f','ord_611750384dff3819'),('ts_3c4f860030ef8c59','ord_ba720377852a3d8d'),('ts_400aafe85c846b12','ord_81380691fdb2affd'),('ts_401985659f09858a','ord_4355796ec5bf9be2'),('ts_404aff9e068e5282','ord_1770ab594749fdce'),('ts_409860651c1de640','ord_94437ea8add0cf9c'),('ts_42d95fcdcb49dfe5','ord_6b90304bafe1722c'),('ts_44a72cd652d6256a','ord_88bd1bd4fa51ab6c'),('ts_45400546245964a5','ord_249071554b9e2c9a'),('ts_67bff3c7ddbd8a1c','ord_583425231d7e2840'),('ts_67bff3c7ddbd8a1c','ord_9407a2057c25963d'),('ts_6f98b0ea3ce92f01','ord_069deb13ba081bc2'),('ts_72585b1271722058','ord_e22cad232fe14479'),('ts_786126e0705e3326','ord_7a10892c1ee80d4b'),('ts_7999295746f3373d','ord_868a16cad7e5fac7'),('ts_7bdb0e755345055d','ord_8212b02683c9b8e5'),('ts_801a18f6edcaf5d6','ord_76dc8d8333bba9fb'),('ts_8168a013bc894d2e','ord_2ac20da509e2757e'),('ts_8813bab02683b3a0','ord_7297da4e563cadef'),('ts_9725ad9708fb600c','ord_77ded641cac8cfab'),('ts_9baaf923a6246a41','ord_d67f988d736226f0'),('ts_a0cfb6f61af7c266','ord_af76c932902d4d1e'),('ts_a29e569ffe70318c','ord_8868174ae0a8291a'),('ts_a94e097ef72b085b','ord_5de023cf23497bb8'),('ts_a97ed309f782c8b6','ord_088eb191be9e28a8'),('ts_abc7d6a392a7efa8','ord_bdd9fa4985c90f2f'),('ts_ae04b75a7331a831','ord_401b562655fd36f6'),('ts_ae60f83974c09ebb','ord_8d51bcbcc2e4b7a8'),('ts_b091a5bb4946a639','ord_747561f4c31e9e80'),('ts_b61b3054ade97d6e','ord_aeb1e183c204693e'),('ts_b7db9f7eef425afe','ord_4138add56918ab8b'),('ts_d3185418aa1f4f9b','ord_cf40cf649e0964ff'),('ts_d8bb6b7085eb1309','ord_25ea1aab04a6468b'),('ts_d8bb6b7085eb1309','ord_612548eced419d9a'),('ts_e0cd1a81ba8c534f','ord_eba4b50e8d608a2e'),('ts_e292568f00ab2420','ord_00f95e17229e5466'),('ts_e292568f00ab2420','ord_2e3f983f81f95054'),('ts_e793143c9d986e69','ord_609c51aca5807365'),('ts_ec841f679200aa96','ord_9bba801d7d5832f8'),('ts_ec841f679200aa96','ord_fdf69dc5c1402497'),('ts_ed53f3df004515a4','ord_9c94d1a68be8b2e6'),('ts_f07886f9f8a8d3f3','ord_193cfeefcacdb527'),('ts_f23bb66fa545f26e','ord_424b176f0493929b'),('ts_fe08794b98dc7fa3','ord_410fe2f820dd32ba');

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `customer_id` varchar(256) NOT NULL,
  `email` varchar(64) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `phone_num` varchar(45) DEFAULT NULL,
  `password` varchar(128) NOT NULL,
  `type` enum('active','admin','store') NOT NULL DEFAULT 'active',
  `image` varchar(45) NOT NULL DEFAULT 'user.jpg',
  PRIMARY KEY (`customer_id`)
)

INSERT INTO `customer` VALUES ('customer_00bd00a4cbd6467d','gopi@gmail.com','Gopinath','Shanmugavadivel','0778696935','$2b$10$AAoPD35tF0jPN15m7U/J0.e/MjnIESoUdOC.2wtAqPi86Bkr3Ka8S','active','user.jpg'),('customer_2b2ac95c83b7e7e7','nanthu@gmail.com','Nanthu','Eswaran','0763589624','$2b$10$Fm4sLPpIZIvBcOWAgZcYVelgUZI4T3uCvtwexKvHB0m.rtwUEoFGy','active','user.jpg'),('customer_3fe9234cd3ebba5b','kajanan@gmail.com','Selva','Kajanan','769645616','$2b$10$ad3h9Xdji0s2FfeErAbanOtDilhQeWOp7Hte5HD2WanNEyhIBSlr6','active','user.jpg'),('customer_4a39ec13b4f033e2','sakeer@gmail.com','Sakeer','Thiyakarase','0779845465','$2b$10$9fo8/l.D1AE6fCE9nzrCNOLhfW5XpP0iveR51JImY24avfER73WNi','active','user.jpg'),('customer_70d6d2a7e594f0aa','sivakajan@gmail.com','Siva','Sivakajan','779456546','$2b$10$ad3h9Xdji0s2FfeErAbanOtDilhQeWOp7Hte5HD2WanNEyhIBSlr6','admin','user.jpg'),('customer_7413379246a5829b','siva@gmail.com','Sakeer','Thiyakarase','0779845465','$2b$10$y9KQA3eQILo.bpmgeGpIQefGBYYj8RY24C..b9kMJIW3oLy2lKLTm','active','user.jpg'),('customer_9e8878f05a7ace7e','lasksi@gmail.com','Laksi','Tharma','0776519156','$2b$10$ad3h9Xdji0s2FfeErAbanOtDilhQeWOp7Hte5HD2WanNEyhIBSlr6','active','user.jpg');

--
-- Table structure for table `customer_order`
--

DROP TABLE IF EXISTS `customer_order`;
CREATE TABLE `customer_order` (
  `order_id` varchar(256) NOT NULL,
  `date_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `state` enum('created','paid','trainsheduled','traintransport','recievedstore','routescheduled','truckscheduled','ontheway','delivered','cancelled') DEFAULT 'created',
  `total_price` int DEFAULT NULL,
  `capacity` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
)

INSERT INTO `customer_order` VALUES ('ord_00f95e17229e5466','2022-02-18 12:48:43','delivered',330000,110.00),('ord_069deb13ba081bc2','2022-04-15 13:06:43','delivered',600000,30.00),('ord_088eb191be9e28a8','2022-04-15 13:06:03','delivered',80000,30.00),('ord_1770ab594749fdce','2022-03-03 10:15:06','delivered',265000,60.00),('ord_193cfeefcacdb527','2022-07-14 08:24:12','delivered',342000,150.00),('ord_249071554b9e2c9a','2022-02-18 12:45:02','delivered',342000,160.00),('ord_25ea1aab04a6468b','2022-07-15 11:21:47','delivered',50000,40.00),('ord_2ac20da509e2757e','2022-03-03 10:06:19','delivered',23000,15.00),('ord_2d2465be26d1119b','2022-05-15 12:30:28','delivered',205000,50.00),('ord_2e3f983f81f95054','2022-02-18 12:51:24','delivered',3000,5.00),('ord_401b562655fd36f6','2022-05-15 12:18:40','delivered',311000,35.00),('ord_4030d3baf57f76e6','2022-03-03 09:47:40','delivered',110000,110.00),('ord_410fe2f820dd32ba','2022-05-15 12:23:51','delivered',130000,15.00),('ord_4138add56918ab8b','2022-04-15 13:17:43','delivered',102000,20.00),('ord_424b176f0493929b','2022-05-15 12:46:13','delivered',147000,45.00),('ord_4355796ec5bf9be2','2022-02-18 12:25:30','delivered',235000,120.00),('ord_583425231d7e2840','2022-02-24 11:08:02','cancelled',186000,65.00),('ord_5de023cf23497bb8','2022-05-15 12:42:37','delivered',78000,50.00),('ord_609c51aca5807365','2022-03-03 11:16:56','delivered',155000,25.00),('ord_611750384dff3819','2022-03-03 09:35:09','delivered',160000,60.00),('ord_612548eced419d9a','2022-02-19 12:48:42','delivered',30000,10.00),('ord_67aec47c80993e65','2022-03-03 11:14:33','delivered',26000,15.00),('ord_6b90304bafe1722c','2022-04-15 13:04:58','delivered',160000,20.00),('ord_7297da4e563cadef','2022-02-18 12:35:42','delivered',113000,90.00),('ord_747561f4c31e9e80','2022-05-15 12:24:51','delivered',158000,55.00),('ord_76dc8d8333bba9fb','2022-04-15 13:13:53','delivered',124000,90.00),('ord_77ded641cac8cfab','2022-03-03 11:07:11','delivered',89000,15.00),('ord_7a10892c1ee80d4b','2022-05-15 12:17:18','delivered',215000,70.00),('ord_81380691fdb2affd','2022-03-03 10:17:37','delivered',33000,10.00),('ord_8212b02683c9b8e5','2022-04-15 13:04:16','delivered',209000,30.00),('ord_868a16cad7e5fac7','2022-05-15 10:44:48','delivered',80000,40.00),('ord_8868174ae0a8291a','2022-03-03 11:12:41','delivered',64000,55.00),('ord_88bd1bd4fa51ab6c','2022-03-03 10:11:25','delivered',74000,40.00),('ord_8d51bcbcc2e4b7a8','2022-07-15 12:25:42','delivered',82000,70.00),('ord_9407a2057c25963d','2022-03-03 09:28:57','delivered',175000,35.00),('ord_94437ea8add0cf9c','2022-05-15 12:32:32','delivered',81000,25.00),('ord_9672e351f3fb47b0','2022-02-18 12:38:59','delivered',280000,70.00),('ord_9bba801d7d5832f8','2022-07-14 06:36:06','delivered',120000,15.00),('ord_9c94d1a68be8b2e6','2022-04-15 13:18:17','delivered',132000,60.00),('ord_aeb1e183c204693e','2022-05-15 11:31:16','delivered',177000,75.00),('ord_af76c932902d4d1e','2022-05-15 12:54:59','delivered',11000,5.00),('ord_ba720377852a3d8d','2022-03-03 11:10:13','delivered',135000,35.00),('ord_bdd9fa4985c90f2f','2022-05-15 12:38:21','delivered',250000,55.00),('ord_cf40cf649e0964ff','2022-04-15 13:13:08','delivered',111000,45.00),('ord_d1ff93b480b1e20b','2022-04-15 13:17:03','delivered',125000,50.00),('ord_d67f988d736226f0','2022-05-15 12:55:47','delivered',135000,15.00),('ord_e22cad232fe14479','2022-05-15 12:37:01','delivered',155000,80.00),('ord_eba4b50e8d608a2e','2022-07-15 14:35:59','delivered',100000,40.00),('ord_ed9acb8d43d44c5f','2022-04-15 13:19:05','cancelled',200000,30.00),('ord_fdf69dc5c1402497','2022-07-14 09:33:05','delivered',100000,40.00);

--
-- Table structure for table `district`
--

DROP TABLE IF EXISTS `district`;
CREATE TABLE `district` (
  `district` varchar(16) NOT NULL,
  `city` varchar(45) NOT NULL,
  KEY `district` (`district`),
  CONSTRAINT `district_dis` FOREIGN KEY (`district`) REFERENCES `store` (`first_name`) ON UPDATE CASCADE
)

INSERT INTO `district` VALUES ('colombo','colombo'),('colombo','fort'),('colombo','slave island'),('colombo','kollupitiya'),('colombo','bambalapitiya'),('colombo','narahenpitiya'),('colombo','wellawatte'),('colombo','Cinamon gardens'),('colombo','borella'),('colombo','dematagoda'),('colombo','maradana'),('colombo','pettah'),('colombo','hulftsdrop'),('colombo','kotahena'),('colombo','grandpass'),('colombo','mattakuliya'),('colombo','moratuwa'),('colombo','mount lavaniya'),('jaffna','jaffna town'),('jaffna','nallur'),('jaffna','chavakachcheri'),('jaffna','Chunnakam'),('jaffna','Koppay'),('jaffna','Thellipalai'),('jaffna','kankesanthurai'),('jaffna','pandatharippu'),('jaffna','vaddukottai'),('jaffna','islands'),('jaffna','karainagar'),('jaffna','kodikamam'),('jaffna','kolumbuthurai'),('galle','Ahangama'),('galle','Baddegama'),('galle','Balapitiya'),('galle','Batapola'),('galle','Bentota'),('galle','Boossa'),('galle','Habaraduwa'),('galle','Hiniduma'),('galle','Hikkaduwa'),('galle','Nagoda'),('galle','Pitigala'),('galle','Rathgama'),('galle','Udugama'),('galle','Uragasmanhandiya'),('galle','Wanduramba'),('galle','Yakkalamulla'),('trincomalee','Gomarankadawala'),('trincomalee','Kantalai'),('trincomalee','Kinniya'),('trincomalee','Kuchchaveli'),('trincomalee','morawewa'),('trincomalee','muttur'),('trincomalee','siripura'),('trincomalee','seruvila'),('trincomalee','thampalakamam'),('trincomalee','trincomalee'),('trincomalee','verugal'),('matara','Akuressa'),('matara','Athuraliya'),('matara','Devinuwara'),('matara','Dickwella'),('matara','Hakmanamburupitiya'),('matara','Kirinda'),('matara','Kotapola'),('matara','Malimbada'),('matara','Matara'),('matara','Thihagoda'),('matara','Weligama'),('matara','Welipitiya');

--
-- Table structure for table `driver`
--

DROP TABLE IF EXISTS `driver`;
CREATE TABLE `driver` (
  `driver_id` varchar(45) NOT NULL,
  `email` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `phone_num` varchar(15) NOT NULL,
  `image` varchar(50) DEFAULT 'default.jpg',
  `salary` int NOT NULL,
  PRIMARY KEY (`driver_id`),
  UNIQUE KEY `email` (`email`)
)

INSERT INTO `driver` VALUES ('driver_1f43be269dccf348','kamal@gmail.com','Kamal','Sundar','212222104','default.jpg',5000),('driver_2a3d2719b2faefaa','thusithan@gmail.com','Thusithan','Satheesh','753654813','default.jpg',7000),('driver_3034254893979f84','thivithan@gmail.com','Thivithan','Chanthiran','775653532','default.jpg',9000),('driver_43404d3c4bce93be','kirithi@gmail.com','kirithi','Shetty','771458995','default.jpg',4500),('driver_443c7722769da7ad','mahendran@gmail.com','Mahendran','Vignesh','746652656','default.jpg',6000),('driver_4668c0f63de09cd4','kamilan@gmail.com','Kamilan','Vijay','718539665','default.jpg',4000),('driver_604663e54f15791c','kamalan@gmail.com','Kamalan','Sundar','212222104','default.jpg',6000),('driver_890ea5b096b8abf1','avanik@gmail.com','Avanik','Steven','718569354','default.jpg',5000),('driver_8937ac2fe9ef2ba1','jeyakulan@gmail.com','Jeyakulan','Ariyaratnam','776565259','default.jpg',6000),('driver_9d1926bef7bd19ff','marry@gmail.com','Marry','Joseph','702558965','default.jpg',5000),('driver_b44ec719f48edc92','mathushan@gmail.com','Mathushan','Mariyaratnam','703684955','default.jpg',8900),('driver_b51b222c8bfcae57','hari@gmail.com','Hari','Kaalan','705863214','default.jpg',4500),('driver_bea4aaa400531e9d','nuhesh@gmail.com','Nuhesh','Kumar','718696326','default.jpg',8000),('driver_d53d553ef53c06db','saru@gmail.com','Sarukan','Moorthy','212228574','default.jpg',6000),('driver_d90cd045533c44d3','yalan@gmail.com','Tom','Yalan','715586395','default.jpg',4500),('driver_e924c01e94e4b726','tharmila@gmail.com','Tharmila','Kamalesh','768596147','default.jpg',9000);

--
-- Table structure for table `has`
--

DROP TABLE IF EXISTS `has`;
CREATE TABLE `has` (
  `order_id` varchar(256) NOT NULL,
  `product_id` varchar(256) NOT NULL,
  `count` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`order_id`,`product_id`)
)

INSERT INTO `has` VALUES ('ord_00f95e17229e5466','pro_1',1),('ord_00f95e17229e5466','pro_19',1),('ord_00f95e17229e5466','pro_26',1),('ord_069deb13ba081bc2','pro_da48f1d52e11204c',3),('ord_088eb191be9e28a8','pro_19',1),('ord_1770ab594749fdce','pro_30',1),('ord_1770ab594749fdce','pro_4',1),('ord_1770ab594749fdce','pro_da48f1d52e11204c',1),('ord_193cfeefcacdb527','pro_16',1),('ord_193cfeefcacdb527','pro_19',4),('ord_249071554b9e2c9a','pro_10',3),('ord_249071554b9e2c9a','pro_12',1),('ord_249071554b9e2c9a','pro_16',1),('ord_249071554b9e2c9a','pro_20',2),('ord_25ea1aab04a6468b','pro_13',2),('ord_2ac20da509e2757e','pro_11',1),('ord_2ac20da509e2757e','pro_8',1),('ord_2d2465be26d1119b','pro_12',1),('ord_2d2465be26d1119b','pro_17',1),('ord_2d2465be26d1119b','pro_27',1),('ord_2e3f983f81f95054','pro_256f8ebe3aa8aee0',1),('ord_401b562655fd36f6','pro_17',1),('ord_401b562655fd36f6','pro_8',1),('ord_401b562655fd36f6','pro_da48f1d52e11204c',1),('ord_4030d3baf57f76e6','pro_23',1),('ord_4030d3baf57f76e6','pro_25',1),('ord_4030d3baf57f76e6','pro_5',1),('ord_410fe2f820dd32ba','pro_331c5e44df06d269',1),('ord_410fe2f820dd32ba','pro_ae208df256517dda',1),('ord_410fe2f820dd32ba','pro_da12e1c67a5cabb3',1),('ord_4138add56918ab8b','pro_11',1),('ord_4138add56918ab8b','pro_da12e1c67a5cabb3',2),('ord_424b176f0493929b','pro_14',1),('ord_424b176f0493929b','pro_2',1),('ord_424b176f0493929b','pro_ae208df256517dda',1),('ord_4355796ec5bf9be2','pro_13',1),('ord_4355796ec5bf9be2','pro_19',2),('ord_4355796ec5bf9be2','pro_4',1),('ord_583425231d7e2840','pro_13',1),('ord_583425231d7e2840','pro_26',1),('ord_583425231d7e2840','pro_8',1),('ord_5de023cf23497bb8','pro_9',2),('ord_5de023cf23497bb8','pro_e9515a3921a0bec5',1),('ord_609c51aca5807365','pro_17',1),('ord_609c51aca5807365','pro_ae208df256517dda',1),('ord_611750384dff3819','pro_13',1),('ord_611750384dff3819','pro_15',1),('ord_611750384dff3819','pro_6',1),('ord_612548eced419d9a','pro_17',1),('ord_67aec47c80993e65','pro_6',1),('ord_67aec47c80993e65','pro_8',1),('ord_6b90304bafe1722c','pro_2',2),('ord_7297da4e563cadef','pro_18',3),('ord_7297da4e563cadef','pro_25',1),('ord_7297da4e563cadef','pro_6',1),('ord_747561f4c31e9e80','pro_13',1),('ord_747561f4c31e9e80','pro_256f8ebe3aa8aee0',1),('ord_747561f4c31e9e80','pro_27',1),('ord_747561f4c31e9e80','pro_e9515a3921a0bec5',1),('ord_76dc8d8333bba9fb','pro_16',2),('ord_76dc8d8333bba9fb','pro_19',1),('ord_77ded641cac8cfab','pro_22',1),('ord_77ded641cac8cfab','pro_c374a96e60778abb',1),('ord_77ded641cac8cfab','pro_da1fcb3cbbd79e34',1),('ord_7a10892c1ee80d4b','pro_15',1),('ord_7a10892c1ee80d4b','pro_19',1),('ord_7a10892c1ee80d4b','pro_6',1),('ord_81380691fdb2affd','pro_256f8ebe3aa8aee0',1),('ord_81380691fdb2affd','pro_da1fcb3cbbd79e34',1),('ord_8212b02683c9b8e5','pro_9',1),('ord_8212b02683c9b8e5','pro_da48f1d52e11204c',1),('ord_868a16cad7e5fac7','pro_10',1),('ord_868a16cad7e5fac7','pro_22',1),('ord_868a16cad7e5fac7','pro_8',1),('ord_8868174ae0a8291a','pro_22',1),('ord_8868174ae0a8291a','pro_25',1),('ord_88bd1bd4fa51ab6c','pro_10',1),('ord_88bd1bd4fa51ab6c','pro_7',1),('ord_88bd1bd4fa51ab6c','pro_8',1),('ord_8d51bcbcc2e4b7a8','pro_13',1),('ord_8d51bcbcc2e4b7a8','pro_18',3),('ord_8d51bcbcc2e4b7a8','pro_9',1),('ord_9407a2057c25963d','pro_3',1),('ord_9407a2057c25963d','pro_c374a96e60778abb',1),('ord_9407a2057c25963d','pro_e9515a3921a0bec5',1),('ord_94437ea8add0cf9c','pro_18',1),('ord_94437ea8add0cf9c','pro_1c0a5094dcf6b7c6',1),('ord_94437ea8add0cf9c','pro_30',1),('ord_9672e351f3fb47b0','pro_15',1),('ord_9672e351f3fb47b0','pro_23',1),('ord_9672e351f3fb47b0','pro_24',1),('ord_9bba801d7d5832f8','pro_331c5e44df06d269',1),('ord_9bba801d7d5832f8','pro_c374a96e60778abb',2),('ord_9c94d1a68be8b2e6','pro_14',1),('ord_9c94d1a68be8b2e6','pro_15',1),('ord_aeb1e183c204693e','pro_1',1),('ord_aeb1e183c204693e','pro_16',1),('ord_aeb1e183c204693e','pro_ae208df256517dda',1),('ord_af76c932902d4d1e','pro_8',1),('ord_ba720377852a3d8d','pro_20',1),('ord_ba720377852a3d8d','pro_21',1),('ord_bdd9fa4985c90f2f','pro_331c5e44df06d269',1),('ord_bdd9fa4985c90f2f','pro_5',1),('ord_bdd9fa4985c90f2f','pro_da48f1d52e11204c',1),('ord_cf40cf649e0964ff','pro_1',1),('ord_cf40cf649e0964ff','pro_8',1),('ord_d1ff93b480b1e20b','pro_10',1),('ord_d1ff93b480b1e20b','pro_3',1),('ord_d67f988d736226f0','pro_da12e1c67a5cabb3',3),('ord_e22cad232fe14479','pro_13',1),('ord_e22cad232fe14479','pro_23',1),('ord_e22cad232fe14479','pro_28',1),('ord_eba4b50e8d608a2e','pro_1',1),('ord_ed9acb8d43d44c5f','pro_2',1),('ord_ed9acb8d43d44c5f','pro_e9515a3921a0bec5',2),('ord_fdf69dc5c1402497','pro_1',1);

--
-- Table structure for table `hires`
--

DROP TABLE IF EXISTS `hires`;
CREATE TABLE `hires` (
  `store_id` varchar(45) NOT NULL,
  `worker_id` varchar(45) NOT NULL,
  `workerType` enum('driver','assistant') NOT NULL DEFAULT 'driver',
  PRIMARY KEY (`worker_id`,`workerType`)
)

INSERT INTO `hires` VALUES ('store_1b10c3f92d9be701','assistant_0687595195f2ae2a','assistant'),('store_fd07fd48ae073554','assistant_1777ccfbe2f54e33','assistant'),('store_1b10c3f92d9be701','assistant_219d7eb66d781a0f','assistant'),('store_b75d288ed6dd8aa1','assistant_23c294b8e21df320','assistant'),('store_d207fd48aeinfnna2','assistant_2664e1e2f4e741ad','assistant'),('store_d207fd48aeinfnna2','assistant_403e78f3c41df612','assistant'),('store_b75d288ed6dd8aa1','assistant_5b46f662983f7380','assistant'),('store_b75d288ed6dd8aa1','assistant_68a7a3b5a90dcaf9','assistant'),('store_1b10c3f92d9be701','assistant_6a8207f0bbfe2916','assistant'),('store_fd07fd48ae073554','assistant_9f946550193f61a5','assistant'),('store_1b10c3f92d9be701','assistant_ac1309e9bf1fc143','assistant'),('store_fd07fd48ae073554','assistant_cb80289cd53f4cf0','assistant'),('store_fd07fd48ae073554','assistant_e3452c798bde01f4','assistant'),('store_1b10c3f92d9be701','assistant_f6f6ac85eac5c7e3','assistant'),('store_fd07fd48ae073554','driver_1f43be269dccf348','driver'),('store_1b10c3f92d9be701','driver_2a3d2719b2faefaa','driver'),('store_d207fd48aeinfnna2','driver_3034254893979f84','driver'),('store_fd07fd48ae073554','driver_43404d3c4bce93be','driver'),('store_d207fd48aeinfnna2','driver_443c7722769da7ad','driver'),('store_d207fd48aeinfnna2','driver_4668c0f63de09cd4','driver'),('store_b75d288ed6dd8aa1','driver_604663e54f15791c','driver'),('store_b75d288ed6dd8aa1','driver_890ea5b096b8abf1','driver'),('store_b75d288ed6dd8aa1','driver_8937ac2fe9ef2ba1','driver'),('store_fd07fd48ae073554','driver_9d1926bef7bd19ff','driver'),('store_d207fd48aeinfnna2','driver_b44ec719f48edc92','driver'),('store_1b10c3f92d9be701','driver_b51b222c8bfcae57','driver'),('store_b75d288ed6dd8aa1','driver_bea4aaa400531e9d','driver'),('store_1b10c3f92d9be701','driver_d53d553ef53c06db','driver'),('store_fd07fd48ae073554','driver_d90cd045533c44d3','driver'),('store_d207fd48aeinfnna2','driver_e924c01e94e4b726','driver');

--
-- Table structure for table `leads`
--

DROP TABLE IF EXISTS `leads`;
CREATE TABLE `leads` (
  `route_id` varchar(16) NOT NULL,
  `store_id` varchar(45) NOT NULL,
  PRIMARY KEY (`route_id`)
)

INSERT INTO `leads` VALUES ('route_1','store_fd07fd48ae073554'),('route_10','store_1b10c3f92d9be701'),('route_11','store_1b10c3f92d9be701'),('route_12','store_1b10c3f92d9be701'),('route_13','store_1b10c3f92d9be701'),('route_14','store_1b10c3f92d9be701'),('route_15','store_b75d288ed6dd8aa1'),('route_16','store_b75d288ed6dd8aa1'),('route_17','store_b75d288ed6dd8aa1'),('route_18','store_b75d288ed6dd8aa1'),('route_19','store_b75d288ed6dd8aa1'),('route_2','store_fd07fd48ae073554'),('route_20','store_b75d288ed6dd8aa1'),('route_21','store_d207fd48aeinfnna2'),('route_22','store_d207fd48aeinfnna2'),('route_23','store_d207fd48aeinfnna2'),('route_24','store_d207fd48aeinfnna2'),('route_25','store_d207fd48aeinfnna2'),('route_26','store_uhr30jrfnwoj83rwh'),('route_3','store_fd07fd48ae073554'),('route_4','store_fd07fd48ae073554'),('route_5','store_fd07fd48ae073554'),('route_6','store_fd07fd48ae073554'),('route_7','store_1b10c3f92d9be701'),('route_8','store_1b10c3f92d9be701'),('route_9','store_1b10c3f92d9be701');

--
-- Table structure for table `owns`
--

DROP TABLE IF EXISTS `owns`;
CREATE TABLE `owns` (
  `store_id` varchar(45) NOT NULL,
  `truck_id` varchar(45) NOT NULL,
  PRIMARY KEY (`truck_id`)
)

INSERT INTO `owns` VALUES ('store_fd07fd48ae073554','truck_1ea520fe4ed78e43'),('store_uhr30jrfnwoj83rwh','truck_25a7dc7ffc526092'),('store_1b10c3f92d9be701','truck_2b985859728c9403'),('store_b75d288ed6dd8aa1','truck_318aab1b3116c570'),('store_fd07fd48ae073554','truck_3e4f69371b852c7e'),('store_1b10c3f92d9be701','truck_44d3fd6fee501110'),('store_d207fd48aeinfnna2','truck_45fefb797b1938d2'),('store_b75d288ed6dd8aa1','truck_60c009c3bbf6dc4a'),('store_fd07fd48ae073554','truck_7ec5089809aaeaba'),('store_d207fd48aeinfnna2','truck_a09c314727b6cf7c'),('store_1b10c3f92d9be701','truck_aa7c60b3bbcbafa0'),('store_b75d288ed6dd8aa1','truck_ae1b46af93e7b637'),('store_fd07fd48ae073554','truck_bd3350aa7b1f8856'),('store_1b10c3f92d9be701','truck_c9e7d83de33102d8'),('store_1b10c3f92d9be701','truck_d34ab144e68d21bd'),('store_fd07fd48ae073554','truck_d6193228ab4f6435'),('store_1b10c3f92d9be701','truck_dec4ebceb6442377');

--
-- Table structure for table `places`
--

DROP TABLE IF EXISTS `places`;
CREATE TABLE `places` (
  `customer_id` varchar(256) NOT NULL,
  `order_id` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(45) DEFAULT NULL,
  `district` varchar(45) DEFAULT NULL,
  KEY `district` (`district`)
)

INSERT INTO `places` VALUES ('customer_4a39ec13b4f033e2','ord_00f95e17229e5466','Malapay','Chunnakam','jaffna'),('customer_7413379246a5829b','ord_1770ab594749fdce','No 126, Saara Mawarthai Kollupitiya','kollupitiya','colombo'),('customer_4a39ec13b4f033e2','ord_249071554b9e2c9a','Mailani','Chunnakam','jaffna'),('customer_9e8878f05a7ace7e','ord_2ac20da509e2757e','No 25. Seruvila South kaliruvil','seruvila','trincomalee'),('customer_4a39ec13b4f033e2','ord_2e3f983f81f95054','Soorawathai','Chunnakam','jaffna'),('customer_9e8878f05a7ace7e','ord_4030d3baf57f76e6','No 52. Moratuwa East.','moratuwa','colombo'),('customer_4a39ec13b4f033e2','ord_4355796ec5bf9be2','Soorawathai','Chunnakam','jaffna'),('customer_9e8878f05a7ace7e','ord_583425231d7e2840','Kinniya South Madduvil','Kinniya','trincomalee'),('customer_7413379246a5829b','ord_609c51aca5807365','No 156, Kadduviya Weligama','Weligama','matara'),('customer_9e8878f05a7ace7e','ord_611750384dff3819','No 23. 3rd lane, Mount Lavaniya','mount lavaniya','colombo'),('customer_7413379246a5829b','ord_67aec47c80993e65','No 123, Kirinda','Kirinda','matara'),('customer_4a39ec13b4f033e2','ord_7297da4e563cadef','Erlalai','Chunnakam','jaffna'),('customer_7413379246a5829b','ord_77ded641cac8cfab','No 45, 5th lane Karahawela Dickwella','Dickwella','matara'),('customer_7413379246a5829b','ord_81380691fdb2affd','No 265, 3rd cross road Wellawatte','wellawatte','colombo'),('customer_7413379246a5829b','ord_8868174ae0a8291a','No 125, Dakurela road Devinuwara','Devinuwara','matara'),('customer_7413379246a5829b','ord_88bd1bd4fa51ab6c','No 18, Temple road Kantalai','Kantalai','trincomalee'),('customer_9e8878f05a7ace7e','ord_9407a2057c25963d','No 13. Kinniya South','Kinniya','trincomalee'),('customer_4a39ec13b4f033e2','ord_9672e351f3fb47b0','Mallakam','Chunnakam','jaffna'),('customer_7413379246a5829b','ord_ba720377852a3d8d','No 23, Akarahaya South Akuressa','Akuressa','matara'),('customer_9e8878f05a7ace7e','ord_9bba801d7d5832f8','No 23/3 North Avenue','fort','colombo'),('customer_9e8878f05a7ace7e','ord_193cfeefcacdb527','Muthur East','muttur','trincomalee'),('customer_9e8878f05a7ace7e','ord_fdf69dc5c1402497','lane','fort','colombo'),('customer_3fe9234cd3ebba5b','ord_612548eced419d9a','Inuvil','Thellipalai','jaffna'),('customer_3fe9234cd3ebba5b','ord_25ea1aab04a6468b','Inuvil south','Thellipalai','jaffna'),('customer_3fe9234cd3ebba5b','ord_8d51bcbcc2e4b7a8','Kandaiya Lane','chavakachcheri','jaffna'),('customer_3fe9234cd3ebba5b','ord_eba4b50e8d608a2e','Nallur main road','nallur','jaffna'),('customer_3fe9234cd3ebba5b','ord_4f35d25caf3a2b9b','K road','chavakachcheri','jaffna'),('customer_3fe9234cd3ebba5b','ord_868a16cad7e5fac7','3rd Lane Colombo 15, Slave island','slave island','colombo'),('customer_3fe9234cd3ebba5b','ord_aeb1e183c204693e','Hindu College Road, Chavakachcheri','chavakachcheri','jaffna'),('customer_3fe9234cd3ebba5b','ord_7a10892c1ee80d4b','No 13, Nerahenpitiya','narahenpitiya','colombo'),('customer_3fe9234cd3ebba5b','ord_401b562655fd36f6','No 17, Union road','Thellipalai','jaffna'),('customer_3fe9234cd3ebba5b','ord_410fe2f820dd32ba','No 254, Station road Borella','borella','colombo'),('customer_3fe9234cd3ebba5b','ord_747561f4c31e9e80','Temple road vaddu south vaddukottai','vaddukottai','jaffna'),('customer_4a39ec13b4f033e2','ord_2d2465be26d1119b','No 125, Pettah','pettah','colombo'),('customer_4a39ec13b4f033e2','ord_94437ea8add0cf9c','No 145, Kolumbuthurai','kolumbuthurai','jaffna'),('customer_4a39ec13b4f033e2','ord_e22cad232fe14479','no 123, grandpass','grandpass','colombo'),('customer_4a39ec13b4f033e2','ord_bdd9fa4985c90f2f','No 12, Post office lane Puttur','islands','jaffna'),('customer_4a39ec13b4f033e2','ord_5de023cf23497bb8','no 45, Mount Lavaniya','mount lavaniya','colombo'),('customer_4a39ec13b4f033e2','ord_424b176f0493929b','no 63, Karainagar','karainagar','jaffna'),('customer_00bd00a4cbd6467d','ord_af76c932902d4d1e','no 12, Athuraliya','Athuraliya','matara'),('customer_00bd00a4cbd6467d','ord_d67f988d736226f0','No 45, morawewa','morawewa','trincomalee'),('customer_00bd00a4cbd6467d','ord_8212b02683c9b8e5','No 42, Temple road kadiyakama','Hakmanamburupitiya','matara'),('customer_00bd00a4cbd6467d','ord_6b90304bafe1722c','No 56, Seruvila','seruvila','trincomalee'),('customer_00bd00a4cbd6467d','ord_088eb191be9e28a8','No 86, Malimbada','Malimbada','matara'),('customer_00bd00a4cbd6467d','ord_069deb13ba081bc2','No 456, Verugal','verugal','trincomalee'),('customer_2b2ac95c83b7e7e7','ord_cf40cf649e0964ff','No 25, Weligama','Weligama','matara'),('customer_2b2ac95c83b7e7e7','ord_76dc8d8333bba9fb','No36, Thihagoda','Thihagoda','matara'),('customer_2b2ac95c83b7e7e7','ord_d1ff93b480b1e20b','No 46, city center Matara','Matara','matara'),('customer_2b2ac95c83b7e7e7','ord_4138add56918ab8b','No 123, Siripura','siripura','trincomalee'),('customer_2b2ac95c83b7e7e7','ord_9c94d1a68be8b2e6','No 452, Kantalai','Kantalai','trincomalee'),('customer_2b2ac95c83b7e7e7','ord_ed9acb8d43d44c5f','No4569, Verugal','verugal','trincomalee');

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `product_id` varchar(256) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(256) DEFAULT NULL,
  `cost` double NOT NULL,
  `img` varchar(100) NOT NULL,
  `capacity` decimal(4,2) NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`product_id`)
)

INSERT INTO `product` VALUES ('pro_1','bed','made up of wood',100000,'bed.jpg',40.00,3),('pro_10','cushion','super long',55000,'cushions.jpg',30.00,14),('pro_11','cushion','softer',12000,'cushion.jpg',10.00,8),('pro_12','wardrobe','melamine finish wardrobe',35000,'Wadrobe.jpg',10.00,8),('pro_13','recliner','fabric',25000,'recliner.jpg',20.00,35),('pro_14','night stand','having 2 drawers',12000,'nightstand.jpg',30.00,12),('pro_15','mercury bedroom','more comfortable',120000,'mercury_bedroom.jpg',30.00,30),('pro_16','corner stand','portable',22000,'cornerstand.jpg',30.00,38),('pro_17','wooden sofa','Ergonomical design',100000,'woodensofa.jpg',20.00,7),('pro_18','wall shelf','compact',16000,'wallshelf.jpg',10.00,9),('pro_19','cupboard','glass shutter',80000,'cupboard.jpg',30.00,8),('pro_1c0a5094dcf6b7c6','Roswell Single Seater','Perfect combination of mastered carpentry and superior tailoring skills redefined with the wonderful creation of the Roswell single seater.\nLength – 74cm | Width – 83cm | Height – 92cm',50000,'Roswell Single Seater.jpg',5.00,8),('pro_2','sofa','more comfortable',80000,'sofa.jpg',10.00,32),('pro_20','study desk','shelfs and storage space',60000,'studydesk.jpg',15.00,4),('pro_21','dressing table','3 Storage Drawer',75000,'dressingtable.jpg',20.00,6),('pro_22','audio video track','compact',14000,'track(1).jpg',5.00,28),('pro_23','wooden coffee table','Wood grain design',40000,'woodencoffeetable.jpg',20.00,6),('pro_24','corner sofa','Unique Corner Module ',120000,'sofa.jpg',20.00,4),('pro_25','cupboard','compact',50000,'cupboard1.jpg',50.00,3),('pro_256f8ebe3aa8aee0','Shoe Rack','Plastic shoe rack. Capable of holding eight shoe pairs with a dedicated shelf for shoe polish and brushes.',3000,'TR-004.jpg',5.00,14),('pro_26','recliner sofa','more comfortable',150000,'reclinersofa.jpg',40.00,4),('pro_27','shoe rack','Compact design',70000,'shoerack.jpg',20.00,9),('pro_28','wadrobe','Adjustable shelf',90000,'wadrobe1.jpg',40.00,9),('pro_29','mirror table','portable',20000,'mirrortable.jpg',50.00,9),('pro_3','dinnig set','dinning simple set ',70000,'tabchair.jpg',20.00,9),('pro_30','wooden shelf','3 drawers',15000,'shelf.jpg',10.00,8),('pro_331c5e44df06d269','Henly Ottoman','2 year comprehensive Warranty\nWarranty Covers Only Manufacturing Defects.',30000,'Henly Ottoman.jpg',5.00,14),('pro_4','book track','spacious',50000,'track.jpg',40.00,5),('pro_5','table and a bench','made up of wood',20000,'faveris-live-edge-table.png',40.00,8),('pro_6','chair','comfort',15000,'chair1.jpg',10.00,10),('pro_7','stools','stylish',8000,'stools.png',5.00,6),('pro_8','coffee table','circular shaped',11000,'coffeeetable.png',5.00,18),('pro_9','office table','more comfortable',9000,'officetable.jpg',20.00,20),('pro_ae208df256517dda','Diana Single Seater','Add a modern touch to your lounge’s interior with a beautifully crafted single chair design. \nLength – 90cm | Width -85cm | Height – 90cm',55000,'Diana Single Seater.jpg',5.00,8),('pro_c374a96e60778abb','Emerson Bedside Cupboard','Superior finish achieved with natural timber veneer production for an inspired appearance. Neatly rounded edges with smooth drawer design exhibits perfection.',45000,'Emerson Bedside Cupboard.jpg',5.00,23),('pro_da12e1c67a5cabb3','DIRECTOR CHAIR','DIRECTOR CHAIR | LEATHER\nColour – Maroon',45000,'head chair.jpg',5.00,30),('pro_da1fcb3cbbd79e34','Ellis Ottoman','2 year comprehensive Warranty\nWarranty Covers Only Manufacturing Defects.',30000,'Ellis Ottoman.jpg',5.00,9),('pro_da48f1d52e11204c','Portland Corner Sofa','An excellent fabrication of refined artistry.\n1 Seater: Length – 333cm | Width – 305cm | Height – 102cm',200000,'Portland Corner Sofa.jpg',10.00,20),('pro_e9515a3921a0bec5','Spring Mattress','Relieve your body’s tension with a soothing sensation of true comfort. Passionately tailored plump cushioning using luxuriously touched fabrics and best sort springs will lead to a harmonious sleep with fulfilment.\n15 Year Warranty for spring structure',60000,'Spring Mattress.jpg',10.00,74);

--
-- Table structure for table `routes`
--

DROP TABLE IF EXISTS `routes`;
CREATE TABLE `routes` (
  `route_id` varchar(16) NOT NULL,
  `destination` varchar(32) NOT NULL,
  `maxtime` time NOT NULL,
  PRIMARY KEY (`route_id`)
)

INSERT INTO `routes` VALUES ('route_1','pointpedro','01:00:00'),('route_10','Malabe','01:00:00'),('route_11','Kottawa','01:00:00'),('route_12','Panandura','01:00:00'),('route_13','Modara','01:00:00'),('route_14','Piliyandala','01:00:00'),('route_15','Walgama','01:00:00'),('route_16','Polhena','01:00:00'),('route_17','walpala','01:00:00'),('route_18','wewahamanduwa','01:00:00'),('route_19','diyagahagewatta','01:00:00'),('route_2','punnalikattuvan','01:15:00'),('route_20','dondra','01:00:00'),('route_21','uppuveli','01:00:00'),('route_22','Maroto','01:00:00'),('route_23','neddumkudah','01:00:00'),('route_24','sober Island','01:00:00'),('route_25','Trinco Town','01:00:00'),('route_3','kks','01:15:00'),('route_4','vaddukottai','00:45:00'),('route_5','karainagar','01:30:00'),('route_6','kodikamam','01:15:00'),('route_7','Wattala','01:00:00'),('route_8','Kiribathkoda','01:00:00'),('route_9','Welivita','01:00:00'),('router_26','Galle town','01:00:00');

--
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
CREATE TABLE `store` (
  `store_id` varchar(256) NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`store_id`),
  KEY `first_name` (`first_name`)
)

INSERT INTO `store` VALUES ('store_1b10c3f92d9be701','Colombo','buymore_colombo@gmail.com','$2b$10$BLpFh9vUln0AxqKyS3o1b.AJo9fWKtf3ruPVG.pPD6DfpBQFgFxW6','Store'),('store_b75d288ed6dd8aa1','Matara','buymore_matara@gmail.com','$2b$10$l.7I1L13g/r0CJ7g11Nt5uRslah5N4mAgeic.5MXSRnqa63agjJB6','Store'),('store_d207fd48aeinfnna2','Trincomalee','buymore_trinco@gmail.com','$2b$10$ZXzUrzNcSznchC008iEJa.ir9pAR35a1S7BdMlFdURfkwRCDozGS.','Store'),('store_fd07fd48ae073554','Jaffna','buymore_jaffna@gmail.com','$2b$10$ZXzUrzNcSznchC008iEJa.ir9pAR35a1S7BdMlFdURfkwRCDozGS.','Store'),('store_uhr30jrfnwoj83rwh','Galle','buymore_galle@gmail.com','$2b$10$ZXzUrzNcSznchC008iEJa.ir9pAR35a1S7BdMlFdURfkwRCDozGS.','Store');

--
-- Table structure for table `train`
--

DROP TABLE IF EXISTS `train`;
CREATE TABLE `train` (
  `train_id` int NOT NULL,
  `train_name` varchar(45) DEFAULT NULL,
  `destination` varchar(45) DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `compartmentcapacity` int DEFAULT NULL,
  `stops` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`train_id`),
  KEY `destination` (`destination`)
)

INSERT INTO `train` VALUES (1,'Nuwara Devi','Colombo','06:00:00','09:00:00',400,'Kegalle,Veyangoda,Gampaha,Colombo'),(2,'Intercity','Jaffna','08:10:00','14:00:00',300,'Matale, Dambulla, Anuradhapura, Vavuniya, Kilinochi, Jaffna'),(3,'Dakunu Devi','Galle','12:10:00','19:00:00',150,'Gampola,Nawalapittiya,Hatton,Deniyaya,Udugama,Galle'),(4,'Trinco Ride','Trincomalee','13:57:00','21:35:00',300,'Peradeniya,Polgahawela, Habarana,Thandikulam,Trincommalee'),(5,'Matara Speed','Matara','14:14:00','19:53:00',300,'Nuwara Eliya,Badulla,Monaragala,Katharagama,Hambantota,Matara');

--
-- Table structure for table `train_schedule`
--

DROP TABLE IF EXISTS `train_schedule`;
CREATE TABLE `train_schedule` (
  `train_id` int NOT NULL,
  `order_id` varchar(45) NOT NULL,
  `date_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `state` enum('scheduled','shipping','end') DEFAULT 'scheduled',
  PRIMARY KEY (`order_id`),
  KEY `order_id` (`order_id`)
)

INSERT INTO `train_schedule` VALUES (2,'ord_00f95e17229e5466','2022-02-18 07:19:02','end'),(4,'ord_069deb13ba081bc2','2022-04-15 07:36:59','end'),(5,'ord_088eb191be9e28a8','2022-04-15 07:37:09','end'),(1,'ord_1770ab594749fdce','2022-03-03 04:45:22','end'),(4,'ord_193cfeefcacdb527','2022-07-14 11:42:57','end'),(2,'ord_249071554b9e2c9a','2022-02-18 07:15:20','end'),(2,'ord_25ea1aab04a6468b','2022-07-15 05:52:20','end'),(4,'ord_2ac20da509e2757e','2022-03-03 04:36:44','end'),(1,'ord_2d2465be26d1119b','2022-05-15 07:02:57','end'),(2,'ord_2e3f983f81f95054','2022-02-18 07:21:36','end'),(2,'ord_401b562655fd36f6','2022-05-15 06:49:37','end'),(1,'ord_4030d3baf57f76e6','2022-03-03 04:18:32','end'),(1,'ord_410fe2f820dd32ba','2022-05-15 06:55:12','end'),(4,'ord_4138add56918ab8b','2022-04-15 07:49:25','end'),(2,'ord_424b176f0493929b','2022-05-15 07:16:36','end'),(2,'ord_4355796ec5bf9be2','2022-02-18 06:56:10','end'),(4,'ord_583425231d7e2840','2022-02-24 05:39:03','end'),(1,'ord_5de023cf23497bb8','2022-05-15 07:16:29','end'),(5,'ord_609c51aca5807365','2022-03-03 05:47:15','end'),(1,'ord_611750384dff3819','2022-03-03 04:05:38','end'),(2,'ord_612548eced419d9a','2022-07-15 05:52:20','end'),(5,'ord_67aec47c80993e65','2022-03-03 05:44:49','end'),(4,'ord_6b90304bafe1722c','2022-04-15 07:36:59','end'),(2,'ord_7297da4e563cadef','2022-02-18 07:06:07','end'),(2,'ord_747561f4c31e9e80','2022-05-15 06:55:20','end'),(5,'ord_76dc8d8333bba9fb','2022-04-15 07:49:35','end'),(5,'ord_77ded641cac8cfab','2022-03-03 05:37:34','end'),(1,'ord_7a10892c1ee80d4b','2022-05-15 06:49:28','end'),(1,'ord_81380691fdb2affd','2022-03-03 04:47:49','end'),(5,'ord_8212b02683c9b8e5','2022-04-15 07:37:09','end'),(1,'ord_868a16cad7e5fac7','2022-05-15 05:17:31','end'),(5,'ord_8868174ae0a8291a','2022-03-03 05:42:56','end'),(4,'ord_88bd1bd4fa51ab6c','2022-03-03 04:41:53','end'),(2,'ord_8d51bcbcc2e4b7a8','2022-07-14 17:13:13','end'),(4,'ord_9407a2057c25963d','2022-03-03 03:59:27','end'),(2,'ord_94437ea8add0cf9c','2022-05-15 07:03:04','end'),(2,'ord_9672e351f3fb47b0','2022-02-18 07:09:14','end'),(1,'ord_9bba801d7d5832f8','2022-07-14 04:13:13','end'),(4,'ord_9c94d1a68be8b2e6','2022-04-15 07:49:25','end'),(2,'ord_aeb1e183c204693e','2022-05-15 06:02:09','end'),(5,'ord_af76c932902d4d1e','2022-05-15 07:26:14','end'),(5,'ord_ba720377852a3d8d','2022-03-03 05:40:28','end'),(2,'ord_bdd9fa4985c90f2f','2022-05-15 07:08:45','end'),(5,'ord_cf40cf649e0964ff','2022-04-15 07:49:35','end'),(5,'ord_d1ff93b480b1e20b','2022-04-15 07:49:35','end'),(4,'ord_d67f988d736226f0','2022-05-15 07:26:04','end'),(1,'ord_e22cad232fe14479','2022-05-15 07:08:35','end'),(2,'ord_eba4b50e8d608a2e','2022-07-14 17:13:13','end'),(4,'ord_ed9acb8d43d44c5f','2022-04-15 07:49:25','end'),(1,'ord_fdf69dc5c1402497','2022-07-14 04:13:13','end');

--
-- Table structure for table `transports`
--

DROP TABLE IF EXISTS `transports`;
CREATE TABLE `transports` (
  `route_id` varchar(16) NOT NULL,
  `order_id` varchar(45) NOT NULL,
  PRIMARY KEY (`order_id`)
)

INSERT INTO `transports` VALUES ('route_3','ord_00f95e17229e5466'),('route_24','ord_069deb13ba081bc2'),('route_13','ord_1770ab594749fdce'),('route_25','ord_193cfeefcacdb527'),('route_3','ord_249071554b9e2c9a'),('route_3','ord_25ea1aab04a6468b'),('route_24','ord_2ac20da509e2757e'),('route_3','ord_2e3f983f81f95054'),('route_14','ord_4030d3baf57f76e6'),('route_3','ord_4355796ec5bf9be2'),('route_25','ord_583425231d7e2840'),('route_20','ord_609c51aca5807365'),('route_14','ord_611750384dff3819'),('route_3','ord_612548eced419d9a'),('route_18','ord_67aec47c80993e65'),('route_3','ord_7297da4e563cadef'),('route_15','ord_77ded641cac8cfab'),('route_7','ord_81380691fdb2affd'),('route_17','ord_8868174ae0a8291a'),('route_23','ord_88bd1bd4fa51ab6c'),('route_6','ord_8d51bcbcc2e4b7a8'),('route_25','ord_9407a2057c25963d'),('route_3','ord_9672e351f3fb47b0'),('route_12','ord_9bba801d7d5832f8'),('route_16','ord_ba720377852a3d8d'),('route_1','ord_eba4b50e8d608a2e'),('route_12','ord_fdf69dc5c1402497');

--
-- Table structure for table `truck`
--

DROP TABLE IF EXISTS `truck`;
CREATE TABLE `truck` (
  `truck_id` varchar(45) NOT NULL,
  `truck_number` varchar(10) NOT NULL,
  `capacity` int NOT NULL,
  `used_hours` decimal(5,2) DEFAULT '0.00',
  PRIMARY KEY (`truck_id`)
)

INSERT INTO `truck` VALUES ('truck_1ea520fe4ed78e43','WE-1032',200,0.00),('truck_25a7dc7ffc526092','QL-9904',120,0.00),('truck_2b985859728c9403','EP-7705',140,0.00),('truck_318aab1b3116c570','BH-1019',160,0.00),('truck_3e4f69371b852c7e','CD-9090',150,0.00),('truck_44d3fd6fee501110','PE-3309',190,0.00),('truck_45fefb797b1938d2','PS-3309',110,0.00),('truck_60c009c3bbf6dc4a','CD-2590',170,0.00),('truck_7ec5089809aaeaba','PD-2001',200,0.00),('truck_a09c314727b6cf7c','TS-8809',175,0.00),('truck_aa7c60b3bbcbafa0','WE-1032',150,0.00),('truck_ae1b46af93e7b637','MD-5052',165,0.00),('truck_bd3350aa7b1f8856','BO-7028',250,0.00),('truck_c9e7d83de33102d8','QR-4590',180,0.00),('truck_d34ab144e68d21bd','BO-1135',125,0.00),('truck_d6193228ab4f6435','12-5930',140,0.00),('truck_dec4ebceb6442377','NP-5509',130,0.00);

--
-- Table structure for table `truck_schedule`
--

DROP TABLE IF EXISTS `truck_schedule`;
CREATE TABLE `truck_schedule` (
  `truck_s_id` varchar(45) NOT NULL,
  `truck_id` varchar(45) NOT NULL,
  `route_id` varchar(45) NOT NULL,
  `driver_id` varchar(45) NOT NULL,
  `assistant_id` varchar(45) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `start_time` timestamp NULL DEFAULT NULL,
  `end_time` timestamp NULL DEFAULT NULL,
  `state` enum('scheduled','ondelivery','end') DEFAULT 'scheduled',
  PRIMARY KEY (`truck_s_id`)
)

INSERT INTO `truck_schedule` VALUES ('ts_0688e529d3851188','truck_c9e7d83de33102d8','route_9','driver_b51b222c8bfcae57','assistant_ac1309e9bf1fc143','2022-05-15 12:34:10','2022-05-15 07:04:14','2022-05-15 10:04:22','end'),('ts_166a3ad208238f93','truck_ae1b46af93e7b637','route_18','driver_bea4aaa400531e9d','assistant_68a7a3b5a90dcaf9','2022-04-15 13:33:14','2022-04-15 13:33:14','2022-04-15 13:33:14','end'),('ts_1c70355c2c9bd22d','truck_1ea520fe4ed78e43','route_18','driver_890ea5b096b8abf1','assistant_23c294b8e21df320','2022-02-03 05:45:38','2022-02-01 00:15:59','2022-02-01 01:15:59','end'),('ts_24d98150e5f3d63f','truck_bd3350aa7b1f8856','route_3','driver_d90cd045533c44d3','assistant_1777ccfbe2f54e33','2022-02-18 07:11:57','2022-02-18 01:42:03','2022-02-18 03:42:03','end'),('ts_2ca16483f6c499c3','truck_7ec5089809aaeaba','route_14','driver_2a3d2719b2faefaa','assistant_0687595195f2ae2a','2022-03-03 04:21:10','2022-03-02 22:51:17','2022-03-03 01:51:17','end'),('ts_3a720fd2a0aa772f','truck_bd3350aa7b1f8856','route_14','driver_b51b222c8bfcae57','assistant_219d7eb66d781a0f','2022-03-03 04:07:09','2022-03-02 22:37:24','2022-03-03 02:37:24','end'),('ts_3c4f860030ef8c59','truck_bd3350aa7b1f8856','route_16','driver_890ea5b096b8abf1','assistant_5b46f662983f7380','2022-03-03 05:41:22','2022-03-03 00:11:29','2022-03-03 05:11:29','end'),('ts_400aafe85c846b12','truck_1ea520fe4ed78e43','route_7','driver_d53d553ef53c06db','assistant_6a8207f0bbfe2916','2022-03-03 04:48:48','2022-03-02 23:18:54','2022-03-03 05:18:54','end'),('ts_401985659f09858a','truck_1ea520fe4ed78e43','route_3','driver_43404d3c4bce93be','assistant_ac1309e9bf1fc143','2022-02-18 07:01:30','2022-02-18 01:31:54','2022-02-18 02:31:54','end'),('ts_404aff9e068e5282','truck_d6193228ab4f6435','route_13','driver_b51b222c8bfcae57','assistant_f6f6ac85eac5c7e3','2022-03-03 04:46:07','2022-03-02 23:16:12','2022-03-03 01:16:12','end'),('ts_409860651c1de640','truck_bd3350aa7b1f8856','route_5','driver_9d1926bef7bd19ff','assistant_9f946550193f61a5','2022-05-15 12:35:32','2022-05-15 07:05:38','2022-05-15 12:05:44','end'),('ts_42d95fcdcb49dfe5','truck_45fefb797b1938d2','route_23','driver_443c7722769da7ad','assistant_403e78f3c41df612','2022-04-15 13:08:14','2022-04-15 13:08:14','2022-04-15 13:08:14','end'),('ts_44a72cd652d6256a','truck_3e4f69371b852c7e','route_23','driver_4668c0f63de09cd4','assistant_2664e1e2f4e741ad','2022-03-03 04:42:39','2022-03-02 23:12:44','2022-03-03 02:12:44','end'),('ts_45400546245964a5','truck_1ea520fe4ed78e43','route_3','driver_43404d3c4bce93be','assistant_e3452c798bde01f4','2022-02-18 07:20:04','2022-02-18 01:50:17','2022-02-18 05:50:17','end'),('ts_67bff3c7ddbd8a1c','truck_d6193228ab4f6435','route_25','driver_4668c0f63de09cd4','assistant_403e78f3c41df612','2022-03-03 04:30:36','2022-03-02 23:01:46','2022-03-03 04:01:46','end'),('ts_6f98b0ea3ce92f01','truck_a09c314727b6cf7c','route_24','driver_b44ec719f48edc92','assistant_2664e1e2f4e741ad','2022-04-15 13:08:40','2022-04-15 13:08:40','2022-04-15 13:08:40','end'),('ts_72585b1271722058','truck_dec4ebceb6442377','route_9','driver_2a3d2719b2faefaa','assistant_f6f6ac85eac5c7e3','2022-05-15 12:39:56','2022-05-15 07:10:00','2022-05-15 11:10:07','end'),('ts_786126e0705e3326','truck_44d3fd6fee501110','route_14','driver_b51b222c8bfcae57','assistant_219d7eb66d781a0f','2022-05-15 12:20:55','2022-05-15 06:51:00','2022-05-15 09:52:06','end'),('ts_7999295746f3373d','truck_2b985859728c9403','route_12','driver_2a3d2719b2faefaa','assistant_0687595195f2ae2a','2022-05-15 12:14:18','2022-05-15 06:44:36','2022-05-15 10:44:49','end'),('ts_7bdb0e755345055d','truck_60c009c3bbf6dc4a','route_17','driver_8937ac2fe9ef2ba1','assistant_68a7a3b5a90dcaf9','2022-04-15 13:09:41','2022-04-15 13:09:41','2022-04-15 13:09:41','end'),('ts_801a18f6edcaf5d6','truck_60c009c3bbf6dc4a','route_19','driver_8937ac2fe9ef2ba1','assistant_5b46f662983f7380','2022-04-15 13:32:52','2022-04-15 13:32:52','2022-04-15 13:32:52','end'),('ts_8168a013bc894d2e','truck_1ea520fe4ed78e43','route_24','driver_e924c01e94e4b726','assistant_2664e1e2f4e741ad','2022-03-03 04:37:38','2022-03-02 23:07:50','2022-03-03 05:07:50','end'),('ts_8813bab02683b3a0','truck_bd3350aa7b1f8856','route_3','driver_9d1926bef7bd19ff','assistant_cb80289cd53f4cf0','2022-02-18 07:07:30','2022-02-18 01:37:38','2022-02-18 02:37:38','end'),('ts_9725ad9708fb600c','truck_7ec5089809aaeaba','route_15','driver_8937ac2fe9ef2ba1','assistant_68a7a3b5a90dcaf9','2022-03-03 05:38:40','2022-03-03 00:08:52','2022-03-03 02:08:52','end'),('ts_9baaf923a6246a41','truck_45fefb797b1938d2','route_21','driver_3034254893979f84','assistant_2664e1e2f4e741ad','2022-05-15 12:58:20','2022-05-15 07:28:30','2022-05-14 13:28:37','end'),('ts_a0cfb6f61af7c266','truck_318aab1b3116c570','route_15','driver_604663e54f15791c','assistant_23c294b8e21df320','2022-04-15 13:00:01','2022-04-15 13:00:01','2022-04-15 13:00:01','end'),('ts_a29e569ffe70318c','truck_d6193228ab4f6435','route_17','driver_604663e54f15791c','assistant_5b46f662983f7380','2022-03-03 05:43:51','2022-03-03 00:13:54','2022-03-03 03:13:54','end'),('ts_a94e097ef72b085b','truck_2b985859728c9403','route_11','driver_b51b222c8bfcae57','assistant_219d7eb66d781a0f','2022-05-15 12:47:38','2022-05-15 07:17:42','2022-05-15 11:17:48','end'),('ts_a97ed309f782c8b6','truck_ae1b46af93e7b637','route_18','driver_890ea5b096b8abf1','assistant_5b46f662983f7380','2022-04-15 13:10:00','2022-04-15 13:10:00','2022-04-15 13:10:00','end'),('ts_abc7d6a392a7efa8','truck_7ec5089809aaeaba','route_5','driver_d90cd045533c44d3','assistant_cb80289cd53f4cf0','2022-05-15 12:41:04','2022-05-15 07:11:08','2022-05-15 11:11:14','end'),('ts_ae04b75a7331a831','truck_3e4f69371b852c7e','route_3','driver_1f43be269dccf348','assistant_cb80289cd53f4cf0','2022-05-15 12:21:53','2022-05-15 06:51:57','2022-05-15 12:52:21','end'),('ts_ae60f83974c09ebb','truck_1ea520fe4ed78e43','route_6','driver_9d1926bef7bd19ff','assistant_e3452c798bde01f4','2022-07-15 12:28:16','2022-07-15 06:58:36','2022-07-15 06:58:48','end'),('ts_b091a5bb4946a639','truck_7ec5089809aaeaba','route_4','driver_9d1926bef7bd19ff','assistant_cb80289cd53f4cf0','2022-05-15 12:27:19','2022-05-15 06:57:23','2022-05-15 11:57:47','end'),('ts_b61b3054ade97d6e','truck_1ea520fe4ed78e43','route_6','driver_1f43be269dccf348','assistant_1777ccfbe2f54e33','2022-05-15 11:34:47','2022-05-15 06:28:44','2022-05-15 10:28:57','end'),('ts_b7db9f7eef425afe','truck_45fefb797b1938d2','route_25','driver_443c7722769da7ad','assistant_403e78f3c41df612','2022-04-15 13:20:39','2022-04-15 13:20:39','2022-04-15 13:20:39','end'),('ts_d3185418aa1f4f9b','truck_318aab1b3116c570','route_20','driver_604663e54f15791c','assistant_23c294b8e21df320','2022-04-15 13:32:30','2022-04-15 13:32:30','2022-04-15 13:32:30','end'),('ts_d8bb6b7085eb1309','truck_3e4f69371b852c7e','route_3','driver_d90cd045533c44d3','assistant_1777ccfbe2f54e33','2022-07-15 11:23:55','2022-07-15 05:53:59','2022-07-15 05:54:13','end'),('ts_e0cd1a81ba8c534f','truck_7ec5089809aaeaba','route_1','driver_43404d3c4bce93be','assistant_9f946550193f61a5','2022-07-15 15:06:15','2022-07-15 09:36:19','2022-07-15 09:36:20','end'),('ts_e292568f00ab2420','truck_3e4f69371b852c7e','route_3','driver_1f43be269dccf348','assistant_cb80289cd53f4cf0','2022-02-18 07:22:36','2022-02-18 01:52:50','2022-02-18 05:52:50','end'),('ts_e793143c9d986e69','truck_3e4f69371b852c7e','route_20','driver_8937ac2fe9ef2ba1','assistant_23c294b8e21df320','2022-03-03 05:48:14','2022-03-03 00:18:20','2022-03-03 05:18:20','end'),('ts_ec841f679200aa96','truck_c9e7d83de33102d8','route_12','driver_2a3d2719b2faefaa','assistant_0687595195f2ae2a','2022-07-14 09:46:00','2022-07-14 04:16:08','2022-07-14 04:16:21','end'),('ts_ed53f3df004515a4','truck_a09c314727b6cf7c','route_24','driver_b44ec719f48edc92','assistant_403e78f3c41df612','2022-04-15 13:21:09','2022-04-15 13:21:09','2022-04-15 13:21:09','end'),('ts_f07886f9f8a8d3f3','truck_a09c314727b6cf7c','route_25','driver_e924c01e94e4b726','assistant_403e78f3c41df612','2022-07-14 17:14:03','2022-07-14 11:44:07','2022-07-14 11:44:10','end'),('ts_f23bb66fa545f26e','truck_bd3350aa7b1f8856','route_5','driver_1f43be269dccf348','assistant_9f946550193f61a5','2022-05-15 12:48:26','2022-05-15 07:18:30','2022-05-14 13:18:38','end'),('ts_fe08794b98dc7fa3','truck_aa7c60b3bbcbafa0','route_8','driver_d53d553ef53c06db','assistant_6a8207f0bbfe2916','2022-05-15 12:26:35','2022-05-15 06:56:39','2022-05-15 11:57:34','end');

--
-- Table structure for table `working_hour`
--

DROP TABLE IF EXISTS `working_hour`;
CREATE TABLE `working_hour` (
  `truck_s_id` varchar(45) NOT NULL,
  `worker_id` varchar(45) NOT NULL,
  `type` enum('driver','assistant') NOT NULL DEFAULT 'driver',
  `worked_hours` decimal(4,2) DEFAULT '0.00',
  PRIMARY KEY (`truck_s_id`,`worker_id`,`type`)
)

INSERT INTO `working_hour` VALUES ('ts_0688e529d3851188','assistant_ac1309e9bf1fc143','assistant',3.00),('ts_0688e529d3851188','driver_b51b222c8bfcae57','driver',3.00),('ts_166a3ad208238f93','assistant_68a7a3b5a90dcaf9','assistant',4.00),('ts_166a3ad208238f93','driver_bea4aaa400531e9d','driver',4.00),('ts_1c70355c2c9bd22d','assistant_23c294b8e21df320','assistant',6.00),('ts_1c70355c2c9bd22d','driver_890ea5b096b8abf1','driver',6.00),('ts_24d98150e5f3d63f','assistant_1777ccfbe2f54e33','assistant',10.00),('ts_24d98150e5f3d63f','driver_d90cd045533c44d3','driver',10.00),('ts_2ca16483f6c499c3','assistant_0687595195f2ae2a','assistant',5.00),('ts_2ca16483f6c499c3','driver_2a3d2719b2faefaa','driver',5.00),('ts_3a720fd2a0aa772f','assistant_219d7eb66d781a0f','assistant',4.00),('ts_3a720fd2a0aa772f','driver_b51b222c8bfcae57','driver',4.00),('ts_3c4f860030ef8c59','assistant_5b46f662983f7380','assistant',5.00),('ts_3c4f860030ef8c59','driver_890ea5b096b8abf1','driver',5.00),('ts_400aafe85c846b12','assistant_6a8207f0bbfe2916','assistant',6.00),('ts_400aafe85c846b12','driver_d53d553ef53c06db','driver',6.00),('ts_401985659f09858a','assistant_ac1309e9bf1fc143','assistant',4.00),('ts_401985659f09858a','driver_43404d3c4bce93be','driver',4.00),('ts_404aff9e068e5282','assistant_f6f6ac85eac5c7e3','assistant',5.00),('ts_404aff9e068e5282','driver_b51b222c8bfcae57','driver',5.00),('ts_409860651c1de640','assistant_9f946550193f61a5','assistant',5.00),('ts_409860651c1de640','driver_9d1926bef7bd19ff','driver',5.00),('ts_42d95fcdcb49dfe5','assistant_403e78f3c41df612','assistant',6.00),('ts_42d95fcdcb49dfe5','driver_443c7722769da7ad','driver',6.00),('ts_44a72cd652d6256a','assistant_2664e1e2f4e741ad','assistant',6.00),('ts_44a72cd652d6256a','driver_4668c0f63de09cd4','driver',6.00),('ts_45400546245964a5','assistant_e3452c798bde01f4','assistant',4.00),('ts_45400546245964a5','driver_43404d3c4bce93be','driver',4.00),('ts_67bff3c7ddbd8a1c','assistant_403e78f3c41df612','assistant',5.00),('ts_67bff3c7ddbd8a1c','driver_4668c0f63de09cd4','driver',5.00),('ts_6f98b0ea3ce92f01','assistant_2664e1e2f4e741ad','assistant',5.00),('ts_6f98b0ea3ce92f01','driver_b44ec719f48edc92','driver',5.00),('ts_72585b1271722058','assistant_f6f6ac85eac5c7e3','assistant',4.00),('ts_72585b1271722058','driver_2a3d2719b2faefaa','driver',4.00),('ts_786126e0705e3326','assistant_219d7eb66d781a0f','assistant',3.00),('ts_786126e0705e3326','driver_b51b222c8bfcae57','driver',3.00),('ts_7999295746f3373d','assistant_0687595195f2ae2a','assistant',4.00),('ts_7999295746f3373d','driver_2a3d2719b2faefaa','driver',4.00),('ts_7bdb0e755345055d','assistant_68a7a3b5a90dcaf9','assistant',5.00),('ts_7bdb0e755345055d','driver_8937ac2fe9ef2ba1','driver',5.00),('ts_801a18f6edcaf5d6','assistant_5b46f662983f7380','assistant',6.00),('ts_801a18f6edcaf5d6','driver_8937ac2fe9ef2ba1','driver',6.00),('ts_8168a013bc894d2e','assistant_2664e1e2f4e741ad','assistant',6.00),('ts_8168a013bc894d2e','driver_e924c01e94e4b726','driver',6.00),('ts_8813bab02683b3a0','assistant_cb80289cd53f4cf0','assistant',5.00),('ts_8813bab02683b3a0','driver_9d1926bef7bd19ff','driver',5.00),('ts_9725ad9708fb600c','assistant_68a7a3b5a90dcaf9','assistant',4.00),('ts_9725ad9708fb600c','driver_8937ac2fe9ef2ba1','driver',4.00),('ts_9baaf923a6246a41','assistant_2664e1e2f4e741ad','assistant',5.00),('ts_9baaf923a6246a41','driver_3034254893979f84','driver',5.00),('ts_a0cfb6f61af7c266','assistant_23c294b8e21df320','assistant',4.00),('ts_a0cfb6f61af7c266','driver_604663e54f15791c','driver',4.00),('ts_a29e569ffe70318c','assistant_5b46f662983f7380','assistant',3.00),('ts_a29e569ffe70318c','driver_604663e54f15791c','driver',3.00),('ts_a94e097ef72b085b','assistant_219d7eb66d781a0f','assistant',3.00),('ts_a94e097ef72b085b','driver_b51b222c8bfcae57','driver',3.00),('ts_a97ed309f782c8b6','assistant_5b46f662983f7380','assistant',4.00),('ts_a97ed309f782c8b6','driver_890ea5b096b8abf1','driver',4.00),('ts_abc7d6a392a7efa8','assistant_cb80289cd53f4cf0','assistant',5.00),('ts_abc7d6a392a7efa8','driver_d90cd045533c44d3','driver',5.00),('ts_ae04b75a7331a831','assistant_cb80289cd53f4cf0','assistant',6.00),('ts_ae04b75a7331a831','driver_1f43be269dccf348','driver',6.00),('ts_ae60f83974c09ebb','assistant_e3452c798bde01f4','assistant',6.00),('ts_ae60f83974c09ebb','driver_9d1926bef7bd19ff','driver',6.00),('ts_b091a5bb4946a639','assistant_cb80289cd53f4cf0','assistant',5.00),('ts_b091a5bb4946a639','driver_9d1926bef7bd19ff','driver',5.00),('ts_b61b3054ade97d6e','assistant_1777ccfbe2f54e33','assistant',4.00),('ts_b61b3054ade97d6e','driver_1f43be269dccf348','driver',4.00),('ts_b7db9f7eef425afe','assistant_403e78f3c41df612','assistant',3.00),('ts_b7db9f7eef425afe','driver_443c7722769da7ad','driver',3.00),('ts_d3185418aa1f4f9b','assistant_23c294b8e21df320','assistant',4.00),('ts_d3185418aa1f4f9b','driver_604663e54f15791c','driver',4.00),('ts_d8bb6b7085eb1309','assistant_1777ccfbe2f54e33','assistant',5.00),('ts_d8bb6b7085eb1309','driver_d90cd045533c44d3','driver',5.00),('ts_e0cd1a81ba8c534f','assistant_9f946550193f61a5','assistant',3.00),('ts_e0cd1a81ba8c534f','driver_43404d3c4bce93be','driver',3.00),('ts_e292568f00ab2420','assistant_cb80289cd53f4cf0','assistant',5.00),('ts_e292568f00ab2420','driver_1f43be269dccf348','driver',5.00),('ts_e793143c9d986e69','assistant_23c294b8e21df320','assistant',5.00),('ts_e793143c9d986e69','driver_8937ac2fe9ef2ba1','driver',5.00),('ts_ec841f679200aa96','assistant_0687595195f2ae2a','assistant',4.00),('ts_ec841f679200aa96','driver_2a3d2719b2faefaa','driver',4.00),('ts_ed53f3df004515a4','assistant_403e78f3c41df612','assistant',5.00),('ts_ed53f3df004515a4','driver_b44ec719f48edc92','driver',5.00),('ts_f07886f9f8a8d3f3','assistant_403e78f3c41df612','assistant',3.00),('ts_f07886f9f8a8d3f3','driver_e924c01e94e4b726','driver',3.00),('ts_f23bb66fa545f26e','assistant_9f946550193f61a5','assistant',6.00),('ts_f23bb66fa545f26e','driver_1f43be269dccf348','driver',6.00),('ts_fe08794b98dc7fa3','assistant_6a8207f0bbfe2916','assistant',5.00),('ts_fe08794b98dc7fa3','driver_d53d553ef53c06db','driver',5.00);

--
-- Structure for view `view_customer_with_orders`
--

DROP TABLE IF EXISTS `view_customer_with_orders`;
CREATE ALGORITHM=UNDEFINED 
    DEFINER=`root`@`localhost`
    SQL SECURITY 
    DEFINER VIEW `view_customer_without_auth` AS 
        select 
            `customer`.`customer_id` AS `customer_id`,
            `customer`.`first_name` AS `first_name` 
                from `customer`;

DROP TABLE IF EXISTS `view_customer_without_auth`;
CREATE ALGORITHM=UNDEFINED 
    DEFINER=`root`@`localhost` 
    SQL SECURITY 
    DEFINER VIEW `view_customer_with_orders` AS 
        select
            `places`.`customer_id` AS `customer_id`,
            `places`.`order_id` AS `order_id`,
            `customer_order`.`state` AS `state`,
            `customer_order`.`total_price` AS `total_price`,
            `customer_order`.`capacity` AS `capacity`,
            `customer_order`.`date_time` AS `date_time` 
                from ((
                        `places` left join `customer_order` on((
                            `places`.`order_id` = `customer_order`.`order_id`
                        ))) 
                            left join `customer` on((`places`.`customer_id` = `customer`.`customer_id`)));
DROP TABLE IF EXISTS `view_product_with_orders`;
CREATE ALGORITHM=UNDEFINED 
    DEFINER=`root`@`localhost` 
    SQL SECURITY 
    DEFINER VIEW `view_product_with_orders` AS 
        select
            `has`.`product_id` AS `product_id`,
            `has`.`order_id` AS `order_id`,
            `has`.`count` AS `count`,
            `places`.`customer_id` AS `customer_id`,
            `places`.`address` AS `address`,
            `places`.`city` AS `city`,
            `places`.`district` AS `district`,
            `product`.`title` AS `title`,
            `product`.`description` AS `description`,
            `product`.`cost` AS `cost`,
            `product`.`img` AS `img`,
            `product`.`capacity` AS `capacity`,
            `product`.`quantity` AS `quantity` 
                from ((
                        `has` left join `places` on((
                            `has`.`order_id` = `places`.`order_id`
                        ))) 
                            left join `product` on((`has`.`product_id` = `product`.`product_id`)));

DROP TABLE IF EXISTS `view_store_without_auth`;
CREATE ALGORITHM=UNDEFINED 
    DEFINER=`root`@`localhost` 
    SQL SECURITY 
    DEFINER VIEW `view_store_without_auth` AS 
        select
            `store`.`store_id` AS `store_id`,
            `store`.`first_name` AS `first_name` 
                from 
                    `store`;




--
-- Dumping routines for database 'db_buymore'
--

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `IsRequiredQuarter`(date_time datetime,pYear int,pPart int) RETURNS int
    DETERMINISTIC
return year(date_time)=pyear and quarter(date_time)=pPart ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `select_drivers`(pStore_id varchar(32))
BEGIN
    DECLARE last_worker_id VARCHAR(32);
    
	SELECT driver_id
	INTO last_worker_id
	FROM truck_schedule left outer join leads using(route_id)
    where store_id = pStore_id
    ORDER BY date_time desc
    LIMIT 1;

	SELECT *
	FROM 
		driver left outer join hires 
			on(driver.driver_id = hires.worker_id) 
        natural join  working_hour  
	group by worker_id
	having(
		driver_id != last_worker_id 
			AND 
		store_id = pStore_id
			AND 
		worked_hours<50.0
	);
END ;;
DELIMITER ;

--
-- Dumping triggers for database 'db_buymore'
--

DELIMITER $$
CREATE TRIGGER contains_after_schedule_order_to_truck
	AFTER INSERT ON contains
    FOR EACH ROW
BEGIN
	UPDATE customer_order
    SET state = 'truckscheduled'
    WHERE order_id = NEW.order_id;
END $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER train_schedule_after_schedule_order_to_train
	AFTER INSERT ON train_schedule
    FOR EACH ROW
BEGIN
	UPDATE customer_order
    SET state = 'trainsheduled'
    WHERE order_id = NEW.order_id;
END $$
DELIMITER ;

-- Dump completed on 2022-07-16  0:30:53
