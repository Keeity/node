// Crie um método para a classe Produto chamado de Vender().

// Este método deve receber como parâmetro a quantidade 
// vendida e deve reduzir (deduzir) da quantidade do 
// produto. Porém, para ser possível essa venda a quantidade
//  vendida não pode ser maior que a quantidade disponível.

// Caso não haja quantidade suficiente, exiba uma mensagem
//  de “Estoque insuficiente”.

class Produto {
    nome;
    preco;
    quantidade
    

constructor(valorNome, valorPreco, valorQuantidade){ //constructor dentro da classe
this.nome = valorNome
this.preco = valorPreco
this.quantidade = valorQuantidade
}

vender(quantidadeVendida){
    if(quantidadeVendida > this.quantidade) {console.log("Estoque Insuficiente")
return  //return significa que para aqui. 
}
this.quantidade -= quantidadeVendida // é o mesmo que  this.quantidade = this.quantidade - quantidadeVendida        }
  }

}
