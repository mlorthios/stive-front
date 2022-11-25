import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav className={'mb-6'}>
        <ul>
          <Link to={'/'}>
            <li>Accueil</li>
          </Link>
          <Link to={'/products'}>
            <li>Produit</li>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
