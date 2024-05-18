"use strict";
class Livro {
    constructor(id, titulo, autor, estaDisponivel = true) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.estaDisponivel = estaDisponivel;
    }
    emprestarLivro() {
        // if(this.estaDisponivel === true)
        if (this.estaDisponivel) {
            this.estaDisponivel = false;
        }
        else {
            alert(`O livro "${this.titulo}" não está disponível para emprestimos`);
        }
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
