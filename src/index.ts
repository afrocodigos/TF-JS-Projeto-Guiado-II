document.addEventListener("DOMContentLoaded", () => {
  const livrosDisponiveisElement = document.getElementById(
    "livrosDisponiveis"
  ) as HTMLUListElement;
  const emprestimosAtivosElement = document.getElementById(
    "emprestimosAtivos"
  ) as HTMLUListElement;

  const biblioteca = new Biblioteca(
    livrosDisponiveisElement,
    emprestimosAtivosElement
  );

  const livro1 = new Livro(1, "Never Finished", "David Goggins", true);
  const livro2 = new Livro(2, "Sem Esforço", "Greg Mckeown", true);
  const livro3 = new Livro(3, "Os Quatro Compromissos", "Don Miguel Ruiz", true);
  const livro4 = new Livro(4, "O Poder do Agora", "Eckhart Tolle", true);
  const livro5 = new Livro(5, 'O Alquimista', 'Paulo Coelho', true);
  const livro6 = new Livro(6, 'Brida', 'Paulo Coelho', true);
  const livro7 = new Livro(7, 'A quietude é a chave', 'Ryan Holiday', true);
  
  biblioteca.adicionarLivro(livro1);
  biblioteca.adicionarLivro(livro2);
  biblioteca.adicionarLivro(livro3);
  biblioteca.adicionarLivro(livro4);
  biblioteca.adicionarLivro(livro5);
  biblioteca.adicionarLivro(livro6);
  biblioteca.adicionarLivro(livro7);
 

  const aluno1 = new Aluno("Gabriel", "mauriciorjgabriel@gmail.com", "1234", "001");
  const aluno2 = new Aluno("Bruna", "bruna.nascimento@gmail.com", "1234", "002");
  const aluno3 = new Aluno("Andrea","andreamattos@gmail.com", "1234", "003");

  biblioteca.adicionarAluno(aluno1);
  biblioteca.adicionarAluno(aluno2);
  biblioteca.adicionarAluno(aluno3);

  const alugarLivroForm = document.getElementById(
    "alugarLivroForm"
  ) as HTMLFormElement;

  alugarLivroForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const idLivroSelecionado = parseInt(
      (document.getElementById("livro") as HTMLSelectElement).value
    );
    const matricula = (document.getElementById("matricula") as HTMLInputElement)
      .value;
    const senha = (document.getElementById("senha") as HTMLInputElement).value;

    const livro = (biblioteca.encontrarLivro(idLivroSelecionado) ||
      {}) as Livro;
    const aluno = (biblioteca.encontrarAluno(matricula) || {}) as Aluno;

    biblioteca.realizarEmprestimo(livro, aluno, senha);
  });
});
