import React from "react";
import { Link } from "react-router-dom";
import { useCompra } from "./AppProvider";

const MenuCarritoDetalle = ({producto}) => {

  const {title, price} = producto

  return (
    <div className="w-full flex justify-between items-center">
      <p className="text-sm font-bold my-3 ">{title}</p>
      <p className="text-sm  my-3 text-gray-500">${price}</p>
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