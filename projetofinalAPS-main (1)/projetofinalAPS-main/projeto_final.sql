create database projeto_final;
 
use projeto_final;
CREATE TABLE categoria (id INT NOT NULL auto_increment, nome VARCHAR(100) NOT NULL, primary key(id));
 
INSERT INTO categoria (nome) VALUES ('frios');
INSERT INTO categoria (nome) VALUES ('matinais');
INSERT INTO categoria (nome) VALUES ('garrafas');
INSERT INTO categoria (nome) VALUES ('bolachas');
INSERT INTO categoria (nome) VALUES ('chocolate');


CREATE TABLE Produto (id INT NOT NULL auto_increment, nome VARCHAR(100) NOT NULL, preço FLOAT NOT NULL, primary key(id));
INSERT INTO Produto (nome, preço) VALUES ('biscoito danix', 4.99);
INSERT INTO Produto (nome, preço) VALUES ('leite integral', 3.50);
INSERT INTO Produto (nome, preço) VALUES ('chocolate lacta', 7.98);
INSERT INTO Produto (nome, preço) VALUES ('presunto sadia ', 23.90);
INSERT INTO Produto (nome, preço) VALUES ('salaminho fatiado ', 6.59);
INSERT INTO Produto (nome, preço) VALUES ('vinho tinto ', 26.99);
INSERT INTO Produto (nome, preço) VALUES ('Grace Hopper', 4180);




