/*
Usando o mesmo array do exercício anterior, adicione mais uma fruta ao array frutas. Em seguida, remova a primeira fruta do array. Imprima o array atualizado no console
*/

//const prompt = require("prompt-sync")();

const frutas = []

for (let i = 0; i < 3; i++) {
    frutas.push(prompt("Indique o nome da fruta: "))
} 
//
frutas.push(prompt("Digite uma fruta adicional: "))
frutas.shift() //Se quisesse tirar a 2a fruta, colocaria assim> frutas.slice(1,2) --> não conta o segundo índice

console.log(frutas)