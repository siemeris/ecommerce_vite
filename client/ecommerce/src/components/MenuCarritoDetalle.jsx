import React from "react";
import { Link } from "react-router-dom";
import { useCompra } from "./AppProvider";

const MenuCarritoDetalle = ({producto}) => {

  const {title, price} = producto

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex justify-between w-full pr-4">

        <p className="text-sm font-bold my-3 ">{title}</p>
        {producto.cantidad > 1 && <p className='text-gray-400 my-3 text-sm '>X {producto.cantidad}</p>}
      </div>
      <p className="text-sm  my-3 text-gray-500">${producto.cantidad * price}</p>
  </div>
  );
};

export default MenuCarritoDetalle;


   {/* {itemsCarrito.length === 0 ? (
        <div className="w-full flex justify-center items-center py-16 relative">
          <p className="text-xl font-semibold m-auto ">Agrega algo al carrito</p>
        </div>
      ) : 
      
      ( */}

         {/* ) */}
      {/* } */}