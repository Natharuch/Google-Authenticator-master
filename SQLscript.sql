10 lines (9 sloc)  241 Bytes

CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    mail varchar(255) NOT NULL,
    secret varchar(255) NOT NULL,
    firstime boolean,
    PRIMARY KEY (id)
);