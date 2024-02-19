/*
Crie uma arrow function que recebe um array 
de números e calcula a média deles.

OBS: para pegar o tamanho de um array 
use nomeDoArray.length    

Para calcular a média dos elementos de um array, podemos combinar a função reduce() 
com o método length do array. 
*/

//minha opção

//  arrow function- a função calculaMedia recebe um array de números. Ela usa o método reduce para somar todos os números no array, e então divide pelo comprimento do array (obtido com numeros.length) para calcular a média.
const calculaMedia = (numeros) => {
    const soma = numeros.reduce((total, num) => total + num, 0);
    return soma / numeros.length;
};

let numeros = [1, 2, 3, 4, 5,6,7,8,9,10];
console.log(`A média é: ${calculaMedia(numeros)}`);


//2a opção - professora
/* const exercicio = (array)=>{
    let soma = 0;
    for(let numero of array){
        soma = soma + numero;
    }
    let media = soma/array.length;
    console.log(media);
}

let arrayNumeros = [10,10,10,10]; 

exercicio(arrayNumeros);  */