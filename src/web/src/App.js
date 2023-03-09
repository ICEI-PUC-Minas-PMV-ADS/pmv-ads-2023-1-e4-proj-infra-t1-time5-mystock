import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductManagement from "./pages/products/management";
import BaseApplication from "./pages/baseApplication";
import CategoryManagement from "./pages/categorys/management";
import Login from "./pages/login";
import SignIn from "./pages/signIn";
import EditProducts from "./pages/products/edit";
import EditCategorys from "./pages/categorys/edit";
import SubcategorysManagement from "./pages/subcategorys/management";
import RegisterCategorys from "./pages/subcategorys/register";
import EditSubcategorys from "./pages/subcategorys/edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<BaseApplication />}>
          <Route path="products" element={<ProductManagement />}></Route>
          <Route path="categorys" element={<CategoryManagement />} />
          <Route
            path="subcategorys"
            element={<SubcategorysManagement />}
          ></Route>
          <Route path="subcategorys/register" element={<RegisterCategorys />} />
          <Route path="products/edit/:id" element={<EditProducts />} />
          <Route path="categorys/edit/:id" element={<EditCategorys />} />
          <Route
            path="subcategorys/edit/:id"
            element={<EditSubcategorys />}
          ></Route>
        </Route>

        <Route path="register" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
