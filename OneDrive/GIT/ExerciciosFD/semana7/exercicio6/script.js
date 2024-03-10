// Crie um método chamada de AtualizarPreco dentro da classe
//  Produto.

// Este método deve receber como parâmetro o novo valor do
//  produto e atualizar o preço atual.

class Produto {
    nome;
    preco;
    quantidade;
    

constructor(valorNome, valorPreco, valorQuantidade){ //constructor dentro da classe
this.nome = valorNome
this.preco = valorPreco
this.quantidade = valorQuantidade //poderia já iniciar com quantidade zero. quantidade = 0 
}
//Se quisesse, poderia criar a classe e já trazer o construtor. Segue exemplo:
    // class Produto { 
    // constructor(nome, preco, quantidade){ //constructor dentro da classe
    // this.nome = nome
    // this.preco = preco
    // this.quantidade = quantidade
    // }}

    Vender(quantidadeVendida){
        if(quantidadeVendida > this.quantidade) {console.log(`Estoque Insuficiente. Há apenas ${this.quantidade} unidade(s) de ${this.nome} em estoque.`)
    return  //return significa que para aqui. 
    }
    this.quantidade -= quantidadeVendida // é o mesmo que  this.quantidade = this.quantidade - quantidadeVendida        }
    console.log (`Houve a venda de ${quantidadeVendida} unidade(s) de ${this.nome}`)
    
      }
    
    Repor(quantidadeReposta){
        this.quantidade += quantidadeReposta
        console.log (`Houve a reposição de ${quantidadeReposta} unidade(s) de ${this.nome}`)
      }
    
    
    MostrarEstoque(){
            if(this.quantidade>1){
                console.log(`O produto ${this.nome} custa R$ ${this.preco} e possui ${this.quantidade} unidades disponíveis em estoque.)`)
            } 
            else if(this.quantidade == 0) {
                console.log(`O produto ${this.nome} custa R$ ${this.preco} e está com estoque zerado`)
            } 
            else {console.log(`O produto ${this.nome} custa R$ ${this.preco} e possui ${this.quantidade} unidade disponível em estoque.)`)}
    
          }
 
AtualizarPreco(precoNovo){
this.preco = precoNovo
console.log(`O produto ${this.nome} teve seu preço atualizado para ${this.preco}.`)
         }
    }


const arroz = new Produto ("arroz",20,30)

console.log(arroz)
arroz.Vender(35);
arroz.Repor(5)
arroz.Vender(34);
arroz.MostrarEstoque()
arroz.AtualizarPreco(30)
console.log(arroz)