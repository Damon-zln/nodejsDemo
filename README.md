# nodejsDemo
NodeJS+Express+mysql

#mysql create code
CREATE TABLE `user` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL,
	`age` INT(11) NOT NULL,
	`department` VARCHAR(50) NOT NULL,
	`phone` VARCHAR(50) NOT NULL,
	PRIMARY KEY (`id`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB;
