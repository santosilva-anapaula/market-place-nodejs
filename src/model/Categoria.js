const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
    nome: { type: String, unique: true, requires: true },
});

const Categoria = mongoose.model("categorias", CategoriaSchema);

module.exports = Categoria;