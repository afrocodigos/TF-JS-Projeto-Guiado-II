"use strict";
class Livro {
    constructor(id, titulo, autor, estaDisponivel = true) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.estaDisponivel = estaDisponivel;
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
    // --------- [Não mexer] Responsaveis por renderizar no html
    emprestarLivro() {
        if (this.estaDisponivel) {
            this.estaDisponivel = false;
        }
        else {
            alert('O livro "${this.titulo}" não esta disponivel');
        }
    }
}
