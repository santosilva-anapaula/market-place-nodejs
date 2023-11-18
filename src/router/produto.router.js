const router = require("express").Router();

const produtoController = require("../controller/produto.controller");

const authMiddleware = require("../middleware/auth.middleware");
const { validaProduto, validaIdParams, valida_IdBody } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

//rotas get
router.get("/find/:id", authMiddleware, validaIdParams, produtoController.findProductByIdController);
router.get("/findAll", authMiddleware, paginacao, produtoController.findAllProductController);

//rotas post
router.post("/create", authMiddleware, validaProduto, produtoController.createProductController);
router.post("/addCategoria/:id", authMiddleware, validaIdParams, valida_IdBody, produtoController.addCategoriaProductController);

//rotas put
router.put("/update/:id", authMiddleware, validaIdParams, validaProduto, produtoController.updateProductController);

//rotas delete
router.delete("/delete/:id", authMiddleware, validaIdParams, produtoController.deleteProductController);
router.delete("/removeCategoria/:id", authMiddleware, validaIdParams, produtoController.removeCategoriaProductController);

module.exports = router;