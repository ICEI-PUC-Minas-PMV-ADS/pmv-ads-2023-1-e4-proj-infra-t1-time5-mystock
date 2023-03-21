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

export async function getCategoryById(query) {
  const id = query.queryKey[1];
  const { data } = await http.get(`api/Categorias/${id}`);
  return data;
}

export async function editCategory(reqData) {
  const { data } = await http.put(`api/Categorias/${reqData.id}`, reqData);
  return data;
}

export async function deleteCategory(reqData) {
  const { data } = await http.delete(`api/Categorias/${reqData.id}`);
  return data;
}
