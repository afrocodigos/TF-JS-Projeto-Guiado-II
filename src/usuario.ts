class Usuario{//primeiro criando a classe usuario
    //criando os atributos
    nome: string;
    email: string;
    senha: string;

    constructor (nome:string,email:string,senha:string){//depois criando o construtor
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}