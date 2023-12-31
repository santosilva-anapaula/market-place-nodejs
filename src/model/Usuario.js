const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, required: true },
    imagem: { type: String, required: true },
    enderecos: [
        {
            rua: { type: String, required: true },
            numero: { type: Number, required: true },
            complemento: { type: String, required: false },
            CEP: { type: String, required: true },
            createdAt: { type: Date, required: true, default: Date.now() },
        }
    ],
    produtos_fav: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, ref: "produtos" },
            createdAt: { type: Date, default: Date.now() },
        }
    ],
    createdAt: { type: Date, required: true, default: Date.now() },
    admin: { type: Boolean, default: false }
}); //construção do modelo de dados

UsuarioSchema.pre("save", async function(next) {
    if(this.senha){
        this.senha = await bcrypt.hash(this.senha, 10);//embaralha a senha 10x
    }
    next();
});

const Usuario = mongoose.model("usuarios", UsuarioSchema); //exportação

module.exports = Usuario;