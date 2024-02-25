// Utilizando o array numeros do exercício anterior, 
// calcule e imprima a soma de todos os elementos do 
// array. Utilize o reduce para realizar a soma.


const arrayNumeros = [7,9,4,12,21,3]

// for (let n = 0; n < arrayNumeros.length; n++) {
//     console.log(`O número do array é ${arrayNumeros[n]}`)
// }

const resultado = arrayNumeros.reduce( (soma, atual) => {
    return soma + atual
}, 0
)

console.log(`A soma dos números é ${resultado}`)