
const express = require("express")
const path = require('path') //instala path - npm intall path --save
const app = express();

// Diretório para arquivos estáticos
const publicDirectory = path.join(__dirname, 'public');

// Middleware para servir arquivos estáticos
app.use(express.static(publicDirectory));

app.get('/', (req, res) => {
    res.send('Seja Bem Vindo(a)!');
});

app.get("/sobre", (req,res) => {
res.send("<h1>Este aplicativo foi desenvolvido para facilitar a reserva de hospedagem e gestão de reservas!</h1>")
})


app.get("/contato", (req,res) => {
    res.send("<h1>Entre em contato pelo whattsapp (+5548991199919) \n ou pelo instagram (@hotel)!</h1>")
    })


// Middleware para registrar detalhes da solicitação
// app.use() é usado para adicionar o middleware ao pipeline de processamento do Express. Este middleware registra o método HTTP (req.method), a URL da solicitação (req.url) e o horário atual no console para cada solicitação recebida. Depois disso, ele chama next() para passar o controle para o próximo middleware
const detalheSolicitacao = (req, res, next) => {
    const now = new Date().toISOString();
    console.log(`[${now}] ${req.method} ${req.url}`);
    next();
};
app.use(detalheSolicitacao);



app.get("/produto/:id", (req,res) => {
   const {id} = req.params;
    res.send(`O produto de ID ${id} é excelente!`)
    })

app.listen(3000, () => {})