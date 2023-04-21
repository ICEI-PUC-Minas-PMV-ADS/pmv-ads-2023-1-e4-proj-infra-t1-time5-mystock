import productsModel from "../models/products.js";

class ProductsController {
  static getProducts = (req, res) => {
    productsModel.find().exec((err, products) => {
      if (err) {
        res.status(500).send({ message: "Erro ao retornar produtos" });
      } else {
        res.status(201).send(products);
      }
    });
  };

  static registerProducts = (req, res) => {
    const product = new productsModel(req.body);

    product.save((err) => {
      if (err) {
        res.status(500).send({ message: "Erro ao cadastrar produto" });
      } else {
        res.status(201).send(product.toJSON());
      }
    });
  };
}

export default ProductsController;
