import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import logo from '../logo.svg';
import './App.scss';
import HomePage from './HomePage';
import NavBar from './NavBar';
import Regimen from './shop/Regimen';
import Shop from './shop/Shop';
import CategoryPage from './shop/CategoryPage';
import ProductPage from './shop/ProductPage';
import Adaptogens from './Adaptogens';
import CartPage from './cart/CartPage';
import AccountPage from './account/AccountPage';
import CheckoutPage from './cart/CheckoutPage';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/adaptogens' element={<Adaptogens />} />
        <Route path='/my-account' element={<AccountPage  />} />
        <Route path='/regimen' element={<Regimen />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/cart' element={<CartPage />} />
        <Route path='/shop/product/:product' element={<ProductPage />} />
        <Route path='/shop/:category' element={<CategoryPage />} />
        </Routes>
  </BrowserRouter>
  );
}

export default App;
