import axios from 'axios';
import useFormData from 'hooks/useFormData';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const NuevoProducto = () => {
  const navigate = useNavigate();
  const { form, formData, updateFormData } = useFormData();

  const submitForm = async (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      url: 'http://localhost:4000/productos',
      headers: { 'Content-Type': 'application/json' },
      data: formData,
    };
    try {
      const respuestaAxios = await axios.request(options);
      // eslint-disable-next-line no-console
      console.log(respuestaAxios);
      toast.success(
        `El producto se creó con éxito con el id ${respuestaAxios.data.producto.id}`,
        {
          position: 'bottom-center',
        }
      );
      form.current.reset();
      navigate('/productos');
    } catch {
      toast.error('Error creando el producto', { position: 'bottom-center' });
    }
    // eslint-disable-next-line no-console
  };
  return (
    <div className='h-full flex flex-col items-center justify-start'>
      <div className='self-start m-6'>
        <Link to='/productos'>
          <i className='fas fa-arrow-left hover:text-indigo-500 text-xl' />
        </Link>
      </div>
      <h1 className='text-3xl text-gray-800 my-6'>Nuevo Producto</h1>
      <form ref={form} onChange={updateFormData} onSubmit={submitForm}>
        <div className='flex flex-col'>
          <label htmlFor='nombre'>
            <span>Nombre del Producto</span>
            <input name='nombre' type='text' placeholder='El Mejor Producto' />
          </label>
          <label htmlFor='descripcion'>
            <span>Descripción del Producto</span>
            <input
              name='descripcion'
              type='text'
              placeholder='La mejor descripcion'
            />
          </label>
          <label htmlFor='precio'>
            <span>Precio del Producto</span>
            <input name='precio' type='number' placeholder='10000' />
          </label>
          <button type='submit' className='button-submit'>
            Crear Producto
          </button>
        </div>
      </form>
    </div>
  );
};

export default NuevoProducto;
