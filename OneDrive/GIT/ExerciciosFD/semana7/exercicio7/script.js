// Crie uma nova classe chamada de Pessoa que deve ter 
// os seguintes atributos:

// nome
// idade
// profissao
// Esta classe deve possuir um construtor para receber 
// os valores para cada um dos atributos.

class Pessoa {
nome;
idade;
profissao;

constructor (nome, idade, profissao) {
this.nome = nome
this.idade = idade
this.profissao = profissao
}
}


const pessoaKeeity = new Pessoa("Keeity",37,"advogada")
console.log(pessoaKeeity)