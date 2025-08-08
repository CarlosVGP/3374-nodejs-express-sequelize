const dataSource = require("../database/models");

class Services {
  constructor(model) {
    this.model = model;
  }

  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
  }

  async pegaRegistroPorEscopo(escopo) {
    return dataSource[this.model].scope(escopo).findAll();
  }

  async pegaRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async criaRegistro(reqQuery) {
    return dataSource[this.model].create(reqQuery);
  }

  async atualizaRegistro(reqQuery, id) {
    const registroAtualizados = dataSource[this.model].update(reqQuery, {
      where: { id: id },
    });
    if (registroAtualizados[0] == 0) {
      return false;
    }
    return true;
  }

  async excluiRegistro(id) {
    return dataSource[this.model].destroy({ where: { id: id }, force: true });
  }
}

module.exports = Services;
