// Utilizando o array numeros do exercício anterior, 
// calcule e imprima a soma de todos os elementos do 
// array. Utilize o reduce para realizar a soma.

const prompt = require("prompt-sync") ()
const numeros = []

for (let n = 0; n < 5; n++) {
    const numero = parseInt(prompt (`Digite o ${n + 1}o numero: `)); //parseInt serve para garantir que vai sair como número. Daí, ao invés de ir direto ao numeros.push, tem que declarar o numero e depois chamar o push.
    numeros.push(numero)
        }

const resultado = numeros.reduce( (soma, atual) => {
    return soma + atual //tem que ter o return. tentei sem e não deu
}, 0 //aqui diz onde começa
)

console.log(`A soma dos números é ${resultado}`)