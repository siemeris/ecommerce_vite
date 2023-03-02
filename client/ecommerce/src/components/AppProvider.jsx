import { createContext, useContext, useEffect, useState } from "react"



const AppContext = createContext()
export const useCompra = () => useContext(AppContext)



const AppProvider = ({ children }) => {


    //Total de productos en el carrito
    const [itemsCarrito, setItemsCarrito] = useState([])
    //Total de dinero de los productos en el carrito
    const [totalProductos, setTotalProductos] = useState(0)
    // Total de productos que se muestran en el icono del carrito
    const [productosIcono, setProductosIcono] = useState(0)

    const [brand, setBrand] = useState('')
    
   
        const agregarProducto = (producto) => {
            const existe = itemsCarrito.find( x => x.id === producto.id)
            // Si no existe
            if (!existe) {
                setItemsCarrito( [...itemsCarrito, {...producto, cantidad : 1}])
                // setProductosIcono(producto.cantidad + productosIcono)
            }
            // Si existe
            //Revisar logica cuando esté la opcion del counter en el itemDetail
            else {setItemsCarrito(itemsCarrito.map( x => x.id === producto.id ? {...producto, cantidad : x.cantidad + 1} : x))}
            console.log(itemsCarrito)
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
                setTotalProductos,
                productosIcono,
                setProductosIcono,
                brand,
                setBrand
            }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export default AppProvider