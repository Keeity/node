// Para validar ainda mais o mini projeto criado a partir dos exercícios 06 e 07 
// iremos adaptar melhor nossa aplicação. Antes de tudo, assim que executar a 
// aplicação você irá verificar no localStorage se já existe a chave “endereco” 
// caso haja, deverá ser informado que já existe um endereço na nossa base de dados 
// e se o usuário deseja fazer uma nova requisição para um novo endereço, após 
// disponibilizar o prompt para a captura do novo cep, salve os dados na mesma chave 
// “endereco” existente no localStorage. Caso não haja a chave o fluxo deve ser feito 
// como no exercício 06 e 07, ou seja, você irá capturar o cep pelo prompt, fazer a 
// requisição, e salvar os dados no localStorage.

// OBS: Lembre-se dos comandos para criar ou editar e pegar um item no Local Storage.



// let cep_informado = prompt("Por favor, informe o CEP");

// let endereco = localStorage.getItem('endereco');

// if (endereco) {
//     let novoEndereco = confirm("Já existe um endereço na nossa base de dados. Deseja fazer uma nova requisição para um novo endereço?");
//     if (novoEndereco) {
//         cep_informado = prompt("Por favor, informe o novo CEP");
//     } else {
//         alert("Endereço existente: " + endereco);
//     }
// }

// fetch(`https://viacep.com.br/ws/${cep_informado}/json`)
//     .then(response => response.json())
//     .then(data => {
//         let enderecoFormatado = `${data.logradouro}, ${data.complemento} - ${data.bairro} - ${data.localidade}/${data.uf}`;
//         let confirmacao = confirm(`O endereço é: ${enderecoFormatado}. Está correto?`);
//         if (confirmacao) {
//             localStorage.setItem('endereco', enderecoFormatado);
//             alert("Endereço salvo com sucesso!");
//         } else {
//             alert("Por favor, verifique o CEP informado.");
//         }
//     })
//     .catch(error => console.error('Erro:', error));


    

let enderecoGravado = localStorage.getItem('endereco');

function getEndereco () {
 let cep_informado;
    if (enderecoGravado) {
        let novoEndereco = confirm(`Já existe um endereço na nossa base de dados (${enderecoGravado}). Deseja incluir novo endereço?`);
        if (novoEndereco) {
   cep_informado = prompt("Informe o CEP:");
} else {
    //alert("Endereço cadastrado: " + enderecoGravado);
    document.write(`<pre>${enderecoGravado}</pre>`);
return;
}
    } else {
        cep_informado = prompt("Informe o CEP:");
    }
    
fetch(`https://viacep.com.br/ws/${cep_informado}/json`)
  .then(response => {
   return response.json();
  })
  .then((data) => {
    let endereco = `${data.logradouro}, ${data.complemento} - ${data.bairro} - ${data.localidade}/${data.uf}`;
    let confirmacao = confirm(`O endereço é: ${endereco}. Está correto?`);
    if (confirmacao) {
      localStorage.setItem('endereco', JSON.stringify(endereco));
      document.write(`<pre>${enderecoGravado}</pre>`);
    }
   else {
    alert('CEP não encontrado.');
   }
    })
  .catch(() => {
    alert('Erro.');
    });

 }

getEndereco();
