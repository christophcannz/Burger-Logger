CREATE DATABASE burger_logger_db;
USE burger_logger_db;

CREATE TABLE burger_menu(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(50) NOT NULL,
is_favorite BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);