// Crie um método chamado Repor() dentro da classe Produto.

// Este método deve receber como parâmetro a quantidade 
// reposta e adicionar o montante à quantidade do produto.


class Produto {
    nome;
    preco;
    quantidade
    

constructor(valorNome, valorPreco, valorQuantidade){ //constructor dentro da classe
this.nome = valorNome
this.preco = valorPreco
this.quantidade = valorQuantidade
}

Vender(quantidadeVendida){
    if(quantidadeVendida > this.quantidade) {console.log("Estoque Insuficiente")
return  //return significa que para aqui. 
}
this.quantidade -= quantidadeVendida // é o mesmo que  this.quantidade = this.quantidade - quantidadeVendida        }
console.log (`Houve a venda de ${quantidadeVendida} unidade(s) de ${this.nome}`)

  }

  Repor(quantidadeReposta){
    this.quantidade += quantidadeReposta
  }
}

const arroz = new Produto ("arroz",20,30)

console.log(arroz)
arroz.Vender(3);
arroz.Repor(15)
console.log(arroz)