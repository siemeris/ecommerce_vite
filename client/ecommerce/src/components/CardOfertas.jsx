import React from 'react'
import MesaTrabajo from '../img/6003841_Mesa_de_trabajo.png'

const CardOfertas = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={MesaTrabajo} alt="Mesa Trabajo"/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Black Friday</div>
      <p className="text-gray-700 text-base">
        Parlante portátil Bluetooth Y669
      </p>
    </div>
    <div className="px-6 pb-2">
     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Agregar
</button>
    </div>
  </div>
  )
}

export default CardOfertas