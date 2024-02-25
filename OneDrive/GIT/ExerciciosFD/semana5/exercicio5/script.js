// Crie um novo array chamado numerosOrdenados 
// contendo os mesmos números do array numeros. 
// Em seguida, ordene esse novo array em ordem 
// crescente e imprima-o no console.


//opcao 1 .sort dentro do console não funcionou. Ao que parece, funciona com strings apenas.
//opcao 2 não deu certo! Não descobri o motivo

//const numeros = [7,9,4,12,21,3]
//const numerosOrdenados = [7, 9, 4, 12, 21, 3];
//let resultado = numerosOrdenados.sort ((a,b) => {return a-b});
// tentei fazer sem return e não deu certo!
// (a,b) => {a-b}    é o mesmo que 
// function (a,b) { if( a> b) return 1; if (a < b) return -1; return 0;}


const prompt = require("prompt-sync") ()
const numeros = []

        //fazer copia com spread
  

for (let n = 0; n < 5; n++) {
    const numero = parseInt(prompt (`Digite o ${n + 1}o numero: `)); //parseInt serve para garantir que vai sair como número. Daí, ao invés de ir direto ao numeros.push, tem que declarar o numero e depois chamar o push.
    numeros.push(numero)
        }

const numerosOrdenados = [...numeros];

//Não dá certo com sort() mesmo declarando numero.
//console.log("Os números em ordem são os seguintes:"+ numerosOrdenados.sort())

console.log("Os números em ordem são os seguintes:"+ numerosOrdenados.sort ((a,b) => {return a - b }))


