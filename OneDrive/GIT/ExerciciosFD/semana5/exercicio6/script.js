// Crie um array chamado pares que contenha apenas 
// os números pares do array numeros criado nos 
// exercícios anteriores. Em seguida, imprima esse 
// novo array no console. Utilize o método filter 
// para realizar a operação de filtragem.


const numeros = [7,9,4,12,21,3];

const resultado = numeros.filter((n) => {
    if (n % 2 == 0) {return true}
})

console.log(resultado)