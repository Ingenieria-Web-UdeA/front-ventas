import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'img/logo.svg';

const Navbar = () => {
  const [showResponsiveNavbar, setShowResponsiveNavbar] = useState(false);
  return (
    <div>
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

const NavbarBig = () => (
  <nav className='hidden md:flex items-center bg-indigo-700'>
    <img className='mx-2 h-16' src={logo} alt='Logo React' />
    <ul className='flex'>
      <LinkNavegacion texto='Inicio' ruta='/' />
      <LinkNavegacion texto='Nueva Venta' ruta='/ventas/nueva' />
      <LinkNavegacion texto='Nuevo Cliente' ruta='/clientes/nuevo' />
      <LinkNavegacion texto='Productos' ruta='/productos' />
    </ul>
  </nav>
);

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
