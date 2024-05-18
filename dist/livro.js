"use strict";
class Livro {
    constructor(id, titulo, autor, estaDisponivel) {
        this.estaDisponivel = true;
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.estaDisponivel = estaDisponivel;
    }
    emprestarLivro() {
        /**
         * nesse metodo ele vai fazer uma checagem se o livro esta ou não emprestado
         * o livro não estado emprestado ele vai retornar o estado do livro pra false
         * e o livro estando emprestado ele vai retornar um alerte dizendo que o livro
         * não esta disponivel
         */
        if (this.estaDisponivel) {
            this.estaDisponivel = false;
        }
        else {
            alert(`O livro ${this.titulo} não está disponível para emprestimo !!`);
        }
    }
    devolverLivro() {
        //tentar fazer depois
        if (this.estaDisponivel == false) {
            this.estaDisponivel = true;
        }
        else {
            alert(`O livro ${this.titulo} já esta disponivel !!`);
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
