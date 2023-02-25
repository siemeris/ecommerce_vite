import React, { useState } from "react";


const ItemCount = ({cantidad, setCantidad}) => {
  
  console.log(cantidad)

  const handleSumar = () => {
    setCantidad(cantidad + 1)
  }
  const handleRestar = () => {
    setCantidad(cantidad <= 1 ? cantidad :  cantidad - 1)
    
  }
  
    return (
    <div className="flex">
      <button onClick={handleRestar} className="flex py-1 px-2 m-auto text-sm justify-center content-center text-white w-6 bg-violet-700 rounded-l-lg hover:cursor-pointer hover:bg-violet-800">-</button>
      <input className="text-center w-6" type="text" value={cantidad}  />
      <button onClick={handleSumar} className="flex py-1 px-2 m-auto text-sm justify-center content-center text-white w-6 bg-violet-700 rounded-r-lg hover:cursor-pointer hover:bg-violet-800">
        +
      </button>
    </div>
  );
};

export default ItemCount;
