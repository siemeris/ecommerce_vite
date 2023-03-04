import React from "react";

const CheckOutTotalProduct = () => {
  return (
    <div>
      <div className="flex justify-between pr-4 w-full">
        <p className="font-bold my-3 text-lg">{producto.title}</p>
        {producto.cantidad > 1 && <p className="text-gray-400 my-3 text-lg">X {producto.cantidad}</p>}
      </div>
      <p className="text-base my-3 text-gray-500">${producto.price * producto.cantidad}</p>
    </div>
  );
};

export default CheckOutTotalProduct;
