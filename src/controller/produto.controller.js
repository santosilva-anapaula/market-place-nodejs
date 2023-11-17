const produtoService = require("../service/produto.service");

const findProductByIdController = async (req, res) => {
    try {
        res.send(await produtoService.findProductByIdService(req.params.id));
    } catch (err) {
        console.log(`erro:${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const findAllProductController = async (req, res) => {
    try {
        res.send(await produtoService.findAllProductService());
    } catch (err) {
        console.log(`erro:${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const createProductController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            userId: req.userId,
            createdAt: new Date(),
        }

        res.send(await produtoService.createProductService(corpo));

    } catch (err) {
        console.log(`erro:${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const updateProductController = async (req, res) => {
    try {
        res.send(await produtoService.updateProductService(req.params.id, req.body));
    } catch (err) {
        console.log(`erro:${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const deleteProductController = async (req, res) => {
    try {
        res.send(await produtoService.deleteProductService(req.params.id));
    } catch (err) {
        console.log(`erro:${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const addCategoriaProductController = async (req, res) => {
    try {
        req.body.createdAt = new Date();
        const categoria = await produtoService.addCategoriaProductService(req.params.id, req.body);
        res.status(200).send(categoria);
    } catch (err) {
        console.log(`erro:${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const removeCategoriaProductController = async (req, res) => {
    try {
        const categoria = await produtoService.removeCategoriaProductService(req.params.id, req.body);
        res.status(200).send(categoria);
    } catch (err) {
        console.log(`erro:${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

module.exports = {
    findProductByIdController,
    findAllProductController,
    createProductController,
    updateProductController,
    deleteProductController,
    addCategoriaProductController,
    removeCategoriaProductController
}