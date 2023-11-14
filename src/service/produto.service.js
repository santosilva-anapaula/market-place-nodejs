const Produto = require("../model/Produto");

const findProductByIdService = (id) => {
    return Produto.findById(id);
};

const findAllProductService = () => {
    return Produto.find();
};

const createProductService = (body) => {
    return Produto.create(body);
};

const updateProductService = (id, body) => {
    return Produto.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deleteProductService = (id) => {
    return Produto.findByIdAndDelete(id);
};

const addCategoriaProductService = (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                categoria: {
                    _id: id,
                    createdAt: categoria.createdAt
                },
            },
        },
        {
            rawResult: true,
        }
    );
};

const removeCategoriaProductService = (categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: categoria.id,
        },
        {
            $pull: {
                categoria: {
                    _id: categoria.id,
                },
            },
        },
        {
            rawResult: true,
        },
    );
};

module.exports = {
    findProductByIdService,
    findAllProductService,
    createProductService,
    updateProductService,
    deleteProductService,
    addCategoriaProductService,
    removeCategoriaProductService
}