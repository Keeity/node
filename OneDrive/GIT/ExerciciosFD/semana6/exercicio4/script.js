// Crie uma função que irá pedir 3 informações através do prompt,
//  o nome, a idade e o email. Monte essas informações
//   em um objeto igual ao do exercício 03, 
//   após isso salve esse objeto com a chave “user” no localStorage.

function getUserInfo() {
    var nome = prompt("Por favor, insira seu nome:");
    var idade = prompt("Por favor, insira sua idade:");
    var email = prompt("Por favor, insira seu email:");
  
    var user = {
      nome: nome,
      idade: idade,
      email: email
    };
  
    localStorage.setItem('user', JSON.stringify(user)); // os dados são salvos no formato de string, por isso usa JSON.stringify para converter o objeto user em uma string antes de armazená-lo.
  }
  
  getUserInfo();