// Crie uma nova classe chamada de Cliente. Esta classe deve 
// herdar a classe Pessoa.

// Além disso ela deve possuir os seguintes atributos:
// telefone
// email
// clienteDesde - deve ser uma string no formato “ANO-MES-DIA”
// Crie um construtor para receber os valores para todos os 
// atributos da classe Cliente e também da classe Pessoa, 
// sendo necessário passar parâmetros para o construtor base
//  da classe Pessoa.


class Pessoa {
    nome;
    idade;
    profissao;
    
    constructor (valorNome , valorIdade, valorProfissao) {
    this.nome = valorNome
    this.idade = valorIdade
    this.profissao = valorProfissao
    }
      
    }

    class Cliente extends Pessoa { //extends pessoa - herda de pessoa
    telefone;
    email;
    clienteDesde;  //deve ser uma string no formato “ANO-MES-DIA”
    
    constructor (valorNome , valorIdade, valorProfissao, valorTelefone, valorEmail, valorClienteDesde) {
        super(valorNome , valorIdade, valorProfissao); // super puxa as informações da classe mãe
        this.telefone = valorTelefone;
        this.email = valorEmail;


          // Verifica se a data está no formato correto (ANO-MES-DIA)
         const regex = /^\d{4}-\d{2}-\d{2}$/;
          if (!regex.test(valorClienteDesde)) {
            this.clienteDesde = "Data inválida. Não está no formato ANO-MES-DIA.";
            return   }
          this.clienteDesde = valorClienteDesde;
}
    }

const clienteKeeity = new Cliente("Keeity",37,"Advogada",479776535,"keeity@email.com","2023-09-17")

console.log(clienteKeeity)