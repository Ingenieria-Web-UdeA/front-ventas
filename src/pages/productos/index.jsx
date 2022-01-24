/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardProducto from 'components/CardProducto';

const IndexProductos = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const obtenerProductos = async () => {
      const options = {
        method: 'GET',
        url: 'http://localhost:4000/productos',
        headers: { 'Content-Type': 'application/json' },
      };
      const respuesta = await axios.request(options);
      setProductos(respuesta.data.productos);
    };
    obtenerProductos();
  }, []);
  return (
    <div>
      Productos
      <div className='flex'>
        {productos.map((producto) => (
          <CardProducto
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
          />
        ))}
      </div>
    </div>
  );
};

export default IndexProductos;