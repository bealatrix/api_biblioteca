CREATE DATABASE biblioteca_online_BL;
USE biblioteca_online_BL;

CREATE TABLE autor (
    id_autor int not null auto_increment PRIMARY KEY,
    nome varchar(255) not null,
    nacionalidade varchar(255) not null,
    data_nascimento varchar(255),
    perfil varchar(255)
);

CREATE TABLE editora (
    id_editora int not null auto_increment PRIMARY KEY,
    razao_social varchar(255) not null,
    nome_fantasia varchar(255) not null,
    cnpj varchar(255) not null
);

CREATE TABLE livro (
    id_livro int not null auto_increment PRIMARY KEY,
    sinopse varchar(255),
    isbn varchar(255) not null,
    titulo varchar(255) not null,
    quantidade_exemplares int not null,
    ano_publicacao date not null,
    exemplares_disponivel int not null,
    autor_id int not null,
    editora_id int not null,
    FOREIGN KEY(autor_id) REFERENCES autor (id_autor),
    FOREIGN KEY(editora_id) REFERENCES editora (id_editora)
);

CREATE TABLE endereco (
    id_endereco int not null auto_increment PRIMARY KEY,
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
    id_contato int not null auto_increment PRIMARY KEY,
    rede_social varchar(255) not null,
    email varchar(255) not null,
    celular varchar(255) not null,
    telefone varchar(255) not null
);

CREATE TABLE leitor (
    id_leitor int not null auto_increment PRIMARY KEY,
    nome varchar(255) not null,
    cpf varchar(255) not null,
    rg varchar(255) null,
    data_nascimento varchar(255) not null,
    sexo varchar(255) not null,
    contato_id int not null,
    endereco_id int not null,
    FOREIGN KEY(contato_id) REFERENCES contato (id_contato),
    FOREIGN KEY(endereco_id) REFERENCES endereco (id_endereco)
);

CREATE TABLE emprestimo (
    id_emprestimo int not null auto_increment PRIMARY KEY,
    data_hora_emprestimo datetime null,
    data_previsao_entrega date null,
    data_entregue date null,
    data_hora_solicitacao datetime not null,
    leitor_id int not null,
    livro_id int not null,
    FOREIGN KEY(leitor_id) REFERENCES leitor (id_leitor),
    FOREIGN KEY(livro_id) REFERENCES livro (id_livro)
);

INSERT INTO autor (nome, nacionalidade, data_nascimento, perfil)
VALUES ('Autor 1', 'Nacionalidade 1', '1990-01-01', 'Perfil do Autor 1');

INSERT INTO editora (razao_social, nome_fantasia, cnpj)
VALUES ('Razão Social 1', 'Nome Fantasia 1', '1234567890');

INSERT INTO livro (sinopse, isbn, titulo, quantidade_exemplares, ano_publicacao, exemplares_disponivel, autor_id, editora_id)
VALUES ('Sinopse do Livro 1', '1234567890', 'Título do Livro 1', 10, '2022-01-01', 10, 1, 1);

INSERT INTO livro (sinopse, isbn, titulo, quantidade_exemplares, ano_publicacao, exemplares_disponivel, autor_id, editora_id)
VALUES ('Sinopse do Livro 2', '1234567890', 'Título do Livro 1', 10, '2022-01-01', 10, 1, 1);


INSERT INTO endereco (numero, bairro, cidade, estado, cep, rua, pais, complemento)
VALUES ('123', 'Bairro 1', 'Cidade 1', 'Estado 1', '12345-678', 'Rua 1', 'País 1', 'Complemento 1');

INSERT INTO contato (rede_social, email, celular, telefone)
VALUES ('Rede Social 1', 'email1@example.com', '1234567890', '0987654321');

INSERT INTO leitor (nome, cpf, rg, data_nascimento, sexo, contato_id, endereco_id)
VALUES ('Pessoa 1', '1234567890', '9876543210', '1990-01-01', 'M', 1, 1);

INSERT INTO emprestimo (data_hora_emprestimo, data_previsao_entrega, data_entregue, data_hora_solicitacao, leitor_id, livro_id)
VALUES ('2022-01-01 10:00:00', '2022-01-10', NULL, '2022-01-01 09:00:00', 1, 1);