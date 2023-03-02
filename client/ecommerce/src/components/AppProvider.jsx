import { createContext, useContext, useEffect, useState } from "react"



const AppContext = createContext()
export const useCompra = () => useContext(AppContext)



const AppProvider = ({ children }) => {


    //Total de productos en el carrito
    const [itemsCarrito, setItemsCarrito] = useState([])
    //Total de dinero de los productos en el carrito
    const [totalProductos, setTotalProductos] = useState(0)
    // Envio gratis o no
    const [envio, setEnvio] = useState(0)
    
    
    // Usuario con todos los datos
    const [usuario, setUsuario] = useState({
        nombre: "",
        apellido: "",
        dni: 0,
        direccion: "",
        piso: 0,
        provincia: "",
        codigopostal: 0,
        telefono: 0,
        envio: "",
        nombretitulartarjeta: "",
        numerotarjeta: 0,
        })
    
   
        const agregarProducto = (producto) => {
            const existe = itemsCarrito.find( x => x.id === producto.id)
            // Si no existe
            if (!existe) {
                setItemsCarrito( [...itemsCarrito, {...producto, cantidad : 1}])
                // console.log( totalProductos + producto.price)
                setTotalProductos( totalProductos + producto.price)
                
            }
            // Si existe
            //Revisar logica cuando esté la opcion del counter en el itemDetail
            else {
                setItemsCarrito(itemsCarrito.map(x => {
                        if ( x.id === producto.id ) {
                            return {...producto, cantidad : producto.cantidad + x.cantidad}
                        }
                        else {
                            return x
                        }
                    }
                ))
                  itemsCarrito.map( x => {
                    setTotalProductos((x.price * x.cantidad) + totalProductos)
                })
            }
           
        }
   

    

    const eliminarProducto = (producto) => {
        setItemsCarrito(itemsCarrito.filter(x => x.id != producto.id))
        setTotalProductos( totalProductos - (producto.price * producto.cantidad))
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
                // productosIcono,
                usuario, 
                setUsuario
            }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export default AppProvider