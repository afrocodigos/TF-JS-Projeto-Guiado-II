"use strict";
class Biblioteca {
    constructor(livrosDisponiveisElement, // pegando element pelo id no index.ts
    emprestimosAtivosElement // pegando element pelo id no index.ts
    ) {
        this.livrosDisponiveisElement = livrosDisponiveisElement;
        this.emprestimosAtivosElement = emprestimosAtivosElement;
        this.livros = [];
        // livros: Array<Livro> = [];
        this.alunos = [];
        // paasaremos livro e alunos apenas pelos metodos e não no construtor
        this.emprestimos = [];
    }
    // --------- [Não mexer] Responsaveis por renderizar no html
    renderizarLivrosDisponiveis() {
        this.livrosDisponiveisElement.innerHTML = "";
        const disponiveis = this.livros.filter((livro) => livro.estaDisponivel);
        const selectLivro = document.getElementById("livro");
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
    ;
    renderizarEmprestimosAtivos() {
        this.emprestimosAtivosElement.innerHTML = "";
        this.emprestimos.forEach((emprestimo) => {
            const li = document.createElement("li");
            li.textContent = `Livro: ${emprestimo.livro.titulo}, Usuário: ${emprestimo.aluno.nome}, Data de Devolução: ${emprestimo.dataDevolucao.toDateString()}`;
            this.emprestimosAtivosElement.appendChild(li);
        });
    }
    ;
    // --------- [Não mexer] Responsaveis por renderizar no html
    adicionarLivro(livro) {
        this.livros.push(livro);
        this.renderizarLivrosDisponiveis();
    }
    encontrarLivro(id) {
        // const livroEncontrado = this.livros.find( livro => livro.id === id) || {} as Livro
        // pq pode ser undefined
        const livroEncontrado = this.livros.find(livro => livro.id === id);
        return livroEncontrado;
    }
    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }
    encontrarAluno(matricula) {
        const alunoEncontrado = this.alunos.find(aluno => aluno.matricula === matricula);
        return alunoEncontrado;
    }
    realizarEmprestimo(livro, aluno, senha) {
        if (!aluno.matricula) {
            alert('Matricula inexistente');
            return false;
        }
        if (!senha || senha !== aluno.senha) {
            alert('Senha incorreta ou inexistente');
            return false;
        }
        livro.emprestarLivro(); // já tem verificar de ser estaDisponivle
        const dataEmprestimo = new Date();
        const dataDevolucao = new Date();
        dataDevolucao.setDate(dataDevolucao.getDate() + 7);
        const emprestimo = {
            livro,
            aluno,
            dataEmprestimo,
            dataDevolucao
        };
        this.emprestimos.push(emprestimo);
        this.renderizarEmprestimosAtivos();
        this.renderizarLivrosDisponiveis();
        return true;
    }
}
