"use strict";
class Livro {
    constructor(id, titulo, autor, estaDisponivel = true) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.estaDisponivel = estaDisponivel;
    }
    emprestarLivro() {
        ///to do
        if (this.estaDisponivel === true) {
            this, this.estaDisponivel = false;
        }
        else {
            alert('O Livro ....');
        }
    }
    devolverLivro() {
        //to do
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
}
