import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductManagement from "./pages/products/management";
import BaseApplication from "./pages/baseApplication";
import CategoryManagement from "./pages/categorys/management";
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseApplication />}>
          <Route path="products" element={<ProductManagement />} />
          <Route path="categorys" element={<CategoryManagement />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
