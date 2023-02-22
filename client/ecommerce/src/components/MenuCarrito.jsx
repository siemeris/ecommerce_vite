import React from "react";
import { Link } from "react-router-dom";

const MenuCarrito = ({ setMenuCarritoVisible, menuCarritoVisible }) => {


  return (
    <div className="right-0 bottom-0 w-4/5 h-screen z-30 bg-blue-100 pt-7 fixed overflow-auto">

      
        {/* Titulo */}
       <div className="w-full flex justify-between content-center border-b pb-5 border-gray-300">
          <h3 className="w-4/5 text-gray-400 text-start uppercase font-bold m-auto">
            Carrito
          </h3>
          <svg className="w-5 h-5 m-auto hover:cursor-pointer  transition hover:text-red-600" onClick={() => setMenuCarritoVisible(!menuCarritoVisible)}fill="none"viewBox="0 0 24 24"strokeWidth="1.5"stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
       </div>
        {/* Contenedor de toda la lista de productos del carrito */}
          <div className="w-full overflow min-h-screen absolute z-50 bg-white">
        {/* Producto */}
            <div className="flex border-b border-gray-300 pb-5">
            
              <img className="object-contain w-1/3" src="../public/img/parlante.png" alt=""/>
              <div className="w-2/3 p-5">
                <div>
                  <h3 className="text-start text-gray-800 font-bold text-sm">
                  Parlante Awei
                  </h3>
                  <p className="text-start text-sm text-blue-700">Envío gratis</p>
                  <p className="text-start text-sm text-blue-700">Stock</p>
                  <p className="text-start text-sm text-gray-800">Negro</p>
                    <div className="w-20 flex justify-start content-center items-center gap-1 hover:cursor-pointer">
                      <p className="underline text-xs text-violet-700">Eliminar</p>
                      <svg className="w-5 h-5 text-xs" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                </div>
                <p className="text-end font-bold text-gray-800">$200</p>
              </div>
              </div>
            </div>
    

        
        {/* Lista del carrito */}
        <div className="bg-gray-200 px-4 absolute w-full bottom-0 flex flex-col">
          <div className="w-full mb-5">
            <div className="w-full flex justify-between items-center">
              <p className="text-sm font-bold my-3 ">Parlante awai x2</p>
              <p className="text-sm  my-3 text-gray-500">$200</p>
            </div>
            <div className="w-full flex justify-between items-center">
              <p className="text-sm font-bold ">Envío</p>
              <p className="text-sm  text-gray-500">Gratis</p>
            </div>
          </div>

          

          <div className="flex justify-between items-center border-b border-gray-500 border-dashed ">
            <p className="text-sm text-gray-700 my-3">Subtotal</p>
            <p className="text-sm text-gray-700 my-3">$200</p>
          </div>
          <div className="w-full flex justify-between items-center py-5">
            <p className="font-sm font-semiboldtext-lg">Total</p>
            <p className="font-sm font-semiboldtext-lg">$200</p>
          </div>
          {/* Boton para ir al checkout */}
        <Link to={"/checkout"}
          className="mb-4 text-xs text-center hover:cursor-pointer m-auto w-2/3 bg-violet-700 hover:bg-violet-800 uppercase text-white rounded-md py-2"
          onClick={() => setMenuCarritoVisible(!menuCarritoVisible)}
        >
          Checkout
         </Link>

        </div> 

          </div>
        
     
    </div>
  );
};

export default MenuCarrito;