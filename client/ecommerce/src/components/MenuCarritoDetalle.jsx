import React from "react";
import { Link } from "react-router-dom";
import { useCompra } from "./AppProvider";

const MenuCarritoDetalle = () => {
  const { itemsCarrito } = useCompra();

  return (
    <div className="bg-gray-200 px-4 absolute w-full bottom-0 flex flex-col">
      {itemsCarrito.length === 0 ? (
        <div className="w-full flex justify-center items-center py-16 relative">
          <p className="text-xl font-semibold m-auto ">Agrega algo al carrito</p>
        </div>
      ) : (
        <>
        
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
          <Link
            to={"/checkout"}
            className="mb-4 text-xs text-center hover:cursor-pointer m-auto w-2/3 bg-violet-700 hover:bg-violet-800 uppercase text-white rounded-md py-2"
            onClick={() => setMenuCarritoVisible(!menuCarritoVisible)}
          >
            Checkout
          </Link>
        </>
      )}
    </div>
  );
};

export default MenuCarritoDetalle;
