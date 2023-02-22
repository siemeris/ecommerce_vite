import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';



const ListaDeProductos = () => {

    const {categoriaProductos} = useParams()
    const [categoria, setCategoria] = useState()
    console.log(categoriaProductos)
    useEffect( () => {
        setCategoria(categoriaProductos)
    }, [categoriaProductos])

  return (
        <div className='bg-red-500 w-full h-screen'>
            
             <h3>Esta es la lista de {categoria}</h3>
        
        </div>
  )
}

export default ListaDeProductos