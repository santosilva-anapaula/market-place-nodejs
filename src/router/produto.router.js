const router = require("express").Router();

const produtoController = require("../controller/produto.controller");

const authMiddleware = require("../middleware/auth.middleware");

//rotas get
router.get("/find/:id", authMiddleware, produtoController.findProductByIdController);
router.get("/findAll", authMiddleware, produtoController.findAllProductController);

//rotas post
router.post("/create", authMiddleware, produtoController.createProductController);
router.post("/addCategoria/:id", authMiddleware, produtoController.addCategoriaProductController);

//rotas put
router.put("/update/:id", authMiddleware, produtoController.updateProductController);

//rotas delete
router.delete("/delete/:id", authMiddleware, produtoController.deleteProductController);
router.delete("/removeCategoria/:id", authMiddleware, produtoController.removeCategoriaProductController);

module.exports = router;