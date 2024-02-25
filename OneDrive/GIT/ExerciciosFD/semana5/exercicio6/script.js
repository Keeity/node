// Crie um array chamado pares que contenha apenas 
// os números pares do array numeros criado nos 
// exercícios anteriores. Em seguida, imprima esse 
// novo array no console. Utilize o método filter 
// para realizar a operação de filtragem.



const prompt = require("prompt-sync") ()
const numeros = []

for (let n = 0; n < 5; n++) {
    const numero = parseInt(prompt (`Digite o ${n + 1}o numero: `)); //parseInt serve para garantir que vai sair como número. Daí, ao invés de ir direto ao numeros.push, tem que declarar o numero e depois chamar o push.
    numeros.push(numero)
        }

const resultado = numeros.filter((n) => {
    if (n % 2 == 0) {return true}
})

console.log(`O novo array com números pares é: ${resultado}`)