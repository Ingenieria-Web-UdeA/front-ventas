/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const NuevaVenta = () => {
  const [clienteSeleccionado, setClienteSeleccionado] = useState('');
  const [productoSeleccionado, setProductoSeleccionado] = useState('');
  const [cantidadProducto, setCantidadProducto] = useState(0);
  const [total, setTotal] = useState(0);

  const [opcionesClientes, setOpcionesClientes] = useState([]);
  const [opcionesProductos, setOpcionesProductos] = useState([]);
  useEffect(() => {
    const obtenerClientes = async () => {
      const optionsRequestClientes = {
        method: 'GET',
        url: 'http://localhost:4000/clientes',
        headers: { 'Content-Type': 'application/json' },
      };

      const respuestaClientes = await axios.request(optionsRequestClientes);
      const opciones = respuestaClientes.data.clientes.map((cliente) => ({
        value: cliente.id,
        label: cliente.correo,
      }));
      setOpcionesClientes(opciones);

      const optionsRequestProductos = {
        method: 'GET',
        url: 'http://localhost:4000/productos',
        headers: { 'Content-Type': 'application/json' },
      };
      const respuestaProductos = await axios.request(optionsRequestProductos);
      const opcionesProd = respuestaProductos.data.productos.map(
        (producto) => ({
          value: producto.id,
          label: producto.nombre,
          precio: producto.precio,
        })
      );
      setOpcionesProductos(opcionesProd);
    };

    obtenerClientes();
  }, []);

  useEffect(() => {
    if (productoSeleccionado.precio) {
      setTotal(productoSeleccionado.precio * cantidadProducto);
    }
  }, [cantidadProducto, productoSeleccionado]);

  const crearVenta = async () => {
    console.log('producto', productoSeleccionado);
    console.log('cliente', clienteSeleccionado);
    console.log('cantidad', cantidadProducto);

    const optionsPost = {
      method: 'POST',
      url: 'http://localhost:4000/ventas',
      headers: { 'Content-Type': 'application/json' },
      data: {
        producto: productoSeleccionado.value,
        cliente: clienteSeleccionado.value,
        cantidad: cantidadProducto,
        total,
      },
    };
    await axios.request(optionsPost);
  };

  return (
    <div className='p-10 flex flex-col'>
      <h1>Creacion de Nueva Venta</h1>
      <div className='my-2'>
        <span>Seleccione el Cliente</span>
        <Select
          options={opcionesClientes}
          onChange={(e) => setClienteSeleccionado(e)}
        />
      </div>
      <div className='my-2'>
        <span>Seleccione el Producto</span>
        <Select
          options={opcionesProductos}
          onChange={(e) => setProductoSeleccionado(e)}
        />
      </div>
      <div>
        <label htmlFor='cantidad'>
          <span>Cantidad Vendida</span>
          <input
            value={cantidadProducto}
            onChange={(e) => {
              setCantidadProducto(e.target.value);
            }}
            name='cantidad'
            type='number'
            placeholder='150'
          />
        </label>
      </div>
      <span>Total Venta: ${total}</span>
      <button type='button' className='button-submit' onClick={crearVenta}>
        Confirmar Venta
      </button>
    </div>
  );
};

export default NuevaVenta;
