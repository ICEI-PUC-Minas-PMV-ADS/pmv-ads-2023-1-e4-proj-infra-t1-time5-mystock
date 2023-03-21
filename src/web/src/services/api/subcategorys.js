import http from "../http";

export async function getSubCategorys() {
  const { data } = await http.get("api/SubCategorias");
  return data;
}

export async function createSubcategory(reqData) {
  const { data } = await http.post("api/SubCategorias", reqData);
  return data;
}
