interface Emprestimo{//esta servindo apenas como se fosse um contrato
    //ela vai funcionar como se fosse uma caixa de texto pro usuario
    //e o usuario e obrigado a preencher esses campos
    livro: Livro;
    aluno: Aluno;
    dataEmprestimo: Date;
    dataDevolucao: Date;
}