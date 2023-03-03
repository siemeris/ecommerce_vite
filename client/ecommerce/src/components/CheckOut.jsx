import React, { useState } from 'react'
import { useCompra } from './AppProvider'
import CheckOutStep from './CheckOutStep'


const CheckOut = () => {

  const [step, setStep] = useState(1)
  const [mostrarCodigo, setMostrarCodigo] = useState(false)
  const {usuario, setUsuario, itemsCarrito, totalProductos} = useCompra()

  
  return (
    <div className='container m-auto bg-white'>
            
      <div className="w-full py-5">
        {/*  Compra Nav */}
        <div>
          {step >= 2 ?
            <p className='inline-block text-sm ml-7 text-gray-400 mb-5 hover:cursor-pointer' onClick={() => setStep(step - 1)}>Atras</p>
              :
            <p className='inline-block text-sm ml-7 text-gray-400 mb-5 hover:cursor-pointer '>Home</p>
        }
          <p className='inline-block text-sm ml-7 text-gray-800 mb-5 hover:cursor-pointer '>Checkout</p>
        </div>
        <p className='text-gray-800 text-sm inline-block ml-7 mb-5 text-grey-300 hover:cursor-pointer '>¿Tenés cuenta? <span className='underline hover:cursor-pointer ' >Ingresá</span></p>

            <CheckOutStep
              step={step}
            />

            {/* Carrito lista de productos */}
            <div className='w-full '>
              {/* Header de la lista */}
              <div className="w-full container bg-gray-200 flex m-auto justify-around text-sm">
                <h3 className='py-3 w-1/2 m-auto text-center  text-blue-800 font-semibold border-b border-blue-800'>
                    {step === 1 && "Carrito(2)"}
                    {step === 2 && "Envios a domicilio"}
                  </h3>
                <h3 className='py-3 w-1/2 m-auto text-center text-gray-800 font-semibold '>
                    {step === 1 && "Favoritos"}
                    {step === 2 && "Retiro en sucursal"}
                  </h3>
              </div>

              {/* productos en el carrito */}
              {
                step === 1 &&
           
              <div className='grid grid-cols-2 w-11/12 m-auto border-b border-gray-800 mb-5'>
                {itemsCarrito.map( producto => {
                  
                
                  return <>
                     <div className='col-start-1' >
                      <img className='w-15 h-15 object-cover m-auto' src={producto.photos[0]} alt="" />
                    </div>
                    <div className='col-start-2 p-5'>
                      <h3 className='text-start text-gray-800 font-bold text-2xl'>{producto.title}</h3>
                      <p className='text-start text-sm text-blue-700'>Envío gratis</p>
                      <p className='text-start text-sm text-blue-700'>Stock</p>
                      <p className='text-start text-md text-gray-800'>Negro</p>
                      <div className="w-20 flex justify-center content-center items-center gap-1 hover:cursor-pointer">
                        <p className='underline text-red-500'>Eliminar</p>
                        <svg  className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                      </div>
                      <p className='text-end font-bold text-2xl text-gray-800'>${producto.price}</p>
                    </div>
                  
                  </>
                  }

                  )}
                   
              </div>
           
              }
                
              {/* Garantia */}
              <div className='container m-auto w-11/12 flex justify-around bg-gray-400 rounded-sm py-2 mb-10 items-center'>
                <svg  className="w-6 h-6 m-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <p className='text-sm font-medium'>Garantia por 12 meses</p>
                <p className='hover: cursor-pointer text-sm font-medium text-white'>+ Agregar Tiempo</p>
              </div>
              
          

              {/* Formulario de datos */}
              {
                step === 2 &&
                <>
                  <div className='w-full'>
                    {/* Datos personales */}
                    <div className='w-11/12 m-auto py-5 border-b border-gray-800 border-dotted mb-5'>
                      <h3 className='font-semibold text-gray-800 text-center mb-5'>Datos personales</h3>

                      {/* Formulario para completar */}
                      {/* Input */}
                      <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="name">Nombre: </label>
                        <input onChange={ e => setUsuario( {...usuario, nombre : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='name' placeholder='Ingresa tu nombre' />
                      </div>
                       {/* Input */}
                       <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="lastname">Apellido: </label>
                        <input onChange={ e => setUsuario( {...usuario, apellido : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='lastname' placeholder='Ingresa tu apellido' />
                      </div>
                       {/* Input */}
                       <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="dni">DNI: </label>
                        <input onChange={ e => setUsuario( {...usuario, dni : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='dni' placeholder='Ingresa tu DNI' />
                      </div>
                      {/* Input */}
                      <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="dni">Telefono: </label>
                        <input onChange={ e => setUsuario( {...usuario, telefono : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='dni' placeholder='Ingresa tu Telefono' />
                      </div>

                      <p className='text-xsm text-gray-600'>Esta información será exclusivamente utilizada para el envío</p>
                    </div>

                    {/* Datos domicilio */}
                    <div className='w-11/12 m-auto py-5 border-b border-gray-800 border-dotted mb-5'>
                      <h3  className='font-semibold text-gray-800 text-center mb-5'>Datos de domicilio</h3>


                      {/* Input */}
                      <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="name">Dirección ( calle y número ) </label>
                        <input  onChange={ e => setUsuario( {...usuario, direccion : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='name' placeholder='Ingresa tu dirección' />
                      </div>
                       {/* Input */}
                       <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="lastname">Piso / Departamento: </label>
                        <input  onChange={ e => setUsuario( {...usuario, piso : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 text-sm placeholder:text-sm placeholder:text-gray-800' type="text" id='lastname' placeholder='Ingresa tu piso / departamento' />
                      </div>
                       {/* Input */}
                       <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="dni">Provincia: </label>
                        <select  onChange={ e => setUsuario( {...usuario, telefono : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='dni' placeholder='Ingresa tu provincia'>
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
                        <label className='text-sm font-semibold text-gray-800' htmlFor="lastname">Codigo postal: </label>
                        <input onChange={ e => setUsuario( {...usuario, codigopostal : e.target.value})} className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='lastname' placeholder='Ingresa tu código' />
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
                
                
                </>
              }

              {/* Metodo de pago */}
              {
                step === 3 && 
                <>
                  {/* datos */}
                 
                   
                       <div className='w-11/12 m-auto py-5 border-b border-gray-800 mb-5'>
                      <p className='font-semibold text-gray-800 text-center mb-5 text-'>Confirmación de datos</p>
                      <div className='border-1 rounded-md p-2'>
                        <h3 className='font-semibold text-gray-700'>Datos personales</h3>
                        <p className='text-sm text-gray-700'>{usuario.nombre}</p>
                        <p className='text-blue-500 text-sm'>{usuario.mail} - {usuario.telefono}</p>
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
                    
                    
               
                  

               
                  {/* Metodo de pago */}
                  <div className='w-11/12 m-auto py-5 border-b border-gray-800 border-dotted mb-5'>
                      <h3 className='font-semibold text-gray-800 text-center mb-5'>Método de pago</h3>

                      {/* Formulario para completar */}
                      {/* Input */}
                      <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="name">Nombre del titular: </label>
                        <input className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='name' placeholder='Ingresa nombre' />
                      </div>
                       {/* Input */}
                       <div className='flex flex-col gap-1 mb-3'>
                        <label className='text-sm font-semibold text-gray-800' htmlFor="lastname">Numero de tarjeta: </label>
                        <input className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='lastname' placeholder='0000 0000 0000 0000' />
                      </div>
                       <div className='flex w-full justify-between'>
                       {/* Input */}
                           <div className='flex flex-col w-5/12 gap-1 mb-3'>
                            <label className='text-sm font-semibold text-gray-800' htmlFor="dni">CVC/CVV </label>
                            <input className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='dni' placeholder='***' />
                          </div>
                          {/* Input */}
                          <div className='flex flex-col w-5/12 gap-1 mb-3'>
                            <label className='text-sm font-semibold text-gray-800' htmlFor="dni">Vencimiento * </label>
                            <input className='bg-gray-200 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='dni' placeholder='MM/YY' />
                      </div>
                      </div>
                    </div>


                </>
              }


              {/* Resumen de la compra */}
              {step <= 3 ?
                <div className='w-full bg-gray-200 py-7'>
                <div className='container w-11/12 m-auto'>
                  <h3 className='font-bold text-xl text-center text-gray-800 mb-5'>Resumen de la compra</h3>
                  <div className='w-9/12 flex justify-between pb-3 border-b border-gray-500'>
                    <p className='text-grey-800 text-sm font-semibold text-gray-800'>Tengo código de descuento</p>
                    <svg className=' my-auto w-5 h-5 hover:cursor-pointer hover:text-red-600' onClick={() => setMostrarCodigo(!mostrarCodigo)}fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                  </div>
                  {mostrarCodigo && 
                    <input type="text" className='border-b border-gray-800 inline-block bg-gray-200' />
                  }

                  {/* Lista del carrito */}
                  <div className='w-full border-b border-gray-400 mb-5'>

                    {
                      itemsCarrito.map( producto => {
                        return <>
                          <div className='w-full flex justify-between items-center'>
                              <p className='font-bold my-3 text-lg'>{producto.title}</p>
                             <p className='text-base my-3 text-gray-500'>${producto.price}</p>
                           </div>
                        </>
                      })
                    }
                    {/* Producto de la lista */}
                    
                    <div className='w-full flex justify-between items-center'>
                      <p className='font-bold text-lg'>Envío</p>
                      
                      <p className='text-base text-gray-500'>Gratis</p>
                    </div>
                  </div>

                  {/* Subtotal y total */}
                  <div className='w-full'>
                  <div className='w-full flex justify-between items-center pb-5 border-b border-gray-500 border-dashed'>
                      <p className='text-base text-gray-700'>Subtotal</p>
                      <p className='text-base text-gray-700'>${totalProductos}</p>
                  </div>
                  <div className='w-full flex justify-between items-center py-5'>
                      {

                      }
                      
                      <p className='font-bold text-lg'>Total</p>
                      <p className='font-bold text-lg'>${totalProductos}</p>
                    </div>
                  </div>

                  {/* Boton para continuar */}
                  {
                    step <= 2 
                      &&
                      <button className='w-full rounded-sm bg-violet-700 text-white uppercase font-semibold text-sm py-3 hover:cursor-pointer'
                      onClick={() => setStep( step + 1)}>Continuar</button>
                  }
                  {
                    step === 3
                      &&
                    <button className='w-full rounded-md bg-violet-700 text-white uppercase font-semibold text-sm py-2 hover:cursor-pointer'
                      onClick={() => setStep( step + 1)}>Finalizar compra</button>
                  }

                  
                </div>
              </div>
              : 
              
              <div className='h-screen bg-white-200 w-full py-10 m-auto relative'>
                    <img src="./public/img/circulo.png" alt="" className='absolute -mt-10 w-full m-auto'/>
                    {/* <div className='h-48 w-48 rounded-full bg-green-200 absolute z-0 -mt-16 '></div> */}

                      
                  <div className='z-20 absolute w-full m-auto'>
                     
                      <svg className="w-20 h-20 m-auto text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>

                      <p className='w-9/12 m-auto text-white font-bold text-center text-xl mb-5 '>¡Transacción exitosa!</p>
                  
                      <div className='rounded-md bg-white text-center w-9/12 m-auto p-5 shadow-md'>
                        <p className='text-sm text-gray-800 mb-3' >Te avisaremos cuando tus productos estén en camino</p>
                        <p className='text-xs text-gray-300 mb-5'>N° de operación: 5012364785</p>

                        <div className='flex flex-col w-11/12 m-auto items-center gap-3'>
                          <button className='hover:cursor-pointer w-2/3 shadow-md text-white bg-violet-700 hover:bg-violet-800 text-xs p-2 rounded-md' onClick={() => setStep( 1 )}>Seguir comprando</button>
                          <button className='hover:cursor-pointer w-2/3 shadow-md text-violet-700  border-2 text-xs rounded-md p-2 border-violet-700 hover:border-violet-400 '>Ir a mis compras</button>
                        </div>
                      </div>

                  </div>
              </div>
              }
              



            </div>


      </div>







    </div>
  )
}

export default CheckOut