const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");
const MatriculaController = require("../controllers/MatriculaController.js");

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();
router
  .get("/pessoas", pessoaController.pegaTodos)
  .get("/pessoas/ativas", pessoaController.pegaTodasPessoas)
  .get("/pessoas/desativadas", pessoaController.pegaTodasPessoasDesabilitadas)
  .get("/pessoas/:id", pessoaController.pegaPorId)
  .post("/pessoas", pessoaController.cadastraDados)
  .put("/pessoas/:id", pessoaController.atualizaDados)
  .delete("/pessoas/:id", pessoaController.excluiDados)
  .get("/pessoas/:estudanteId/matriculas", pessoaController.pegaMatriculas)
  .post("/pessoas/:estudanteId/matriculas", matriculaController.cadastraDados);

module.exports = router;
