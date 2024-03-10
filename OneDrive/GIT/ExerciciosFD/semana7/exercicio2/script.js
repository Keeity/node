// Crie um construtor para a classe Produto que permita
//  receber os valores base para cada um dos parâmetros..
 
class Produto {
    nome;
    preco;
    quantidade
    

constructor(valorNome, valorPreco, valorQuantidade){ //constructor dentro da classe
this.nome = valorNome
this.preco = valorPreco
this.quantidade = valorQuantidade
}

}

const arroz = new Produto ("arroz",20,30)
console.log(arroz)

