import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductManagement from "./pages/products/management";
import BaseApplication from "./pages/baseApplication";
import CategoryManagement from "./pages/categorys/management";
import Login from "./pages/login";
import SignIn from "./pages/signIn";
import EditProducts from "./pages/products/edit";
import EditCategorys from "./pages/categorys/edit";
import SubcategorysManagement from "./pages/subcategorys/management";
import RegisterProduct from "./pages/products/register";
import RegisterCategorys from "./pages/categorys/register";
import RegisterSubCategorys from "./pages/subcategorys/register";
import EditSubcategorys from "./pages/subcategorys/edit";
import EditUser from "./pages/user";
import ReportsProducts from "./pages/reportProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/" element={<BaseApplication />}>
          <Route path="products" element={<ProductManagement />}></Route>
          <Route path="categorys" element={<CategoryManagement />} />
          <Route
            path="subcategorys"
            element={<SubcategorysManagement />}
          ></Route>
          <Route path="products/register" element={<RegisterProduct />} />
          <Route path="categorys/register" element={<RegisterCategorys />} />
          <Route
            path="subcategorys/register"
            element={<RegisterSubCategorys />}
          />
          <Route path="products/edit/:id" element={<EditProducts />} />
          <Route path="categorys/edit/:id" element={<EditCategorys />} />
          <Route
            path="subcategorys/edit/:id"
            element={<EditSubcategorys />}
          ></Route>
          <Route path="user" element={<EditUser />} />
          <Route path="/products/report" element={<ReportsProducts />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
