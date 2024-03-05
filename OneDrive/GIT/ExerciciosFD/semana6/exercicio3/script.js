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
let options = {
    method: 'GET'
};
let data = fetch('data.json', options)
.then ((resposta) => {
    return resposta.json()
})

.catch(() => {
})

document.write(`<h1>${resposta}</h1`);


async function fetchData() {
    try {
        const response = await fetch('data.JSON'); // Substitua pelo caminho correto do arquivo
        const data = await response.json();

        // Exibindo o conteúdo na página usando document.write
        document.write('<pre>' + JSON.stringify(data, null, 2) + '</pre>');
    } catch (error) {
        console.error('Erro ao buscar o arquivo data.JSON:', error);
    }
}

// Chamando a função para buscar os dados
fetchData();