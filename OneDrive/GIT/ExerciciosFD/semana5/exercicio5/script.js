// Crie um novo array chamado numerosOrdenados 
// contendo os mesmos números do array numeros. 
// Em seguida, ordene esse novo array em ordem 
// crescente e imprima-o no console.


//opcao 1 .sort dentro do console não funcionou. Ao que parece, funciona com strings apenas.
//opcao 2 não deu certo! Não descobri o motivo

//const numeros = [7,9,4,12,21,3]
const numerosOrdenados = [7, 9, 4, 12, 21, 3];
let resultado = numerosOrdenados.sort ((a,b) => {a-b});
//
// (a,b) => {a-b}    é o mesmo que 
// function (a,b) { if( a> b) return 1; if (a < b) return -1; return 0;}

console.log(resultado)