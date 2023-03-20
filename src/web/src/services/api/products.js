import http from "../http";

export async function getProducts() {
  const { data } = await http.get("api/Produtos");
  return data;
}

export async function createProducts(reqData) {
  const form = new FormData();

  for (let key in reqData) {
    form.append(key, reqData[key]);
  }

  const { data } = await http.post("api/Products", form);
  return data;
}
