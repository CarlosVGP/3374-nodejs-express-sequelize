const database = require("../models");
class PessoaController {
  static async listarTodos(req, res) {
    const pessoas = await database.Pessoa.findAll();
    res.status(200).send(pessoas);
  }
}

module.exports = PessoaController;
