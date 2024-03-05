// Crie uma função chamada getUserInfo que simula uma consulta
// assíncrona a um servidor para obter informações de um 
// usuário. Essa função deve retornar um objeto com as 
// informações de um usuário, como nome, idade e email 
// (você pode definir os valores). 
// Com o setTimeout simule o tempo de espera da consulta 
// para demorar 2 segundos. Utilize async/await para realizar 
// a chamada de forma assíncrona.

// Em seguida, crie outra função que utiliza getUserInfo 
// para obter as informações do usuário e, após receber essas
//  informações, exibe-as no console.

//1o - criar a promessa - async function x(a,b) {return ....} .json é uma promise
//2o - criar função que vai chamar a promessa e vai dizer para esperar ela terminar ( async function init() {await ....} .then (result => {....}))
// 3o chama  função 2  - init() 



//1o - criar a promessa - async function x(a,b) {return ....}  e atrasar 2s.
async function getUserInfo() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    nome: "Keeity",
    idade: 37,
    email: "keeity@hotmail.com",
  };
}

// 2o Criar função userInfo que utiliza getUserInfo, espera terminar  e exibe as informações no console
async function userInfo() {
                       //  try {  //PODE USAR TRY CATCH para prever o que acontece em caso de erro, mas exercicio não pediu.
    const user = await getUserInfo();
    console.log(user);
  } 
                         //catch (error) { console.error("Erro ao obter informações do usuário:", error);} } //  PODE USAR TRY CATCH para prever o que acontece em caso de erro, mas exercicio não pediu.

// 3o Chamando a função userInfo
userInfo();



//RESOLUÇÃO RAYANE

// function getUserInfo() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let user = {
//           nome: "Rayane",
//           idade: 23,
//           email: "email@gmail.com",
//         };
//         resolve(user);
//       }, 10000);
//     });
//   }
  
//   //com async
//   async function playGetUser(){
//       let consulta = await getUserInfo();
//       console.log(consulta);
//   }
  
//   //sem async
//   function playGetUser(){
//       let consulta = getUserInfo();
//       consulta
//       .then((obj)=>{
//           console.log(obj);
//       }).catch(()=>{
  
//       })
//   }
  
//   debugger;
//   playGetUser();