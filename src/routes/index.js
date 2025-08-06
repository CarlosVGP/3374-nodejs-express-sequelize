const express = require("express");
const pessoas = require("./pessoasRoutes.js");

const routes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send("Boas vindas a API");
  });
  app.use(express.json(), pessoas);
};

module.exports = routes;
