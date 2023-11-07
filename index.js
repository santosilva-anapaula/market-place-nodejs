const express = require("express"); //chamando o express

const app = express(); //defini que o app é o express

const port = 3000; //define a porta da aplicação

app.use(express.json()); //trabalhar o conteudo da aplicação com json

app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo ao nosso market-place"
    });
}); //rota inicial da aplicação

app.listen(port, () => {
    console.log(`servidor rodando em: http://localhost:${port}`);
});