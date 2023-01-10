import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/24/outline';
import { ReactComponent as HomeIcon } from '../assets/icons/Home.svg';
import { ReactComponent as CartIcon } from '../assets/icons/cart.svg';
import { ReactComponent as TransactionIcon } from '../assets/icons/Transactions.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/Settings.svg';
import { ReactComponent as DisconnectIcon } from '../assets/icons/Disconnect.svg';
import { ReactComponent as CloseLeftNav } from '../assets/icons/CloseLeftNav.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/Search.svg';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Layout = () => {
  return (
    <div className={''}>
      <Disclosure as="nav" className="fixed">
        <div className={'md:fixed md:block hidden'}>
          <div className={'w-screen  z-20 flex items-start'}>
            <div className={'h-screen bg-[#FFFFFF] border-r border-semiwhite w-[200px]'}>
              <div className="h-[100px] flex items-center border-b border-semiwhite px-8">
                <img src={Logo} className={'object-cover'} alt="" />
              </div>
              <div className="px-8 py-6 space-y-6">
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
              </div>
            </div>
            <div
              className={
                'pl-6 py- pr-8 h-[100px] bg-[#FFFFFF] flex items-center w-full justify-between border-b border-semiwhite'
              }>
              <div className={'flex items-center'}>
                <CloseLeftNav />
                <form className={'relative ml-6'}>
                  <input
                    type="search"
                    placeholder={'Rechercher'}
                    className={
                      'border border-semiwhite rounded-default py-[10px] px-[10px] shadow '
                    }
                  />
                  <SearchIcon className={'absolute top-[13px] right-[13px]'} />
                </form>
              </div>
              <div className={'flex'}>
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}>
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}>
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}>
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}>
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </Disclosure>
      <div className={'md:ml-[240px] md:pt-[120px]  ml-8 mr-8 py-8'}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
