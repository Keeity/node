/*
    Utilizando um while, repita uma mini 
    entrevista com 4 usuários 
    perguntando qual a nota para 
    avaliação da série "Stranger Things”, 
    será apenas aceita três tipos de avaliação: 
    ruim, bom e excelente. Depois verifique
     quantas pessoas classificaram a série como
      ruim.
*/

//meu

let contadorRuim = 0;
let i = 0;

while (i < 4) {
    let avaliacao = prompt('Qual a sua avaliação para a série "Stranger Things"? (ruim, bom, excelente)');
    
    if (avaliacao === 'ruim' || avaliacao === 'bom' || avaliacao === 'excelente') {
        if (avaliacao === 'ruim') {
            contadorRuim++;
        }
        i++;
    } else {
        alert('Por favor, insira uma avaliação válida (ruim, bom, excelente)');
    }
}

console.log(`Número de pessoas que classificaram a série como ruim: ${contadorRuim}`);



//em sala
let totalRuins = 0;
let contador = 1;
while (contador <= 4){
    let resposta = prompt("Qual a asua avaliação para a a serie stranger things? (bom), (ruim) ou (excelente)");
    if(resposta == "ruim" ) {
        totalRuins++;
    }

    contador++;
}

console.log(`Total de usuários que avaliou a série como ruim: ${totalRuins}`);


