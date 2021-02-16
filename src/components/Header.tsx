import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Searchbar from '../container/Searchbar';

type HeaderProps = {
  user: any;
  onClick: any;
  onLogout: any;
};

const Header = ({ user, onClick, onLogout }: HeaderProps) => {
  const history = useHistory();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const navItemLink = 'px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75';

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-dark mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="header text-xl font-medium leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white font-MyFont"
              to="/"
            >
              Movie R&R 🎬
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <Searchbar />

          {user ? (
            <div className={'lg:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')} id="example-navbar-danger">
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link className={navItemLink} to="/profile">
                    <i className="fas fa-user-cog text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">My page</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={navItemLink} to="/create">
                    <i className="far fa-plus-square text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Posting</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className={navItemLink}
                    onClick={() => {
                      onClick(onLogout);
                      history.push({
                        pathname: '/',
                      });
                    }}
                  >
                    <i className="fas fa-sign-out-alt text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Log out</span>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className={'lg:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')} id="example-navbar-danger">
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link className={navItemLink} to="/login">
                    <i className="fas fa-sign-in-alt text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Log in</span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
