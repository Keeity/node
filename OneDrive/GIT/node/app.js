
const express = require("express")

const app = express();


//Arquivos estáticos - chamando por middeware...
app.get("/",function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

     //Pelo chatGPT deu assim:
//Define caminho...
        //const path = require('path') //instala path - npm intall path --save
// Diretório para arquivos estáticos
             //const publicDirectory = path.join(__dirname, 'public');
// Middleware para servir arquivos estáticos
       //app.use(express.static(publicDirectory));
//assim, vai usar os arquivos que estão na pasta public criada. Coloquei o arquivo Amendoim2.png ali de teste. Se eu quiser acessá-lo, basta escrever http://localhost:3000/amendoim2.png


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
    res.status(200).send(`O produto de ID ${id} é excelente!`)
    
})




//crud
let userArray = [] // simulando banco de dados em memória

// obter todos os usuarios
app.get("/users", function (req, res) {

    res.send(JSON.stringify(userArray))
})

//obter usuário pelo id
app.get("/users/:id", function (req, res) {

    const id = req.params.id

    user = userArray.filter((value) => value.id === parseInt(id))[0]

    if (!user) {
        return res.status(404).json({
            error: "usuário não encontrado"
        })
    }
    res.send(JSON.stringify(user))
})

// criar user novo
app.post("/users", function (req, res) {

    const { id, nome, idade } = req.body //inserindo id manualmente
    const newUser = { id, nome, idade }

    if (newUser) {
        userArray.push(newUser)
        return res.status(201).json({
            message: `usuário criado com sucesso: ${nome}, ${idade}`
        })
    }
    return res.status(400).json({
        message: "bad request"
    })

})

//atualizar usuario
app.put("/users/:id", function (req, res) {

    const { nome, idade } = req.body
    const userId = req.params.id
    const userData = userArray.filter((user) => user.id === parseInt(userId))[0]

    if (!userData) {
        return res.status(404).json({
            error: "usuario não encontrado"
        })
    }

    const index = userArray.indexOf(userData)

    userArray[index].nome = nome
    userArray[index].idade = idade

    const updated = userArray[i]
    return res.status(200).json({
        message: `dados do usuario atualizados: ${updated.id}, ${updated.nome}, ${updated.idade}`
    })

})

app.delete("/users/:id", function (req, res) {

    const userId = req.params.id
    const userData = userArray.filter((user) => user.id == userId)[0]

    if (!userData) {
        return res.status(404).json({
            error: "usuario não encontrado"
        })
    }

    const index = userArray.indexOf(userData)
    userArray.splice(index, 1)

    return res.status(200).json({
        message: "usuário removido com sucesso"
    })
})


app.listen(3000, () => {})