import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDarkMode } from 'context/darkMode';

const PublicLayout = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar />
      <div className={`h-full ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default PublicLayout;
