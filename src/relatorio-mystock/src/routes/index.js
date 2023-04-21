import express from "express";
import cors from "cors";
import products from "./productsRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ message: "Página inicial" });
  });

  app.use(express.json(), cors(), products);
};

export default routes;
