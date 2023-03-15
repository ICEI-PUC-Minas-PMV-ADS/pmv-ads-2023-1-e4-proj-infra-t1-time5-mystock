import http from "../http";

export async function getCategorys() {
  const { data } = await http.get("api/Categorias");
  return data;
}

export async function createCategory(reqData) {
  const form = new FormData();

  for (let key in reqData) {
    form.append(key, reqData[key]);
  }
  const { data } = await http.post("api/Categorias", reqData);
  return data;
}
