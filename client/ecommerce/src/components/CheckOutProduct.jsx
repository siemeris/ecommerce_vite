import React from "react";
import { useCompra } from "./AppProvider";

const CheckOutProduct = ({ producto }) => {

  const {eliminarProducto} = useCompra()

  return (
    <div className="flex gap-3">
      <div className="w-1/3 flex items-center justify-center">
        <img className="w-auto object-cover m-auto" src={producto.photos[0]} alt=""/>
      </div>
      <div className="w-2/3 p-5">
        <h3 className="text-start text-gray-800 font-bold text-2xl">{producto.title}</h3>
        <p className="text-start text-sm text-violet-700">Envío gratis</p>
        <p className="text-start text-sm text-violet-700">Cantidad: {producto.cantidad}</p>
        <p className="text-start text-sm text-violet-700">Stock</p>
        <p className="text-start text-md text-gray-800">Negro</p>
        <div className="w-20 flex justify-center content-center items-center gap-1 hover:cursor-pointer">
          <p onClick={() => eliminarProducto(producto)} className="underline text-red-500" >Eliminar</p>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
        </div>
        <p className="text-end font-bold text-2xl text-gray-800">${producto.price}</p>
      </div>
    </div>
  );
};
export default CheckOutProduct;
