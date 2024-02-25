/*
Usando o mesmo array do exercício anterior, adicione mais uma fruta ao array frutas. Em seguida, remova a primeira fruta do array. Imprima o array atualizado no console
*/

//const prompt = require("prompt-sync")();

const arrayFrutas = [];

for (let i = 0; i < 3; i++) {
    let fruta = prompt("Indique o nome da fruta: ");

arrayFrutas.push(fruta);
} 

arrayFrutas.shift();
console.log(arrayFrutas);