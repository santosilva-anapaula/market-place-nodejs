const mongoose = require("mongoose");

const CarrinhoSchema = new mongoose.Schema({
    produtos:[
        {
            _id: { type: mongoose.Schema.Types.ObjectId, ref: "produtos" },
            quantidade: { type: Number, required: true }
        },
    ],
    createAT: { type: Date(), required: true, default: Date.now },
    precoTotal: { type: Number, required: true },
    frete: { type: Number, required: true },
    userId:  { type: mongoose.Schema.Types.ObjectId, ref: "usuarios" }
});

const Carrinho = mongoose.model("carrinhos", CarrinhoSchema);

module.exports = Carrinho;