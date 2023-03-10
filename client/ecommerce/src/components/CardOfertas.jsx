import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MesaTrabajo from '../img/6003841_Mesa_de_trabajo.png'
import { useCompra } from './AppProvider'


const CardOfertas = ({producto}) => {

  const {title, price, subtitle, photos} = producto
  const {agregarProducto, itemsCarrito} = useCompra()
  const [cantidadInicial, setCantidadInicial] = useState(1)

  return (
    <div className="flex-none max-w-sm w-80 rounded overflow-hidden shadow-lg pb-4 mr-2">
      <img className="h-44 mx-auto" src={photos[0]} alt="Mesa Trabajo" />

      <div className='w-11/12 m-auto'>

      
      <div className="px-1 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {subtitle}
        </p>
      </div>


      <div className="flex justify-center gap-1">
                
                <Link 
                  onClick={() => agregarProducto({...producto, cantidad: cantidadInicial})}
                className="flex items-center justify-center  w-1/2 text-center border-2 border-violet-700 hover:border-violet-800 text-violet-700 text-xs py-2 rounded-md" >Agregar al carrito</Link>
                <Link 
                  to={`/producto/${producto.id}`}
                className="flex items-center justify-center  w-1/2 text-center bg-violet-700 hover:bg-violet-800 text-white text-xs py-2 px-4 rounded-md">Ver más</Link>
        </div>

      </div>
    </div>
  )
}

export default CardOfertas