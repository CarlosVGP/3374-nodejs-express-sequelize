const { Router } = require("express");
const CategoriaController = require("../controllers/CategoriaController.js");

const categoriaController = new CategoriaController();

const router = Router();
router
  .get("/categorias", categoriaController.pegaTodos)
  .get("/categorias/:id", categoriaController.pegaPorId)
  .post("/categorias", categoriaController.cadastraDados)
  .put("/categorias/:id", categoriaController.atualizaDados)
  .delete("/categorias/:id", categoriaController.excluiDados);

module.exports = router;
