"use strict";
class Livro {
    constructor(id, titulo, autor, estaDisponivel = true) {
        this.emprestimos = [];
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.estaDisponivel = estaDisponivel = true;
    }
    emprestarLivro() {
        if (this.estaDisponivel) {
            this.estaDisponivel = false;
        }
        else {
            alert(`O livro ${this.titulo} do autor ${this.autor} não está disponível para emprestimo.`);
        }
    }
    atrassados() {
        this.emprestimos.map((e) => {
            e.dataEntrega,
                e.dataDevolucao,
                e.aluno.matricula,
                e.aluno.nome,
                e.livro.id;
            if (e.dataEntrega > e.dataDevolucao) {
                e.aluno.matricula, e.aluno.nome, e.livro.id;
            }
        });
    }
    // --------- [Não mexer] Responsaveis por renderizar no html
    criarElementoHTML() {
        const li = document.createElement("li");
        li.innerHTML = `<span>${this.titulo}</span> (Autor: ${this.autor})`;
        li.classList.add("livro-item");
        if (!this.estaDisponivel) {
            li.classList.add("emprestado");
        }
        return li;
    }
    criarElementoLivroTrassado() {
        const li = document.createElement("li");
        li.innerHTML = `<span>${this.titulo}</span>(Autor: ${this.autor})`;
        li.classList.add("livro-item");
        if (this.atrassados()) {
            li.classList.add("Atrassado");
        }
        return li;
    }
}
