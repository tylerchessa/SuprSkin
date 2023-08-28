import React from 'react';
import './NavBar.scss'; // You can style this component using CSS
import Logo from '../assets/SuprSkin.png'; // Replace with your logo image URL
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const handleAdaptogenClick = () => {
    navigate('/adaptogens')
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleShopClick = () => {
    navigate('/shop')
  }

  const handleMyAccountClick = () => {
    navigate('/my-account')
  }

  const handleCartClick = () => {
    navigate('/shop/cart')
  }

  return (
    <div className="nav-bar">
      <div className='top-bar'>
        <div className='adaptogen-nav' onClick={handleAdaptogenClick}>Adaptogens</div>
      <div className="logo" onClick={handleLogoClick}>
        <img src={Logo} alt="Airbnb Replica" />
      </div>
      <div className='nav-icon-holder'>
        <p className='search-icon nav-icon' onClick={handleShopClick}>s</p>
        <p className='my-account-icon nav-icon' onClick={handleMyAccountClick}>p</p>
        <p className='cart-icon nav-icon' onClick={handleCartClick}>c</p>
      </div>
      </div>
    </div>
  );
}

export default NavBar;
