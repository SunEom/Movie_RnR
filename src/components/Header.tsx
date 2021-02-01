import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__title">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            Movie R&R 🎬
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
