import React from "react";
import { Link } from "react-router-dom";
import { useCompra } from "./AppProvider";
import MenuCarritoDetalle from "./MenuCarritoDetalle";
import MenuCarritoProducto from "./MenuCarritoProducto";


const MenuCarrito = ({ setMenuCarritoVisible, menuCarritoVisible }) => {


    const {itemsCarrito} = useCompra()
    
  
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
        {/* Productos */}
        { itemsCarrito.map( producto => 
           ( <MenuCarritoProducto
              key={producto.id}
              producto={producto}
            />)
        )}
    

        
        {/* Lista de detalle del carrito */}
        <div className="bg-gray-200 px-4 absolute w-full bottom-0 flex flex-col">
          <div className="w-full mb-5">
            {itemsCarrito.map ( producto => {
              return <MenuCarritoDetalle 
                key={producto.id}
                producto={producto}
              />
            })}
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
          <Link
            to={"/checkout"}
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