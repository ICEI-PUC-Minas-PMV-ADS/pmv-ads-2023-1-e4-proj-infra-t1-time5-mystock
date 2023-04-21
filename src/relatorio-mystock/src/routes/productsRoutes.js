import express from "express";
import ProductsController from "../controllers/productsController.js";

const products = express.Router();

products
  .get("/products", ProductsController.getProducts)
  .post("/products", ProductsController.registerProducts);

export default products;
