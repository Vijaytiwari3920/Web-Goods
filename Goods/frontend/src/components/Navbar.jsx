import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, Store, ChevronDown, LogOut } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('userInfo');
    if (user) {
      setUserInfo(JSON.parse(user));
    }
  }, []);

  const handleSubCategoryClick = (category, subCategory) => {
    navigate(`/category/${category}?sub=${subCategory}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setUserInfo(null);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="brand">
          <Store className="brand-icon" />
          <span>JVS Mart</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/category/food" className="nav-link">Food</Link>
          
          <div className="nav-item-dropdown">
            <Link to="/category/fashion" className="nav-link dropdown-toggle">
              Fashion <ChevronDown size={14} />
            </Link>
            <div className="dropdown-menu">
              <span onClick={() => handleSubCategoryClick('fashion', 'Men')}>Men</span>
              <span onClick={() => handleSubCategoryClick('fashion', 'Women')}>Women</span>
              <span onClick={() => handleSubCategoryClick('fashion', 'Kids')}>Kids</span>
            </div>
          </div>

          <Link to="/category/grocery" className="nav-link">Grocery</Link>

          <div className="nav-item-dropdown">
            <Link to="/category/electronics" className="nav-link dropdown-toggle">
              Electronics <ChevronDown size={14} />
            </Link>
            <div className="dropdown-menu">
              <span onClick={() => handleSubCategoryClick('electronics', 'Mobile')}>Mobile</span>
              <span onClick={() => handleSubCategoryClick('electronics', 'PCs')}>PCs</span>
              <span onClick={() => handleSubCategoryClick('electronics', 'Accessories')}>Accessories</span>
            </div>
          </div>

          <Link to="/category/beauty" className="nav-link">Beauty</Link>
          <Link to="/category/sports" className="nav-link">Sports</Link>
        </div>

        <div className="nav-actions">
          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
          
          {userInfo ? (
            <div className="nav-item-dropdown">
              <div className="action-btn dropdown-toggle" style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                {userInfo.name.split(' ')[0]} <ChevronDown size={14} />
              </div>
              <div className="dropdown-menu dropdown-menu-right">
                <span onClick={() => navigate('/profile')}>Profile</span>
                <span onClick={handleLogout} style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <LogOut size={14} /> Logout
                </span>
              </div>
            </div>
          ) : (
            <Link to="/login" className="action-btn">
              <User size={20} />
            </Link>
          )}

          <Link to="/cart" className="action-btn cart-btn">
            <ShoppingCart size={20} />
            <span className="cart-badge">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
