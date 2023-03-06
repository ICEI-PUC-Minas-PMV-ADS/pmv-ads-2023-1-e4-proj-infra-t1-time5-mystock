import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductManagement from './pages/products/management'
import BaseApplication from './pages/baseApplication'
import CategoryManagement from './pages/categorys/management'
import Login from './pages/login'
import SignIn from './pages/signIn'
import EditProducts from './pages/products/edit'
import EditCategorys from './pages/categorys/edit'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseApplication />}>
          <Route path="products" element={<ProductManagement />}></Route>
          <Route path="categorys" element={<CategoryManagement />} />
          <Route path="products/edit/:id" element={<EditProducts />} />
          <Route path="categorys/edit/:id" element={<EditCategorys />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
