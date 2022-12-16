import React from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../assets/icons/Home.svg';
import { ReactComponent as CartIcon } from '../assets/icons/cart.svg';
import { ReactComponent as TransactionIcon } from '../assets/icons/Transactions.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/Settings.svg';
import { ReactComponent as DisconnectIcon } from '../assets/icons/Disconnect.svg';

const Layout = () => {
  return (
    <div className={'mt-14'}>
      <nav className={'fixed space-y-6 w-[140px] px-5'}>
        <div className={'flex space-x-3 items-center'}>
          <HomeIcon className={'w-8'} />
          <a className={'font-bold'}>Accueil</a>
        </div>
        <div className={'flex space-x-3 items-center'}>
          <CartIcon className={'w-8'} />
          <a>Produits</a>
        </div>
        <div className={'flex space-x-3 items-center'}>
          <TransactionIcon className={'w-8'} />
          <a>Commandes</a>
        </div>
        <div className={'flex space-x-3 items-center'}>
          <SettingsIcon className={'w-8'} />
          <a>Paramètres</a>
        </div>
        <div className={'flex space-x-3 items-center'}>
          <DisconnectIcon className={'w-8'} />
          <a>Déconnexion</a>
        </div>
      </nav>
      <div className={'ml-[160px]'}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
