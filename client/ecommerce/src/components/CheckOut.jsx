import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useCompra } from './AppProvider'
import CheckOutConfirm from './CheckOutConfirm'
import CheckOutFormCard from './CheckOutFormCard'
import CheckOutFormUser from './CheckOutFormUser'
import CheckOutProductList from './CheckOutProductList'
import CheckOutStep from './CheckOutStep'
import CheckOutTotal from './CheckOutTotal'




const CheckOut = () => {

  const [step, setStep] = useState(1)
  const [mostrarCodigo, setMostrarCodigo] = useState(false)
  const {usuario, setUsuario, itemsCarrito, totalProductos, limpiarCarrito,eliminarProducto, productosIcono} = useCompra()


  
  

  const validarDatos = () => {
     const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
     const stringRegex =  /^[a-zA-Z ]+$/
     const numberRegex = /^[0-9]+$/


     const {nombre, apellido, dni, telefono, direccion, altura, provincia, codigopostal} = usuario
     const datosPersonales = [nombre, apellido, dni, telefono, direccion, altura, provincia, codigopostal]
     
    if (Object.values(datosPersonales).includes("")) {
      console.log(nombre, apellido, dni, telefono, direccion, altura, provincia, codigopostal)
      toast.warn("Todos los campos son obligatorios");
      return false
    } 
      else if (!stringRegex.test(usuario.nombre)) {
      toast.warn("Debes ingresar un nombre válido")
      return false
    }  
    else {
      console.log('Verificando')
      setStep(step+1)
    }
  
  //   else if (!stringRegex.test(usuario.apellido)) {
  //     toast.warn("Debes ingresar un apellido válido")
  //     return false
  //   }
  //   else if ( !numberRegex.test(usuario.dni)) {
  //     toast.warn("Debes ingresar un dni válido")
  //     return false
  //   }
  //   else if ( !numberRegex.test(usuario.telefono)) {
  //     toast.warn("Debes ingresar un telefono válido")
  //     return false
  //   }

  //   else if ( !stringRegex.test(usuario.direccion)) {
  //      toast.warn("Debes ingresar una calle válida")
  //      return false
  //    }
  //    else if ( !numberRegex.test(usuario.altura)) {
  //      toast.warn("Debes ingresar una altura válida")
  //      return false
  //    }
  //    else if ( !numberRegex.test(usuario.altura)) {
  //     toast.warn("Debes ingresar una altura válida")
  //     return false
  //   }




  // //   else if (!emailRegex.test(usuario.mail)) {
  // //     toast.error('Debes ingresar un mail correcto')
  // //     return false
  // //   }
  // //   else if (usuario.mail2 != usuario.mail) {
  // //     toast.warn("El mail debe coincidir con el ingresado")
  // //     return false
  // //   }
  // //   else if ( !stringRegex.test(usuario.calle)) {
  // //     toast.warn("Debes ingresar una calle válida")
  // //     return false
  // //   }
  // //   else if ( !numberRegex.test(usuario.altura)) {
  // //     toast.warn("Debes ingresar una altura válida")
  // //     return false
  // //   }
  // //   else if ( !numberRegex.test(usuario.tarjeta)) {
  // //     toast.warn("Debes ingresar una altura válida")
  // //     return false
  // // } 
 
  // }
    
  }

  const finalizarCompra = () => {
    // validarDatos()
    setStep( step + 1)
    limpiarCarrito()

  }
  


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

            <CheckOutStep step={step}/>

            {/* Carrito lista de productos */}
            <div className='w-full '>
              {/* Header de la lista */}
              <div className="w-full container bg-gray-200 flex m-auto justify-around text-sm">
                <h3 className='py-3 w-1/2 m-auto text-center  text-blue-800 font-semibold border-b border-blue-800'>{step === 1 && `Carrito (${productosIcono})`}{step === 2 && "Envios a domicilio"}</h3>
                <h3 className='py-3 w-1/2 m-auto text-center text-gray-800 font-semibold '>{step === 1 && "Favoritos"}{step === 2 && "Retiro en sucursal"}</h3>
              </div>

              {/* productos en el carrito */}
              {step === 1 &&
                <CheckOutProductList />
              }
                
              {/* Garantia */}
              {step === 1 &&
              <div className='container m-auto w-11/12 flex justify-around bg-gray-400 rounded-sm py-2 mb-10 items-center'>
                <svg  className="w-6 h-6 m-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <p className='text-sm font-medium'>Garantia por 12 meses</p>
                <p className='hover: cursor-pointer text-sm font-medium text-white'>+ Agregar Tiempo</p>
              </div>
              }
              
              
              {step === 2 && <CheckOutFormUser />}

              {/* Metodo de pago */}
              {step === 3 && 
                <>
                  <CheckOutConfirm />
               
                  <CheckOutFormCard />
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
                  {mostrarCodigo && <input type="text" className='border-b border-gray-800 inline-block bg-gray-200' />}

                  <CheckOutTotal />

                

                  {/* Boton para continuar */}
                  {
                    step === 1 && <button className='w-full rounded-sm bg-violet-700 text-white uppercase font-semibold text-sm py-3 hover:cursor-pointer'
                      onClick={() => setStep(step+1)}>Continuar</button>
                  }
                  {
                    step === 2 && <button className='w-full rounded-sm bg-violet-700 text-white uppercase font-semibold text-sm py-3 hover:cursor-pointer'
                      onClick={() => validarDatos()}>Continuar</button>
                  }
                  {
                    step === 3
                      &&
                    <button className='w-full rounded-md bg-violet-700 text-white uppercase font-semibold text-sm py-2 hover:cursor-pointer'
                      onClick={() => finalizarCompra() }>Finalizar compra</button>
                  }

                  
                </div>
              </div>
              : 
              
              <div className='h-screen bg-white-200 w-full py-10 m-auto relative'>
                    <img src="./public/img/circulo.png" alt="" className='absolute -mt-10 w-full m-auto'/>
                     
                  <div className='z-20 absolute w-full m-auto'>
                     
                      <svg className="w-20 h-20 m-auto text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" ><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>

                      <p className='w-9/12 m-auto text-white font-bold text-center text-xl mb-5 '>¡Transacción exitosa!</p>
                  
                      <div className='rounded-md bg-white text-center w-9/12 m-auto p-5 shadow-md'>
                        <p className='text-sm text-gray-800 mb-3' >Te avisaremos cuando tus productos estén en camino</p>
                        <p className='text-xs text-gray-300 mb-5'>N° de operación: 5012364785</p>

                        <div className='flex flex-col w-11/12 m-auto items-center gap-3'>
                            <Link to={"/"} className='hover:cursor-pointer w-2/3 shadow-md text-white bg-violet-700 hover:bg-violet-800 text-xs p-2 rounded-md' onClick={() => setStep( 1 )}>Seguir comprando</Link>
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