const router = require("express").Router();

const carrinhoController = require("../controller/carrinho.controller");

const authMiddleware = require ("../middleware/auth.middleware");

router.get("/find/:id", authMiddleware, carrinhoController.findCarrinhoByIdController);
router.get("/findAll", authMiddleware, carrinhoController.findAllCarrinhoController);

router.post("/create", authMiddleware, carrinhoController.createCarrinhoController);

router.put("/update/:id", authMiddleware, carrinhoController.updateCarrinhoController);

router.delete("/delete/:id", authMiddleware, carrinhoController.deleteCarrinhoController);

module.exports = router;