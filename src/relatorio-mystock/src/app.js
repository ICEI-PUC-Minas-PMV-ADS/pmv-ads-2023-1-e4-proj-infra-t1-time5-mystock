import express from "express";
import db from "./config/dbConnection.js";
import routes from "./routes/index.js";

db.on(
  "error",
  console.log.bind(console, "Erro de conexão com o banco de dados")
);
db.once("open", () => {
  console.log("Sucesso! Conectado ao mongo db");
});

const app = express();

routes(app);

export default app;
