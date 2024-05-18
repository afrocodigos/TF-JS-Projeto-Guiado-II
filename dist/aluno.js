"use strict";
class Aluno extends Usuario {
    constructor(nome, email, senha, matricula) {
        super(nome, email, senha); //esse super e por causa esta herdando da classe usuario
        this.matricula = matricula;
    }
}
