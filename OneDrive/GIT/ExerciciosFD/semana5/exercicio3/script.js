// Crie um array chamado numeros contendo cinco números
//  inteiros. Utilize um loop for para imprimir cada
//   número do array no console.

// Desafio: utilize a biblioteca prompt-sync 
// para receber cada um dos 5 números.

const prompt = require("prompt-sync") ()
const numeros = []

for (let n = 0; n < 5; n++) {
const numero = parseInt(prompt (`Digite o ${n + 1}o numero: `)); //parseInt serve para garantir que vai sair como número. Daí, ao invés de ir direto ao numeros.push, tem que declarar o numero e depois chamar o push.
numeros.push(numero)
    }

    //para imprimir, pode fazer com for ou map 
for (let n = 0; n < 5; n++) {
    console.log(`O ${n + 1} número do array é ${numeros[n]}`)
}

