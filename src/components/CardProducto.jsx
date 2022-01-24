import React from 'react';

const CardProducto = ({ nombre, descripcion, precio }) => (
  <div className='flex flex-col bg-gray-700 m-4 rounded-lg p-3 text-white shadow-lg hover:bg-green-900 cursor-pointer'>
    <div>
      <span className='font-extrabold'>Nombre:</span>
      <span> {nombre}</span>
    </div>
    <div>
      <span className='font-extrabold'>Descripcion:</span>
      <span> {descripcion}</span>
    </div>
    <div>
      <span className='font-extrabold'>Precio:</span>
      <span> {precio}</span>
    </div>
  </div>
);

export default CardProducto;
