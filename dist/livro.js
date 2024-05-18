"use strict";
class Livro {
    /* O comum é a versão abreviada, porque quase sempre só repassamos.
  Somente em casos de transformação que fazemos da forma mais verbosa ( de forma explicita )*/
    constructor(id, titulo, autor, estaDisponivel = true //default
    ) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.estaDisponivel = estaDisponivel;
    }
    emprestarLivro() {
        if (this.estaDisponivel) {
            this.estaDisponivel = false;
        }
        else {
            alert(`O livro "${this.titulo}" não está disponível para empréstimo`);
        }
        ;
    }
    ;
    // devolverLivro() {
    //   // to-do
    // }
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
