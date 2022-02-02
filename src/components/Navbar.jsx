import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'img/logo.svg';
import { useDarkMode } from 'context/darkMode';

const Navbar = () => {
  const [showResponsiveNavbar, setShowResponsiveNavbar] = useState(false);
  return (
    <div className='flex w-full'>
      <div className='p-2 md:hidden'>
        <button
          type='button'
          onClick={() => {
            setShowResponsiveNavbar(!showResponsiveNavbar);
          }}
        >
          <i className='fas fa-bars' />
        </button>
        {showResponsiveNavbar && (
          <nav className='flex items-center bg-indigo-700'>
            <ul className='flex flex-col p-3'>
              <LinkNavegacion texto='Inicio' ruta='/' />
              <LinkNavegacion texto='Nueva Venta' ruta='/ventas/nueva' />
              <LinkNavegacion texto='Nuevo Cliente' ruta='/clientes/nuevo' />
              <LinkNavegacion texto='Productos' ruta='/productos' />
            </ul>
          </nav>
        )}
      </div>
      <NavbarBig />
    </div>
  );
};

const NavbarBig = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <nav
      className={`hidden w-full md:flex items-center  ${
        darkMode ? 'bg-black' : 'bg-indigo-700'
      }`}
    >
      <img className='mx-2 h-16' src={logo} alt='Logo React' />
      <ul className='flex'>
        <LinkNavegacion texto='Inicio' ruta='/' />
        <LinkNavegacion texto='Nueva Venta' ruta='/ventas/nueva' />
        <LinkNavegacion texto='Nuevo Cliente' ruta='/clientes/nuevo' />
        <LinkNavegacion texto='Productos' ruta='/productos' />
      </ul>
      <button
        className={`${darkMode ? 'text-white' : 'text-gray-200'}`}
        type='button'
        onClick={() => {
          // eslint-disable-next-line no-console
          setDarkMode(!darkMode);
        }}
      >
        Enable dark mode
      </button>
    </nav>
  );
};

const LinkNavegacion = ({ texto, ruta }) => (
  <li>
    <NavLink
      className={({ isActive }) =>
        isActive ? 'linkNavegacionActivo' : 'linkNavegacionInactivo'
      }
      to={ruta}
    >
      {texto}
    </NavLink>
  </li>
);

export default Navbar;
