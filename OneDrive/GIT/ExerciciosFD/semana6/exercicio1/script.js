// Construa uma função que irá verificar se um valor 
// passado pelo parâmetro é par. 
// Construa as validações dentro de uma promise 
// para que caso seja uma par retorne para o then 
// a mensagem: "Número validado é par”.

// Caso o valor seja ímpar, retorne para o catch
//  a mensagem: “Error: número informado é impar”.

// OBS: Se for par ele deve chamar o “resolve”, 
// se não for par ele irá chamar o “reject”. Não esqueça
//  de enviar a mensagem como parâmetro

const promiseParImpar = new Promise((resolve,reject) => {
   let numero = 4;
   if (numero % 2 == 0) {resolve("Numero validado é par"
   )} 
   else {("Error: número informado é ímpar")}
    
})

promiseParImpar.then((valor)=>{console.log(valor)})

.catch((error)=>{console.log(error)})