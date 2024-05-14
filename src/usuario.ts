class Usuario {
    /* forma tradicional (se precisar transformar o valor)
    nome: string;
    email: string;
    senha: string;

    constructor(nome: string, email: string, senha: string){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    */

    // OU substituir por um constructor vazio com public (sem ter alteração do construtor, só recebendo e passando)
    constructor(public nome: string, public email: string, public senha: string){}


}
