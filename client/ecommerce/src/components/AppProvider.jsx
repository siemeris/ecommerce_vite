import { createContext, useContext, useState } from "react"



const AppContext = createContext()
export const useCompra = () => useContext(AppContext)



const AppProvider = ({ children }) => {


    //Total de productos en el carrito
    const [itemsCarrito, setItemsCarrito] = useState([])
    //Total de dinero de los productos en el carrito
    const [totalProductos, setTotalProductos] = useState(0)
    

    const agregarProducto = (producto) => {

        const existe = itemsCarrito.find( x => x.id === producto.id)

        // Si no existe
        if(!existe) {
            setItemsCarrito( [...itemsCarrito, producto])
        }
        //Si existe
        // else {
        //     setItemsCarrito( 
        //         itemsCarrito.map( x => x.id === producto.id ? {...producto, cantidad : producto.cantidad + x.cantidad} : x)
        //     )
        // }

    }

    const eliminarProducto = (producto) => {
        setItemsCarrito(itemsCarrito.filter(x => x.id != producto.id))
    }

    const limpiarCarrito = () => setItemsCarrito([])

  return (
    
    <>
        <AppContext.Provider
            value={{
                agregarProducto,
                eliminarProducto, 
                limpiarCarrito,
                itemsCarrito,
                totalProductos,
                setTotalProductos
            }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export default AppProvider