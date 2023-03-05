import React from 'react'
import { useCompra } from './AppProvider'

const CheckOutConfirm = () => {

    const {usuario} = useCompra()

  return (
    <>
    <div className='w-11/12 m-auto py-5 border-b border-gray-800 mb-5'>
        <p className='font-semibold text-gray-800 text-center mb-5 text-'>Confirmación de datos</p>
        <div className='border-1 rounded-md p-2'>
          <h3 className='font-semibold text-gray-700'>Datos personales</h3>
          <p className='text-sm text-gray-700'>{usuario.nombre} {usuario.apellido}</p>
          <p className='text-gray-700 text-sm'>{usuario.email} - {usuario.telefono}</p>
          <p className='text-sm text-gray-700'>{usuario.provincia} - Buenos Aires</p>
          <p className='text-sm text-gray-700'>{usuario.direccion} - número 123</p>
        </div>
    </div>
    {/* Metodo de envío */}
    <div className='w-11/12 m-auto py-5 border-b border-gray-800 mb-5'>
    <p className='font-semibold text-gray-800 text-center mb-5 text-'>Metodo de envío</p>
      <div className='flex gap-2 border-1 border-gray-800 border-dashed'>
            <div className='w-11/12 py-2 px-4 border-blue-400 border-4  m-auto rounded-md'>
              <h3 className='font-semibold text-base mb-5'>Standard</h3>
              <p className='text-sm'>(4-7 días hábiles)</p>
              <p className='text-sm text-gray-400'>Gratis</p>
            </div>

            <div className='w-11/12 py-2 px-4 border-gray-800 border-4  m-auto rounded-md'>
              <h3 className='font-semibold text-base mb-5'>Rápido</h3>
              <p className='text-sm'>(2-4 días hábiles)</p>
              <p className='text-sm text-blue-400'>$300</p>
            </div>
          </div>
    </div>
    </>
  )
}

export default CheckOutConfirm