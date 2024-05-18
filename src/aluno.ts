class Aluno extends Usuario{
    matricula: string;



    constructor( nome:string,email:string,senha:string,matricula:string){
        super(nome,email,senha);//esse super e por causa esta herdando da classe usuario
        this.matricula = matricula;
    }
}