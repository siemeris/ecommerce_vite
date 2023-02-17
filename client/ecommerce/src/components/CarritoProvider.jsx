import { createContext, useContext, useState } from "react"



const CarritoContext = createContext()
export const useCarrito = () => useContext(CarritoContext)



const CarritoProvider = ({children}) => {

    
    const agregarProducto = (producto) => {
        setItemsCarrito( [...itemsCarrito, producto])
    }

    const eliminarProducto = (producto) => {
        setItemsCarrito( itemsCarrito.filter( x => x.id != producto.id))
    }

    const limpiarCarrito = () => setItemsCarrito([])

  return (
    
    <>
        <CarritoContext.Provider
            value={{
                agregarProducto,
                eliminarProducto, 
                limpiarCarrito
            }}
        >
            {children}

        </CarritoContext.Provider>
    </>
  )
}

export default CarritoProvider