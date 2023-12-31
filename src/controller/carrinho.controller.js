const CarrinhoService = require("../service/carrinho.service");

const findCarrinhoByIdController = async (req, res) => {
    try {
        res.status(200).send(await CarrinhoService.findCarrinhoByIdService(req.params.id));
    } catch (err) {
        res.status(500).send({ message:"Erro inesperado, tente novamente!" });
        console.log(err.message);
    }
};

const findAllCarrinhoController = async (req, res) => {
    try {
        res.status(200).send(await CarrinhoService.findAllCarrinhoService(req.query.limit, req.query.offset));
    } catch (err) {
        res.status(500).send({ message:"Erro inesperado, tente novamente!" });
        console.log(err.message);
    }
};

const createCarrinhoController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            userId: req.userId,
        }
        res.status(201).send(await CarrinhoService.createCarrinhoService(corpo));
    } catch (err) {
        res.status(500).send({ message:"Erro inesperado, tente novamente!" });
        console.log(err.message);
    }
};

const updateCarrinhoController = async (req, res) => {
    try {
        res.status(200).send(await CarrinhoService.updateCarrinhoService(req.params.id, req.body));
    } catch (err) {
        res.status(500).send({ message:"Erro inesperado, tente novamente!" });
        console.log(err.message);
    }
};

const deleteCarrinhoController = async (req, res) => {
    try {
        res.status(200).send(await CarrinhoService.deleteCarrinhoService(req.params.id));
    } catch (err) {
        res.status(500).send({ message:"Erro inesperado, tente novamente!" });
        console.log(err.message);
    }
};

module.exports = {
    findCarrinhoByIdController,
    findAllCarrinhoController,
    createCarrinhoController,
    updateCarrinhoController,
    deleteCarrinhoController
}