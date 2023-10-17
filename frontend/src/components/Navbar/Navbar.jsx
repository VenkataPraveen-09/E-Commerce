import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div className='navbar'>
      <div className="nav-logo">
      <Link to="/"> {/* Wrap the logo with Link */}
          <img src={logo} alt="" />
        </Link>
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        {/* Your menu items */}
        <li onClick={ ()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}}to='/'>shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={ ()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none'}}to='/mens'>mens</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={ ()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none'}}to='/womens'>womens</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={ ()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none'}}to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {isLoggedIn ? (
          <>
            <div className="nav-cart">
              <Link to='/cart'>
                <img src={cart_icon} alt="" />
              </Link>
              <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            <button onClick={handleLogout} >
              Logout
            </button>
          </>
        ) : (
          
          <button >
            <Link to="/login"style={{ textDecoration: 'none' }}>Login</Link>
          </button>
      
        )}
      </div>
    </div>
  );
};

export default Navbar;
