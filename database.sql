<<<<<<< HEAD
CREATE DATABASE test_db;
USE test_db;

CREATE TABLE autor (
    id int not null auto_increment PRIMARY KEY,
    nome varchar(255) not null,
    nacionalidade varchar(255) not null,
    data_nascimento varchar(255),
    perfil varchar(255)
);

CREATE TABLE editora (
    id int not null auto_increment PRIMARY KEY,
    razao_social varchar(255) not null,
    nome_fantasia varchar(255) not null,
    cnpj varchar(255) not null
);

CREATE TABLE livro (
    id int not null auto_increment PRIMARY KEY,
    sinopse varchar(255),
    isbn varchar(255) not null,
    titulo varchar(255) not null,
    quantidade_exemplares int not null,
    ano_publicacao date not null,
    exemplares_disponivel int not null,
    autor_id int not null,
    editora_id int not null,
    FOREIGN KEY(autor_id) REFERENCES autor (id),
    FOREIGN KEY(editora_id) REFERENCES editora (id)
);

CREATE TABLE endereco (
    id int not null auto_increment PRIMARY KEY,
    numero varchar(255) not null,
    bairro varchar(255) not null,
    cidade varchar(255) not null,
    estado varchar(255) not null,
    cep varchar(255) not null,
    rua varchar(255) not null,
    pais varchar(255) not null,
    complemento varchar(255)
);

CREATE TABLE contato (
    id int not null auto_increment PRIMARY KEY,
    rede_social varchar(255) not null,
    email varchar(255) not null,
    celular varchar(255) not null,
    telefone varchar(255) not null
);

CREATE TABLE pessoa (
    id int not null auto_increment PRIMARY KEY,
    nome varchar(255) not null,
    cpf varchar(255) not null,
    rg varchar(255) null,
    data_nascimento varchar(255) not null,
    sexo varchar(255) not null,
    contato_id int not null,
    endereco_id int not null,
    FOREIGN KEY(contato_id) REFERENCES contato (id),
    FOREIGN KEY(endereco_id) REFERENCES endereco (id)
);

CREATE TABLE emprestimo (
    id int not null auto_increment PRIMARY KEY,
    data_hora_emprestimo datetime null,
    data_previsao_entrega date null,
    data_entregue date null,
    data_hora_solicitacao datetime not null,
    pessoa_id int not null,
    livro_id int not null,
    FOREIGN KEY(pessoa_id) REFERENCES pessoa (id),
    FOREIGN KEY(livro_id) REFERENCES livro (id)
);
=======

>>>>>>> b14ab8262ec6afbb5f5cce3c2642a5c78920d2c3
