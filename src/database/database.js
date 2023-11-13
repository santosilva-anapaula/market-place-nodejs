const mongoose = require("mongoose"); //chamando o mongoose

function connectToDatabase() {
    mongoose.connect("mongodb://127.0.0.1:27017/market-place",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MongoDB Conectado!");
    }).catch((err) => {
        return console.log(`Erro na conexão com o banco: ${err}`);
    });
}

module.exports = connectToDatabase;