interface Emprestimo {
    // servindo de contrato, td vez q tentar um emprestimo é obrigatório passar essas infos
    livro: Livro;
    aluno: Aluno;
    dataEmprestimo: Date;
    dataDevolucao: Date;
}
