const { Router } = require("express");
const CursoController = require("../controllers/CursoController.js");

const cursoController = new CursoController();

const router = Router();
router
  .get("/cursos", cursoController.pegaTodos)
  .get("/cursos/:id", cursoController.pegaPorId)
  .post("/cursos", cursoController.cadastraDados)
  .put("/cursos/:id", cursoController.atualizaDados)
  .delete("/cursos/:id", cursoController.excluiDados);

module.exports = router;
