// Crie um array chamado frutas contendo três frutas diferentes. Em seguida, imprima no console a segunda fruta do array.

// Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas.


//resolução - primeiro, digitei no terminal do node "npm install prompt-sync"
const prompt = require("prompt-sync")();

const arrayFrutas = [];

for (let i = 0; i < 3; i++) {
    let fruta = prompt("Indique o nome da fruta: ");

arrayFrutas.push(fruta);
} 

console.log("a segunda fruta é " + arrayFrutas[1]);