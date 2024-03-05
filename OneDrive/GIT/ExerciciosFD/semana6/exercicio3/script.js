// Crie um arquivo JSON chamado data.json com a seguinte 
// estrutura interna:
// {
//   "nome": "João",
//   "idade": 30,
//   "email": "joao@example.com"
// }
// ‌

// Após isso, utilize a fetch API para obter o arquivo JSON e, 
// em seguida, a resposta deve ser convertida para o formato JSON 
// usando o método .json() . O conteúdo JSON deve ser então exibido na página HTML.




async function fetchData() {
    try {
        const response = await fetch('data.JSON'); 
        const data = await response.json();

        document.write('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
    } catch (error) {
        console.error('Erro ao buscar o arquivo data.JSON:', error);
    }
}
fetchData();// Chamar a função para buscar os dados

//async function arquivoJson ()
//let divUsuarios = document.querySelector("#usuarios")

// async function fetchData() {
//     const response = await fetch('data.json')
//     const data = await response.json();

//     document.write('<pre>' + JSON.stringify(data, null, 2) + '</pre>');

//  // Chamando a função para buscar os dados
// fetchData()

// .then((response) => {
//   return response.json()
// .then((data) => { 
//   console.log(data);
// document.body.innerHTML = `<li>${data}</li>`;
// })
// .catch(() => {
// })


