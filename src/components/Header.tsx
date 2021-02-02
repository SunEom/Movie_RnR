import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <header className="header flex justify-center py-9 items-center">
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <div className="text-4xl">Movie R&R 🎬</div>
        </Link>
      </header>
    </>
  );
};

export default Header;
