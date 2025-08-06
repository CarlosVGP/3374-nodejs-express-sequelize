const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const pessoaController = new PessoaController();

const router = Router();
router
  .get("/pessoas", pessoaController.pegaTodos)
  .get("/pessoas/:id", pessoaController.pegaPorId)
  .post("/pessoas", pessoaController.cadastraDados)
  .put("/pessoas/:id", pessoaController.atualizaDados)
  .delete("/pessoas/:id", pessoaController.excluiDados);

module.exports = router;
