/* eslint-disable no-console */
import axios from 'axios';
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import useFormData from 'hooks/useFormData';
import { useDarkMode } from 'context/darkMode';
import { useDialog } from 'context/dialog';

const CardProducto = ({ id, nombre, descripcion, precio, setLoading }) => {
  const { darkMode } = useDarkMode();
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const eliminarProducto = async () => {
    console.log('producto', id);
    const options = {
      method: 'DELETE',
      url: 'http://localhost:4000/productos',
      headers: { 'Content-Type': 'application/json' },
      data: { id },
    };
    await axios.request(options);
    setLoading(true);
  };

  const closeModal = () => {
    setOpenEditDialog(false);
    setLoading(true);
  };
  return (
    <div
      className={`flex flex-col ${
        darkMode
          ? 'bg-gray-50 text-gray-700 hover:bg-green-300'
          : 'bg-gray-700 text-white hover:bg-green-900'
      } m-4 rounded-lg p-3  shadow-lg  w-96`}
    >
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
      <div>
        <button type='button' onClick={() => setOpenEditDialog(true)}>
          <i className='fas fa-pen text-yellow-500 cursor-pointer m-2' />
        </button>
        <button
          type='button'
          onClick={() => {
            eliminarProducto();
          }}
        >
          <i className='fas fa-trash text-red-500 cursor-pointer m-2' />
        </button>
      </div>
      <Dialog
        open={openEditDialog}
        onClose={() => {
          setOpenEditDialog(false);
        }}
      >
        <FormEditProducto
          closeModal={closeModal}
          producto={{ nombre, descripcion, precio }}
          id={id}
        />
      </Dialog>
    </div>
  );
};

const FormEditProducto = ({ producto, id, closeModal }) => {
  const { form, updateFormData, formData } = useFormData();
  const { setOpenDialog } = useDialog();
  const submitForm = async (e) => {
    e.preventDefault();
    console.log(formData, id);
    const datosEditados = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== producto[key].toString()) {
        datosEditados[key] = formData[key];
      }
    });

    console.log('datos editados', datosEditados);

    const options = {
      method: 'PUT',
      url: 'http://localhost:4000/productos',
      headers: { 'Content-Type': 'application/json' },
      data: { id, datosEditados },
    };
    await axios.request(options);
    console.log('edit finished');
    closeModal();
  };
  return (
    <div className='p-10'>
      <button
        type='button'
        onClick={() => {
          setOpenDialog(true);
        }}
      >
        Abrir Dialogo
      </button>
      <form ref={form} onChange={updateFormData} onSubmit={submitForm}>
        <div className='flex flex-col'>
          <label htmlFor='nombre'>
            <span>Nombre del Producto</span>
            <input
              defaultValue={producto.nombre}
              name='nombre'
              type='text'
              placeholder='El Mejor Producto'
            />
          </label>
          <label htmlFor='descripcion'>
            <span>Descripción del Producto</span>
            <input
              defaultValue={producto.descripcion}
              name='descripcion'
              type='text'
              placeholder='La mejor descripcion'
            />
          </label>
          <label htmlFor='precio'>
            <span>Precio del Producto</span>
            <input
              defaultValue={producto.precio}
              name='precio'
              type='number'
              placeholder='10000'
            />
          </label>
          <button type='submit' className='button-submit'>
            Editar Producto
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardProducto;
