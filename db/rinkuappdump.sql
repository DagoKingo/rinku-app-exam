CREATE DATABASE  IF NOT EXISTS `rinkudb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `rinkudb`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: rinkudb
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `meses`
--

DROP TABLE IF EXISTS `meses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meses` (
  `id` tinyint NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meses`
--

LOCK TABLES `meses` WRITE;
/*!40000 ALTER TABLE `meses` DISABLE KEYS */;
INSERT INTO `meses` VALUES (1,'Enero','2023-09-28 08:42:25'),(2,'Febrero','2023-09-28 08:42:25'),(3,'Marzo','2023-09-28 08:42:25'),(4,'Abril','2023-09-28 08:42:25'),(5,'Mayo','2023-09-28 08:42:25'),(6,'Junio','2023-09-28 08:42:25'),(7,'Julio','2023-09-28 08:42:25'),(8,'Agosto','2023-09-28 08:42:25'),(9,'Septiembre','2023-09-28 08:42:25'),(10,'Octubre','2023-09-28 08:42:25'),(11,'Noviembre','2023-09-28 08:42:25'),(12,'Diciembre','2023-09-28 08:42:25');
/*!40000 ALTER TABLE `meses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_pagos_trabajadores`
--

DROP TABLE IF EXISTS `tb_pagos_trabajadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_pagos_trabajadores` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `id_trabajador` bigint DEFAULT NULL,
  `pago_mensual` double DEFAULT NULL,
  `retencion` double DEFAULT NULL,
  `vale_despensa` double DEFAULT NULL,
  `bono_entregas` double DEFAULT NULL,
  `num_entregas` int DEFAULT NULL,
  `id_mes` tinyint DEFAULT NULL,
  `pago_bono_horas` double DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `tb_pagos_trabajadores_FK` (`id_trabajador`),
  KEY `tb_pagos_trabajadores_FK_1` (`id_mes`),
  CONSTRAINT `tb_pagos_trabajadores_FK` FOREIGN KEY (`id_trabajador`) REFERENCES `trabajadores` (`id`),
  CONSTRAINT `tb_pagos_trabajadores_FK_1` FOREIGN KEY (`id_mes`) REFERENCES `meses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_pagos_trabajadores`
--

LOCK TABLES `tb_pagos_trabajadores` WRITE;
/*!40000 ALTER TABLE `tb_pagos_trabajadores` DISABLE KEYS */;
INSERT INTO `tb_pagos_trabajadores` VALUES (1,2,5760,518.4,230.4,5000,1000,1,480,'2023-09-28 10:13:53');
/*!40000 ALTER TABLE `tb_pagos_trabajadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos_trabajadores`
--

DROP TABLE IF EXISTS `tipos_trabajadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos_trabajadores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(100) DEFAULT NULL,
  `sueldo_base_x_hora` double NOT NULL DEFAULT '30',
  `horas_x_dia` tinyint NOT NULL DEFAULT '8',
  `dias_x_semana` tinyint NOT NULL DEFAULT '6',
  `bono_x_entrega` double NOT NULL DEFAULT '5',
  `bono_x_hora` double NOT NULL DEFAULT '0',
  `porcentaje_vale_despensa` double NOT NULL DEFAULT '4',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_trabajadores`
--

LOCK TABLES `tipos_trabajadores` WRITE;
/*!40000 ALTER TABLE `tipos_trabajadores` DISABLE KEYS */;
INSERT INTO `tipos_trabajadores` VALUES (1,'chofer',30,8,6,5,10,4,'2023-09-26 06:04:53'),(2,'cargador',30,8,6,5,5,4,'2023-09-26 06:04:53'),(3,'auxiliar',30,8,6,5,0,4,'2023-09-26 06:04:53');
/*!40000 ALTER TABLE `tipos_trabajadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trabajadores`
--

DROP TABLE IF EXISTS `trabajadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trabajadores` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `id_tipo` int NOT NULL,
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `numero` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `trabajadores_UN` (`numero`),
  KEY `trabajadores_FK` (`id_tipo`),
  CONSTRAINT `trabajadores_FK` FOREIGN KEY (`id_tipo`) REFERENCES `tipos_trabajadores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trabajadores`
--

LOCK TABLES `trabajadores` WRITE;
/*!40000 ALTER TABLE `trabajadores` DISABLE KEYS */;
INSERT INTO `trabajadores` VALUES (1,1,'Juan Perez','0001','2023-09-27 22:39:01'),(2,1,'David','1','2023-09-27 23:10:40'),(3,1,'Julio','0002','2023-09-28 07:09:05');
/*!40000 ALTER TABLE `trabajadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'rinkudb'
--

--
-- Dumping routines for database 'rinkudb'
--
/*!50003 DROP PROCEDURE IF EXISTS `sp_get_pagos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_get_pagos`(IN _id_trabajador BIGINT)
BEGIN

	IF (SELECT COUNT(*) FROM trabajadores WHERE id = _id_trabajador) = 0 THEN

		SIGNAL SQLSTATE '45000' 

		SET MESSAGE_TEXT = 'No se encontro al trabajador en el sistema';

	ELSE

		SELECT 

			m.nombre as mes,

			tpt.*, 

			(tpt.pago_mensual + tpt.vale_despensa + tpt.bono_entregas + tpt.pago_bono_horas) as pago_bruto,

			(tpt.pago_mensual + tpt.vale_despensa + tpt.bono_entregas + tpt.pago_bono_horas) - tpt.retencion as pago_neto

		FROM tb_pagos_trabajadores tpt 

		INNER JOIN meses m ON tpt.id_mes = m.id

		WHERE id_trabajador = _id_trabajador;

	END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_get_roles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_get_roles`()
BEGIN

	SELECT id, tipo FROM tipos_trabajadores;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_get_trabajadores` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_get_trabajadores`()
BEGIN

	SELECT 

		t.id,

		t.nombre,

		t.numero,

		t.id_tipo,

		tt.tipo as rol, 

		tt.sueldo_base_x_hora,

		tt.horas_x_dia,

		tt.dias_x_semana,

		tt.bono_x_entrega,

		tt.bono_x_hora,

		tt.porcentaje_vale_despensa 

	FROM trabajadores t 

	INNER JOIN tipos_trabajadores tt ON tt.id = t.id_tipo ;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_store_pago` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_store_pago`(IN _id_trabajador BIGINT, IN _id_mes INT, IN _entregas INT)
BEGIN

	IF (SELECT COUNT(*) FROM trabajadores WHERE id = _id_trabajador) = 0 THEN

		SIGNAL SQLSTATE '45000' 

		SET MESSAGE_TEXT = 'No se encontro al trabajador en el sistema';

	ELSEIF (SELECT COUNT(*) FROM tb_pagos_trabajadores WHERE id_trabajador = _id_trabajador AND id_mes = _id_mes) > 0 THEN

		SIGNAL SQLSTATE '45000' 

		SET MESSAGE_TEXT = 'El trabajador ya cuenta con un pago registrado de este mes.';

	ELSE

		INSERT INTO tb_pagos_trabajadores(

			id_trabajador, 

			pago_mensual,

			bono_entregas,

			pago_bono_horas,

			retencion,

			vale_despensa, 

			num_entregas,

			id_mes 

		)

		SELECT 

			t.id,

			(tt.sueldo_base_x_hora * tt.horas_x_dia * tt.dias_x_semana) * 4 as pago_mensual,

			(tt.bono_x_entrega * _entregas) as bono_entregas,

			(tt.bono_x_hora * tt.horas_x_dia * tt.dias_x_semana) as bono_hora,

			IF(

				(tt.sueldo_base_x_hora * tt.horas_x_dia * tt.dias_x_semana) * 4 > 10000,

				((tt.sueldo_base_x_hora * tt.horas_x_dia * tt.dias_x_semana) * 4) * 0.12,

				((tt.sueldo_base_x_hora * tt.horas_x_dia * tt.dias_x_semana) * 4) * 0.09

			) as retencion,

			((tt.sueldo_base_x_hora * tt.horas_x_dia * tt.dias_x_semana) * 4) * 0.04 as vale_despensa,

			_entregas,

			_id_mes

		FROM trabajadores t

		INNER JOIN tipos_trabajadores tt ON tt.id = t.id_tipo

		WHERE t.id = _id_trabajador;

			

		SELECT * FROM tb_pagos_trabajadores 

		WHERE id = LAST_INSERT_ID(); 

	END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_store_trabajador` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_store_trabajador`(IN _nombre varchar(100), IN _numero varchar(100), IN _id_tipo INT)
BEGIN

	IF (SELECT COUNT(*) FROM trabajadores WHERE numero = _numero) > 0 THEN

		SIGNAL SQLSTATE '45000' 

		SET MESSAGE_TEXT = 'El empleado ya se encuentra registrado en el sistema';

	ELSE

		INSERT INTO trabajadores (nombre, numero, id_tipo)

		VALUES (_nombre, _numero, _id_tipo);

	

		SELECT 

			t.nombre,

			t.numero,

			t.id_tipo,

			tt.tipo as rol, 

			tt.sueldo_base_x_hora,

			tt.horas_x_dia,

			tt.dias_x_semana,

			tt.bono_x_entrega,

			tt.bono_x_hora,

			tt.porcentaje_vale_despensa 

		FROM trabajadores t 

		INNER JOIN tipos_trabajadores tt ON tt.id = t.id_tipo 

		WHERE t.id = LAST_INSERT_ID();

	END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-28 10:10:41
