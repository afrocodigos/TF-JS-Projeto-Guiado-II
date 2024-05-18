class Biblioteca {
  livros: Array<Livro> = [];
  alunos: Array<Aluno> = [];
  emprestimos: Array<Emprestimo> = [];
  constructor(
    public livrosDisponiveisElement: HTMLUListElement,
    public emprestimosAtivosElement: HTMLUListElement,
    public livrosDevolvidosElement: HTMLUListElement
  ) {}

  // --------- [Não mexer] Responsaveis por renderizar no html

  private renderizarLivrosDisponiveis(): void {
    this.livrosDisponiveisElement.innerHTML = "";
    const disponiveis = this.livros.filter((livro) => livro.estaDisponivel);

    const selectLivro = document.getElementById("livro") as HTMLSelectElement;
    selectLivro.innerHTML = "";

    disponiveis.forEach((livro) => {
      // Atualizar lista
      this.livrosDisponiveisElement.appendChild(livro.criarElementoHTML());

      // Preencher select
      const option = document.createElement("option");
      option.value = String(livro.id); // Define o valor da opção como o ID do livro
      option.textContent = livro.titulo; // Define o texto da opção como o título do livro
      selectLivro.appendChild(option);
    });
  }
  private emprestimosDevolvidos(): void {
    this.livrosDevolvidosElement.innerHTML = "";
    const devolvidos = this.livros.filter((livro) => livro.atrassados);
    devolvidos.forEach((livro) => livro.atrassados);
  }
  private renderizarEmprestimosAtivos(): void {
    this.emprestimosAtivosElement.innerHTML = "";

    this.emprestimos.forEach((emprestimo) => {
      const li = document.createElement("li");

      li.textContent = `Livro: ${emprestimo.livro.titulo}, Usuário: ${
        emprestimo.aluno.nome
      }, Data de Devolução: ${emprestimo.dataDevolucao.toDateString()}`;
      this.emprestimosAtivosElement.appendChild(li);
    });
  }

  // --------- [Não mexer] Responsaveis por renderizar no html

  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
    this.renderizarLivrosDisponiveis();
  }
  encontrarLivro(id: number): Livro {
    const livroEncontrado = this.livros.find(
      (livros) => livros.id === id
    ) as Livro;
    return livroEncontrado;
  }
  adicionarAluno(aluno: Aluno): void {
    this.alunos.push(aluno);
  }
  encontrarAluno(matricula: string): Aluno | undefined {
    const encontrarAluno = this.alunos.find(
      (aluno) => aluno.matricula === matricula
    );
    return encontrarAluno;
  }
  emprestimosAtrassados(): Emprestimo | any {
    const atrassados: Emprestimo | any = this.emprestimos.map((emprestimo) => {
      if (emprestimo.dataEntrega > emprestimo.dataDevolucao) return atrassados;
    });
  }
  realizarEmprestimo(
    livro: Livro,
    aluno: Aluno,
    senha: string
  ): boolean | undefined {
    if (!aluno.matricula) {
      alert("Digite uma mátricula válida");
      return false;
    }
    if (!aluno.senha || aluno.senha !== senha) {
      alert(`Digite uma senha válida!!`);
      return false;
    }
    if (!livro.estaDisponivel) {
      alert(
        `O livro ${livro.titulo} do autor ${livro.autor} não está disponível para o emprestímo.`
      );
    }
    livro.emprestarLivro();

    const dataEmprestimo = new Date();
    const dataDevolucao = new Date();
    const dataEntrega = new Date();
    dataDevolucao.setDate(dataDevolucao.getDate() + 7);

    const emprestimo: Emprestimo = {
      livro,
      aluno,
      dataEmprestimo,
      dataDevolucao,
      dataEntrega,
    };

    this.emprestimos.push(emprestimo);
    this.renderizarEmprestimosAtivos();
    this.renderizarLivrosDisponiveis();
    return true;
  }
  realizarDelucao(livro: Livro, aluno: Aluno): boolean {
    const dataEmprestimo = new Date();
    const dataDevolucao = new Date();
    const dataEntrega = new Date();
    dataDevolucao.setDate(dataDevolucao.getDate() + 7);
    const devolucao: Emprestimo = {
      livro,
      aluno,
      dataDevolucao,
      dataEmprestimo,
      dataEntrega,
    };
    this.emprestimos.push(devolucao);
    this.emprestimosDevolvidos();

    return true;
  }
  adicionarDevolucao(livro: Livro): void {
    this.livros.push(livro);
    this.emprestimosAtrassados();
  }
}
/*Tentei fazer o metodo devolição mas não funcionou. Gostaria de saber onde foi que errei */
