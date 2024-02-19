
/*
    Você foi contratado por um supermercado para catalogar a compra de uma cliente. Assim que a aplicação começa deverá ser perguntado em um prompt qual produto o cliente deseja comprar, só serão aceitas as seguintes respostas:

(1)Hortifruti
(2)Laticínios
(3)Carnes
(4)Peixes
(5)Aves
(6)Fechar pedido
Após fazer a seleção do produto pergunte a quantidade de itens que o cliente irá comprar.

Apenas se o cliente selecionar a opção 6 é que a pergunta deverá parar de ser repetida.

Ao selecionar a opção 6 imprima o produto que o cliente pegou em maior quantidade.
*/


//minha

let produtos = {
    "Hortifruti": 0,
    "Laticínios": 0,
    "Carnes": 0,
    "Peixes": 0,
    "Aves": 0
};

while (true) {
    let opcao = prompt("Qual produto você deseja comprar?\n(1)Hortifruti\n(2)Laticínios\n(3)Carnes\n(4)Peixes\n(5)Aves\n(6)Fechar pedido");

    if (opcao === '6') {
        break;
    }

    let quantidade = prompt("Quantos itens você vai comprar?");

    switch (opcao) {
        case '1':
            produtos["Hortifruti"] += Number(quantidade);
            break;
        case '2':
            produtos["Laticínios"] += Number(quantidade);
            break;
        case '3':
            produtos["Carnes"] += Number(quantidade);
            break;
        case '4':
            produtos["Peixes"] += Number(quantidade);
            break;
        case '5':
            produtos["Aves"] += Number(quantidade);
            break;
        default:
            alert("Opção inválida. Por favor, escolha uma opção entre 1 e 6.");
    }
}

let produtoMaisComprado = Object.keys(produtos).reduce((a, b) => produtos[a] > produtos[b] ? a : b);

console.log(`O produto que o cliente comprou em maior quantidade foi: ${produtoMaisComprado}`);