import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import logo from '../logo.svg';
import './App.scss';
import HomePage from './HomePage';
import NavBar from './NavBar';
import Regimen from './Regimen';
import Shop from './Shop';
import CategoryPage from './CategoryPage';
import ProductPage from './ProductPage';
import Adaptogens from './Adaptogens';
import Cart from './Cart';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/adaptogens' element={<Adaptogens />} />
        <Route path='/regimen' element={<Regimen />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/cart' element={<Cart />} />
        <Route path='/shop/product/:product' element={<ProductPage />} />
        <Route path='/shop/:category' element={<CategoryPage />} />
        </Routes>
  </BrowserRouter>
  );
}

export default App;
