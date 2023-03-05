import React from "react";

const CheckOutTotalProduct = ({producto}) => {
  return (
    <>
      <div className="flex justify-between w-full">
        <p className="font-bold my-3 text-lg">{producto.title}{producto.cantidad > 1 && <span className="font-normal text-gray-400 my-3 ml-12 text-lg">X {producto.cantidad}</span>}</p>
        
      <p className="text-base my-3 text-gray-500">${producto.price * producto.cantidad}</p>
      </div>
    </>
  );
};

export default CheckOutTotalProduct;
