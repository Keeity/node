// Continuando o exercício 06 iremos além de informar através do alert 
// o endereço informado pelo cep iremos perguntar também se os dados 
// informados estão corretos, caso esteja tudo correto salve esses dados
//  no localStorage na chave “endereco”.

// ‌

// OBS: Revise o conteudo do localStorage para relembrar o comando para salvar no localStorage.



function getEndereco () {
    let cep_informado = prompt("Informe o CEP:");

fetch(`https://viacep.com.br/ws/${cep_informado}/json`)
  .then(response => {
   return response.json();
  })
  .then((data) => {
    var endereco = `${data.logradouro}, ${data.complemento} - ${data.bairro} - ${data.localidade}/${data.uf}`;
    var confirmacao = confirm(`O endereço é: ${endereco}. Está correto?`);
    if (confirmacao) {
      localStorage.setItem('endereco', JSON.stringify(endereco))
    }
   else {
    alert('CEP não encontrado.');
   }
    })
  .catch(() => {
    });

 }

getEndereco();

localStorage.setItem()