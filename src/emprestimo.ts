interface Emprestimo {
    // contrato: obrigatório passar essas infos
    livro: Livro;
    aluno: Aluno;
    dataEmprestimo: Date;
    dataDevolucao: Date;
}
