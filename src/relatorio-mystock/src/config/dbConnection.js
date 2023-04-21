import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://artthurroccha:Art9886@mystock.2g67zaz.mongodb.net/Relatorio-mystock?"
);

let db = mongoose.connection;

export default db;
