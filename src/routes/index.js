const express = require("express");
const pessoas = require("./pessoasRoutes.js");
const categorias = require("./categoriasRoutes.js");
const matriculas = require("./matriculasRoutes.js");
const cursos = require("./cursosRoutes.js");

const routes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send("Boas vindas a API");
  });
  app.use(express.json(), pessoas, categorias, cursos, matriculas);
};

module.exports = routes;
