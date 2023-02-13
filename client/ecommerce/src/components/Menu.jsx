import React, { useState } from 'react'

const Menu = ({menuVisible, setMenuVisible}) => {


    const [categoriasVisible, setCategoriasVisible] = useState(false)

  return (
    <div className='absolute -inset-0 w-2/3 flex justify-evenly flex-col h-full bg-slate-50 p-4'>
        
        {/* Titulo y cierre */}
        <div className="w-full flex justify-between content-center">
            <h3 className="w-4/5 text-start uppercase font-bold m-auto">menu</h3>
            <svg className="w-5 h-5 m-auto hover:cursor-pointer transition hover:text-red-600" onClick={() => setMenuVisible(!menuVisible)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>

        {/* Inicia sesion */}
        <div className='w-full pb-5 border-b leading-loose border-gray-800'>
            <p>¡Hola! Inicia sesión</p>
            <p className='text-sm'> <span className='hover:cursor-pointer transition hover:text-red-600 text-red-500'>Ingresá</span> / <span className='hover:cursor-pointer hover:text-red-600 text-red-500'>Registrate</span> </p>
        </div>

        {/* Categorías y productos */}
        <div className="w-full pb-5 flex flex-col border-b leading-loose border-gray-800 ">
            <div className="w-full mb-2 flex justify-between">
                <li className='list-none hover:cursor-pointer hover:text-red-600'>Categorias</li>
                <svg className='my-auto w-3 h-3 hover:cursor-pointer hover:text-red-600' onClick={() => setCategoriasVisible(!categoriasVisible)}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </div>
        {/* Categorias */}
        {
            categoriasVisible 
                &&
                    <div className='flex flex-col text-center w-full transition-all '>
                            <li className='list-none hover:cursor-pointer text-start ml-5'  >Computadoras</li>
                            <li className='list-none hover:cursor-pointer text-start ml-5' >Celulares</li>
                            <li className='list-none hover:cursor-pointer text-start ml-5' >Auriculares</li>
                            <li className='list-none hover:cursor-pointer text-start ml-5' >Teclados</li>
                    </div>
        }
            <div className="w-full mb-2 flex justify-start">
                <li className='list-none hover:cursor-pointer transition hover:text-red-600'>Mi Perfil</li>
            </div>
            <div className="w-full mb-2 flex justify-start">
                <li className='list-none hover:cursor-pointer transition hover:text-red-600'>Ofertas</li>
            </div>
            <div className="w-full mb-2 flex justify-start">
                <li className='list-none hover:cursor-pointer transition hover:text-red-600'>Contacto</li>
            </div>
        </div>

          {/* Footer del menu */}
          <div className="w-full pb-5 flex flex-col border-b leading-loose border-gray-800 ">
            <div className="w-full mb-2 flex justify-between">
                <li className='list-none hover:cursor-pointer transition hover:text-red-600' >Sucursales</li>
            </div>
            <div className="w-full mb-2 flex justify-start">
                <li className='list-none hover:cursor-pointer transition hover:text-red-600'>Servicio Técnico</li>
            </div>
        </div>
        
    </div>
  )
}

export default Menu