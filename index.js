const express = require("express"); //chamando o express
require("dotenv").config();//chamando e configurando o dotenv
const cors = require("cors");

const connectToDatabase = require("./src/database/database"); //arquivo de conexao com o banco

const usuario = require("./src/router/usuario.router");//arquivo de rota do usuario
const auth = require("./src/router/auth.router"); //arquivo de rota do auth
const produto = require("./src/router/produto.router"); //arquivo de rota do produto
const categoria = require("./src/router/categoria.router"); //arquivo de rota do categoria
const carrinho = require("./src/router/carrinho.router"); //arquivo de rota do carrinho
const pedido = require("./src/router/pedido.router"); //arquivo de rota do pedido
const docs = require("./src/router/docs.router"); //arquivo de rota de documentacao

const app = express(); //defini que o app é o express

const port = 3000; //define a porta da aplicação

app.use(express.json()); //trabalhar o conteudo da aplicação com json
app.use(cors(
    {
        origin: [
            "localhost:3001",
            "localhost:3002"
        ],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    }
));

connectToDatabase(); //conexão com o banco

app.use("/usuario", usuario); //chamando rotas de usuario
app.use("/auth", auth);//chamando as rotas de auth
app.use("/produto", produto);//chamando as rotas de produto
app.use("/categoria", categoria);//chamando rotas de categoria
app.use("/carrinho", carrinho);//chamando rotas de carrinho
app.use("/pedido", pedido);//chamando rotas de pedido
app.use("/docs", docs);//chamando rotas de docs

app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo ao nosso market-place"
    });
}); //rota inicial da aplicação

app.listen(port, () => {
    console.log(`servidor rodando em: http://localhost:${port}`);
});