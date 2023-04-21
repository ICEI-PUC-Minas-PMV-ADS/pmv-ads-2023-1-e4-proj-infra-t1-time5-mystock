import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
  nome: { type: String },
  quantidade: { type: Number },
  data_registro: { type: Date },
});

const productsModel = mongoose.model("products", productsSchema);

export default productsModel;
