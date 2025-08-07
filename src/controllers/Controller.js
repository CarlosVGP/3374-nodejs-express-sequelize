class Controler {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  pegaTodos = async (req, res) => {
    try {
      const listaDeRegistros =
        await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal server error", erro: error.message });
    }
  };

  pegaPorId = async (req, res) => {
    const id = req.params.id;
    const registro = await this.entidadeService.pegaRegistroPorId(id);
    if (!registro) {
      res.status(404).json({
        message: "Registro não encontrado",
      });
    }
    await this.entidadeService.excluiRegistro(id);
    res
      .status(200)
      .json({ message: "Registro localizado", registro: registro });
  };

  cadastraDados = async (req, res) => {
    try {
      const resultado = await this.entidadeService.criaRegistro(req.body);
      if (!resultado) {
        res.status(500).json({
          message: "Não foi possivel criar o novo registro no banco",
        });
      }
      res.status(201).json({
        message: "Registro criado com sucesso",
        registro: resultado,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal server error", erro: error.message });
    }
  };

  atualizaDados = async (req, res) => {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const isUpdated = await this.entidadeService.atualizaRegistro(
        dadosAtualizados,
        Number(id)
      );
      if (!isUpdated) {
        res.status(400).json({ message: "Registro não atualizado" });
      }
      res.status(200).json({ message: "Atualizado com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal server error", erro: error.message });
    }
  };

  excluiDados = async (req, res) => {
    const id = req.params.id;

    try {
      await this.entidadeService.excluiRegistro(id);
      res.status(200).json({ message: "Registro excluido com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal server error", erro: error.message });
    }
  };
}

module.exports = Controler;
