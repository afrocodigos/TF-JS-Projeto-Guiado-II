class Livro {
  emprestimos: Array<Emprestimo> = [];
  id: number;
  titulo: string;
  autor: string;
  estaDisponivel: boolean;
  constructor(
    id: number,
    titulo: string,
    autor: string,
    estaDisponivel: boolean = true
  ) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.estaDisponivel = estaDisponivel = true;
  }
  emprestarLivro(): void {
    if (this.estaDisponivel) {
      this.estaDisponivel = false;
    } else {
      alert(
        `O livro ${this.titulo} do autor ${this.autor} não está disponível para emprestimo.`
      );
    }
  }

  // --------- [Não mexer] Responsaveis por renderizar no html
  criarElementoHTML(): HTMLLIElement {
    const li = document.createElement("li");
    li.innerHTML = `<span>${this.titulo}</span> (Autor: ${this.autor})`;
    li.classList.add("livro-item");
    if (!this.estaDisponivel) {
      li.classList.add("emprestado");
    }
    return li;
  }
  // --------- [Não mexer] Responsaveis por renderizar no html
}
