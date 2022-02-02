/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import { DarkModeContext } from 'context/darkMode';
import PublicLayout from 'layouts/PublicLayout';
import NuevoCliente from 'pages/clientes/nuevo';
import Index from 'pages/Index';
import IndexProductos from 'pages/productos';
import NuevoProducto from 'pages/productos/nuevo';
import NuevaVenta from 'pages/ventas/nueva';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dialog } from '@mui/material';
import 'styles/globals.css';
import { DialogContext } from 'context/dialog';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(darkMode);
  }, [darkMode]);
  return (
    <DialogContext.Provider value={{ openDialog, setOpenDialog }}>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PublicLayout />}>
              <Route path='' element={<Index />} />
              <Route path='clientes/nuevo' element={<NuevoCliente />} />
              <Route path='productos' element={<IndexProductos />} />
              <Route path='productos/nuevo' element={<NuevoProducto />} />
              <Route path='ventas/nueva' element={<NuevaVenta />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Dialog
          open={openDialog}
          onClose={() => {
            setOpenDialog(false);
          }}
        >
          <div>Hola</div>
        </Dialog>
      </DarkModeContext.Provider>
    </DialogContext.Provider>
  );
};

export default App;
