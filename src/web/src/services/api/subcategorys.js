import http from "../http";

export async function getSubcategorys() {
  const { data } = await http.get("api/SubCategorias");
  return data;
}

export async function createSubcategory(reqData) {
  const form = new FormData();

  for (let key in reqData) {
    form.append(key, reqData[key]);
  }

  const { data } = await http.post("api/SubCategorias", form);
  return data;
}
