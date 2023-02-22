import React from 'react'
import { Link } from 'react-router-dom'
import MesaTrabajo from '../img/6003841_Mesa_de_trabajo.png'



const CardOfertas = () => {
  return (
    <div className="flex-none max-w-sm w-64 rounded overflow-hidden shadow-lg pb-4">
      <img className="object-cover" src={MesaTrabajo} alt="Mesa Trabajo" />

      <div className='w-11/12 m-auto'>

      
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Black Friday</div>
        <p className="text-gray-700 text-base">
          Parlante portátil Bluetooth Y669
        </p>
      </div>


      <div className="flex justify-center gap-1">
                
                <Link className="flex items-center justify-center  w-1/2 text-center border-2 border-violet-700 hover:border-violet-800 text-violet-700 text-xs py-2 rounded-md" to={"/productos/itemdetail"}>Agregar al carrito</Link>
                <Link className="flex items-center justify-center  w-1/2 text-center bg-violet-700 hover:bg-violet-800 text-white text-xs py-2 px-4 rounded-md" to={"/productos/itemdetail"}>Comprar</Link>
        </div>

      </div>
    </div>
  )
}

export default CardOfertas