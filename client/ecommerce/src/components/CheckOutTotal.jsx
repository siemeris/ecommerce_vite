import React from "react";
import { useCompra } from "./AppProvider";
import CheckOutTotalProduct from "./CheckOutTotalProduct";


const CheckOutTotal = () => {

    const {itemsCarrito, totalProductos} = useCompra()

  return (
    <div>
      {/* Lista del carrito */}
      <div className="w-full border-b border-gray-400 mb-5">
        <div className="w-full flex justify-between items-center">
          {itemsCarrito.map((producto) => {
            <CheckOutTotalProduct key={producto.id} producto={producto} />;
          })}
        </div>
        <div className="w-full flex justify-between items-center py-5">
          <p className="font-bold text-lg">Envío</p>
          <p className="text-base text-gray-500">Gratis</p>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-between items-center pb-5 border-b border-gray-500 border-dashed">
          <p className="text-base text-gray-700">Subtotal</p>
          <p className="text-base text-gray-700">${totalProductos}</p>
        </div>
        <div className="w-full flex justify-between items-center py-5">
          <p className="font-bold text-lg">Total</p>
          <p className="font-bold text-lg">${totalProductos}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckOutTotal;
