import React from 'react'
import { useCompra } from './AppProvider';
import CheckOutProduct from './CheckOutProduct';

const CheckOutProductList = () => {

  const {itemsCarrito} = useCompra()

  return (
    <div className="flex flex-col w-11/12 m-auto border-b mt-5 border-gray-800 mb-5">
      {itemsCarrito.map((producto) => {
        return (

            <CheckOutProduct 
                key={producto.id}
                producto={producto}
            />
          
        );
      })}
    </div>
  )
}

export default CheckOutProductList