/*
Navicat MySQL Data Transfer

Source Server         : 我的mysql
Source Server Version : 80015
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 80015
File Encoding         : 65001

Date: 2020-08-19 13:36:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double(10,0) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `creat_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '鸡肉', '11', '2020-08-19 10:10:15', '2020-08-19 10:10:18');
INSERT INTO `goods` VALUES ('2', '香蕉', '12', '2020-08-19 10:11:01', '2020-08-19 10:11:05');
INSERT INTO `goods` VALUES ('3', '苹果', '968', '2020-08-19 10:11:27', '2020-08-19 10:11:30');
