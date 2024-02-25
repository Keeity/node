// Utilizando o array numeros utilizado nos exercícios
//  anteriores, crie um novo array chamado quadrados 
//  que contenha o quadrado de cada número do array
//   numeros. Imprima o array quadrados no console. 
//   Use o método map para realizar a criação de um 
//   novo array.


const prompt = require("prompt-sync") ()
const numeros = []

for (let n = 0; n < 5; n++) {
    const numero = parseInt(prompt (`Digite o ${n + 1}o numero: `)); //parseInt serve para garantir que vai sair como número. Daí, ao invés de ir direto ao numeros.push, tem que declarar o numero e depois chamar o push.
    numeros.push(numero)
        }

const quadrados = numeros.map((n) => {return n * n }) //poderia utilizar  n ** 2 

console.log(`O novo array que contem o quadrado dos números ${numeros} é o seguinte: ${quadrados}`)