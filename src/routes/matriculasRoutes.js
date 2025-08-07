const { Router } = require("express");
const MatriculaController = require("../controllers/MatriculaController.js");

const matriculaController = new MatriculaController();

const router = Router();
router
  .get("/matriculas", matriculaController.pegaTodos)
  .get("/matriculas/:id", matriculaController.pegaPorId)
  .post("/matriculas", matriculaController.cadastraDados)
  .put("/matriculas/:id", matriculaController.atualizaDados)
  .delete("/matriculas/:id", matriculaController.excluiDados);

module.exports = router;
