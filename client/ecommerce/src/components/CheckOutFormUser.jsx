import React from 'react'
import { useCompra } from './AppProvider'

const CheckOutFormUser = () => {

  const {usuario, setUsuario} = useCompra()

  return (
    <div>
          <div className='w-full'>
                    {/* Datos personales */}
                    <div className='w-11/12 m-auto py-5 border-b border-gray-800 border-dotted mb-5'>
                      <h3 className='font-semibold text-gray-800 text-center mb-5'>Datos personales</h3>

                      {/* Formulario para completar */}
                      {/* Input */}
                      <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="nombre">Nombre: </label>
                        <input onChange={ e => setUsuario( {...usuario, nombre : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='nombre' placeholder='Ingresa tu nombre' />
                      </div>
                       {/* Input */}
                       <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="apellido">Apellido: </label>
                        <input onChange={ e => setUsuario( {...usuario, apellido : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='apellido' placeholder='Ingresa tu apellido' />
                      </div>
                       {/* Input */}
                       <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="dni">DNI: </label>
                        <input onChange={ e => setUsuario( {...usuario, dni : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='dni' placeholder='Ingresa tu DNI' />
                      </div>
                      {/* Input */}
                      <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="telefono">Telefono: </label>
                        <input onChange={ e => setUsuario( {...usuario, telefono : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='telefono' placeholder='Ingresa tu Telefono' />
                      </div>
                       {/* Input */}
                       <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="email">Email: </label>
                        <input onChange={ e => setUsuario( {...usuario, email : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='email' placeholder='Ingresa tu Email' />
                      </div>

                      <p className='text-xsm text-gray-600'>Esta información será exclusivamente utilizada para el envío</p>
                    </div>

                    {/* Datos domicilio */}
                    <div className='w-11/12 m-auto py-5 border-b border-gray-800 border-dotted mb-5'>
                      <h3  className='font-semibold text-gray-800 text-center mb-5'>Datos de domicilio</h3>


                      {/* Input */}
                      <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="direccion">Dirección </label>
                        <input  onChange={ e => setUsuario( {...usuario, direccion : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='direccion' placeholder='Ingresa tu dirección' />
                      </div>
                       {/* Input */}
                       <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="altura">Altura </label>
                        <input  onChange={ e => setUsuario( {...usuario, altura : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='altura' placeholder='Ingresa la altura' />
                      </div>
                       {/* Input */}
                       {/* <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="lastname">Piso / Departamento: </label>
                        <input  onChange={ e => setUsuario( {...usuario, piso : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 text-sm placeholder:text-sm placeholder:text-gray-800' type="text" id='lastname' placeholder='Ingresa tu piso / departamento' />
                      </div> */}
                       {/* Input */}
                       <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="provincia">Provincia: </label>
                        <select  onChange={ e => setUsuario( {...usuario, provincia : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='dni' placeholder='Selecciona tu provincia'>
                          <option value="Buenos Aires">Buenos Aires</option>
                          <option value="Catamarca">Catamarca</option>
                          <option value="Chacho">Chaco</option>
                          <option value="Chubut">Chubut</option>
                          <option value="Ciudad Autonoma de BS. As">Ciudad Autonoma de Bs As</option>
                          <option value="Cordoba">Cordoba</option>
                          <option value="Corrientes">Corrientes</option>
                          <option value="Entre Rios">Entre Rios</option>
                          <option value="Formosa">Formosa</option>
                        </select>

                        {/* Input */}
                       <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="codigopostal">Codigo postal: </label>
                        <input onChange={ e => setUsuario( {...usuario, codigopostal : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='codigopostal' placeholder='Ingresa tu código postal' />
                      </div>
                        
                      </div>
                     

                      <p className='text-xsm text-gray-600'>Esta información será exclusivamente utilizada para el envío</p>
                    </div>
                    
                    {/* Tipo de envio */}
                    <div className='mb-5 flex justify-around gap-5 flex-col py-5'>
                    
                    <h3 className='font-semibold  text-gray-800 text-center mb-5'>Selecciona el tipo de envio</h3>

                      <div className='w-11/12 py-2 px-4 border-blue-400 border-4  m-auto rounded-md'>
                        <h3 className='font-semibold text-base mb-5'>Standard</h3>
                        <p className='text-sm'>(4-7 días hábiles)</p>
                        <p className='text-sm text-gray-400'>Gratis</p>
                      </div>
                      {/* Tipo de envio */}
                      <div className='w-11/12 py-2 px-4 mb-5 border-gray-800 border-4  m-auto rounded-md'>
                        <h3 className='font-semibold text-base mb-5'>Rápido</h3>
                        <p className='text-sm'>(2-4 días hábiles)</p>
                        <p className='text-sm text-blue-400'>$300</p>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default CheckOutFormUser