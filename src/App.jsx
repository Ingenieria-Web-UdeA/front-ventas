import PublicLayout from 'layouts/PublicLayout';
import NuevoCliente from 'pages/clientes/nuevo';
import Index from 'pages/Index';
import IndexProductos from 'pages/productos';
import NuevoProducto from 'pages/productos/nuevo';
import NuevaVenta from 'pages/ventas/nueva';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'styles/globals.css';

const App = () => (
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
);

export default App;
