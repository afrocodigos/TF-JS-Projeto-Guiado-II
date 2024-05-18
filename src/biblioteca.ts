class Biblioteca {
  livros: Livro[] = [];
  alunos: Aluno[] = [];
  emprestimos: Emprestimo[] = [];

  constructor(
    public livrosDisponiveisElement: HTMLUListElement,
    public emprestimosAtivosElement: HTMLUListElement
  ) {}

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
      option.value = String(livro.id);
      option.textContent = livro.titulo;
      selectLivro.appendChild(option);
    });
    };

    private renderizarEmprestimosAtivos(): void {
      this.emprestimosAtivosElement.innerHTML = "";

      this.emprestimos.forEach((emprestimo) => {
        const li = document.createElement("li");

        li.textContent = `Livro: ${emprestimo.livro.titulo}, Usuário: ${
          emprestimo.aluno.nome
        }, Data de Devolução: ${emprestimo.dataDevolucao.toDateString()}`;
        this.emprestimosAtivosElement.appendChild(li);
      });
    };

    adicionarLivro(livro : Livro): void {
      this.livros.push(livro);
      this.renderizarLivrosDisponiveis()

    }

    encontrarLivro(id: number) : Livro {
      const livroEncontrado = this.livros.find( livro => livro.id === id) as Livro
      return livroEncontrado;
    }

    adicionarAluno(aluno: Aluno) : void {
      this.alunos.push(aluno);
    }

    encontrarAluno(matricula: string) : Aluno{
      const alunoEncontrado = this.alunos.find( aluno => aluno.matricula === matricula) as Aluno
      return alunoEncontrado;
    }

    realizarEmprestimo(livro: Livro, aluno: Aluno, senha: string) : boolean {
      if(!aluno.matricula) {
        alert('Matricula inexistente');
        return false;
      }

      if (!senha || senha !== aluno.senha){
        alert('Senha incorreta ou inexistente');
        return false;
      }

      livro.emprestarLivro(); // já tem verificar de ser estaDisponivle

      const dataEmprestimo = new Date();
      const dataDevolucao = new Date();
      dataDevolucao.setDate(dataDevolucao.getDate() + 7);

      const emprestimo : Emprestimo = { // Emprestimo é a Interface (e precisa passar essas infos)
        livro,
        aluno,
        dataEmprestimo,
        dataDevolucao
      }

      this.emprestimos.push(emprestimo);
      this.renderizarEmprestimosAtivos();
      this.renderizarLivrosDisponiveis();
      return true;

    }
  }





