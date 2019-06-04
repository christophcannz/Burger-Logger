DROP DATABASE IF EXISTS burger_logger_db;
CREATE DATABASE burger_logger_db;
USE burger_logger_db;

CREATE TABLE burger_menu(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    burger_name varchar(50) NOT NULL,
    is_favorite BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);