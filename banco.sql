CREATE TABLE Funcionario (
    id_funcionario INT PRIMARY KEY,
    nome VARCHAR(100),
    cargo VARCHAR(50)
);

CREATE TABLE Cliente (
    id_cliente INT PRIMARY KEY,
    nome VARCHAR(100),
    cpf VARCHAR(14),
    aceitou_lgpd BOOLEAN,
    id_funcionario INT,
    FOREIGN KEY (id_funcionario) REFERENCES Funcionario(id_funcionario)
);

CREATE TABLE Descarte (
    id_descarte INT PRIMARY KEY,
    tipo_residuo VARCHAR(100),
    data_descarte DATE,
    id_funcionario INT,
    FOREIGN KEY (id_funcionario) REFERENCES Funcionario(id_funcionario)
);

INSERT INTO Funcionario VALUES (1, 'João Silva', 'Atendente');
INSERT INTO Cliente VALUES (101, 'Maria Oliveira', '111.222.333-44', TRUE, 1);
INSERT INTO Descarte VALUES (501, 'Bateria Automotiva', '2026-11-07', 1);

SELECT Funcionario.nome, Descarte.tipo_residuo, Descarte.data_descarte 
FROM Descarte
INNER JOIN Funcionario ON Descarte.id_funcionario = Funcionario.id_funcionario;