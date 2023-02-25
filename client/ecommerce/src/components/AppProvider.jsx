import { createContext, useContext, useState } from "react"



const AppContext = createContext()
export const useCompra = () => useContext(AppContext)



const AppProvider = ({children}) => {

    const [itemsCarrito, setItemsCarrito] = useState([])
    

    const agregarProducto = (producto) => {
        setItemsCarrito( [...itemsCarrito, producto])
    }

    const eliminarProducto = (producto) => {
        setItemsCarrito( itemsCarrito.filter( x => x.id != producto.id))
    }

    const limpiarCarrito = () => setItemsCarrito([])

  return (
    
    <>
        <AppContext.Provider
            value={{
                agregarProducto,
                eliminarProducto, 
                limpiarCarrito,
                itemsCarrito
                
            }}
        >
            {children}

        </AppContext.Provider>
    </>
  )
}

export default AppProvider