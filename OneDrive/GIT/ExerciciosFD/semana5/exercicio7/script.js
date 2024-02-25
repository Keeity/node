// Utilizando o array numeros utilizado nos exercícios
//  anteriores, crie um novo array chamado quadrados 
//  que contenha o quadrado de cada número do array
//   numeros. Imprima o array quadrados no console. 
//   Use o método map para realizar a criação de um 
//   novo array.

const numeros = [7, 9, 4, 12, 21, 3]

const quadrados = numeros.map((n) => {return n * n
})

console.log(`O novo arrays quadrados contém os números ${quadrados}`)