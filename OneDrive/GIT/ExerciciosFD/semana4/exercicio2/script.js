
function parImpar (numero) {
    if (numero % 2 == 0) {
    return `O número ${numero} é PAR!`
    }
    else {
    return `O número ${numero} é ÍMPAR!`
    }
    }
    
    let numero = Number(prompt("Informe um número:"));
    let resultado = parImpar (numero)
    
    console.log(resultado)