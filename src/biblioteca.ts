class Biblioteca{
    livros: Livro[] = [];
    alunos: Aluno[] = [];
    emprestimos: Emprestimo[] = [];
    
    //nesse momento eu vou definir em que local ele vai mostra essa informação no HTML
    //UL segnifica que e uma lista não ordenada
    constructor(public livrosDisponiveisElement: HTMLUListElement, public emprestimosAtivosElement: HTMLUListElement){

    }

    

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


    adicionarLivro(livro: Livro): void{//quando tem void que dizer que a função não vai retornar nada vai apenas adicionar na lista
      this.livros.push(livro);
      this.renderizarLivrosDisponiveis();
    }

    encontraLivro(id: number): Livro{//ele vai buscar na lista pelo id e se ele e não encontra esse id ele vai retornar um objeto Livro vazio
      //nesse caso ele vai pegar o id dentro do html
      const livroEncontrado = this.livros.find((livro) => livro.id === id)as Livro;
      return livroEncontrado;

    }

    adicionarAluno(aluno:Aluno){
      this.alunos.push(aluno);

    }

    encontrarAluno(matricula: string): Aluno{//estou pegando como parametro a marticula que esta presente na classe Aluno
      const alunoEncontrado = this.alunos.find((aluno) => aluno.matricula === matricula) as Aluno;
      return alunoEncontrado;
    }

    excluirAluno(aluno: Aluno){
      const indice = this.alunos.findIndex(a => a.matricula === aluno.matricula);//ele vai buscar na matricula se tem algum valor igual
      if (indice !== -1) {//tendo um indice igual entra no if
        this.alunos.splice(indice, 1);//ele vai deletar o indice e apenas ele o primeiro parametro e o indice a ser deletado e o segundo e a quantidade
        console.log(`Aluno com matrícula ${aluno.matricula} foi excluído.`);
      } else {
        console.log(`Aluno com matrícula ${aluno.matricula} não encontrado.`);
      }
    }

    realizarEmprestimo(livro: Livro, aluno: Aluno, senha: string){
      if(!aluno.matricula){//ele vai verificar se a matricula e existente se não for vai entrar no if
        alert("Matricula inexsistente");
        return false;
      }

      else if(!senha || senha != aluno.senha){//se não passar a senha e se a senha for diferente da senha cadastrada da erro
        alert("Senha incorreta");
        return false;
      }

      else if(!livro.estaDisponivel){//vai verificar se o livro está disponivel se não esta entra no if
        alert(`O livro ${livro.titulo} não está disponivel para emprestimo`);
        return false;
      }

      else{
      livro.emprestarLivro();//chamando o metodo para mudar o status do livro

      const dataEmprestimo = new Date();
      const dataDevolucao = new Date();
      dataDevolucao.setDate(dataDevolucao.getDate() + 7)//basicamente eu estou pegando a data de hoje e acrescentando 7 dias a ela
      //logo se hoje for dia 13 depois dessa linha vai ser mostrado o dia 20
      const emprestimo: Emprestimo = {
          livro,
          aluno,
          dataEmprestimo,
          dataDevolucao
        }

        this.emprestimos.push(emprestimo);//lembrar de chamar dentro do else
        this.renderizarEmprestimosAtivos();
        this.renderizarLivrosDisponiveis();

        return true;
      }

    }
}



  
