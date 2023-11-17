const router = require("express").Router();

const produtoController = require("../controller/produto.controller");

const authMiddleware = require("../middleware/auth.middleware");
const { validaProduto, validaId } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

//rotas get
router.get("/find/:id", authMiddleware, validaId, produtoController.findProductByIdController);
router.get("/findAll", authMiddleware, paginacao, produtoController.findAllProductController);

//rotas post
router.post("/create", authMiddleware, validaProduto, produtoController.createProductController);
router.post("/addCategoria/:id", authMiddleware, validaId, produtoController.addCategoriaProductController);

//rotas put
router.put("/update/:id", authMiddleware, validaId, validaProduto, produtoController.updateProductController);

//rotas delete
router.delete("/delete/:id", authMiddleware, validaId, produtoController.deleteProductController);
router.delete("/removeCategoria/:id", authMiddleware, validaId, produtoController.removeCategoriaProductController);

module.exports = router;