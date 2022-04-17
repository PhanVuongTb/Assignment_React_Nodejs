import { useEffect, useState } from 'react'
import './App.css'

import { Navigate, Route, Routes } from 'react-router-dom'
import AdminLayount from './Pages/Layout/AdminLayount';
import ListProduct from './Pages/Admin/Products/ListProduct';
import WebsiteLayount from './Pages/Layout/WebsiteLayount';
import HomePage from './Pages/Website/HomePage';
import News from './Pages/Website/News';
import Products from './Pages/Website/Products';
import ProductDetail from './Pages/Website/ProductDetail';
import AddProduct from './Pages/Admin/Products/AddProduct';
import Signin from './Pages/Website/Signin';
import Signup from './Pages/Website/Signup';
import ListCategory from './Pages/Admin/Category/ListCategory';
import Dashboard from './Components/Admin/Dashboard';
import EditProduct from './Pages/Admin/Products/EditProduct';
import AddCategory from './Pages/Admin/Category/AddCategory';
import EditCategory from './Pages/Admin/Category/EditCategory';
import Cart from './Pages/Website/Cart';
import Bill from './Pages/Website/Bill';
import Ntfcation from './Pages/Website/Ntfcation';
import Contact from './Pages/Website/Contact';
import PrivateRouter from './Components/PrivateRouter';
import Search from './Pages/Website/Search';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayount />}>
          <Route index element={<HomePage />} />
          <Route path='products' element={<Products />} />
          <Route path='news' element={<News />} />
          <Route path='cart' element={<Cart />} />
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
          <Route path='contact' element={<Contact />} />
          <Route path="search/:key" element={<Search />} />
          <Route path='productdetail/:id' element={<ProductDetail />} />
          <Route path='productdetail/:id/cart' element={<Cart />} />
          <Route path='productdetail/:id/cart/bill' element={<Bill />} />
          <Route path='productdetail/cart/bill/notification' element={<Ntfcation />} />
        </Route>
        <Route path='admin' element={<PrivateRouter><AdminLayount /></PrivateRouter>}>
          <Route index element={<Dashboard />} />

          <Route path='products' >
            <Route index element={<ListProduct />} />
            <Route path='add' element={<AddProduct />} />
            <Route path=':id/edit' element={<EditProduct />} />
          </Route>
          <Route path='category'>
            <Route index element={<ListCategory />} />
            <Route path='add' element={<AddCategory />} />
            <Route path=':id/edit' element={<EditCategory />} />
          </Route>
        </Route>




      </Routes>



    </div>
  )
}

export default App
