import React from 'react'

const Footer = () => {
  return (
    <div className='w-full p-4 bg-slate-300 '>
        
            {/* Footer Icons */}
            <div className='mb-10'>
                <p className="text-center mb-5 font-bold text-gray-800">¡Seguinos en nuestras redes!</p>
                <div className="flex w-9/12 justify-around m-auto">
                    <svg className='w-6 h-6 transition fill-indigo-700 hover:cursor-pointer hover:fill-indigo-800' ><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"/></svg>
                    <svg className='w-6 h-6 transition fill-indigo-700 hover:cursor-pointer hover:fill-indigo-800' ><path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"/></svg>
                    <svg className='w-6 h-6 transition fill-indigo-700 hover:cursor-pointer hover:fill-indigo-800' ><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"/></svg>
                </div>
            </div>
            {/* Footer Links */}
            <div className='my-10 container text-center'>
                <p className="my-2 font-bold text-gray-800 underline">Información</p>
                <li className="mb-1 font-semibold text-gray-500  text-sm list-none hover:cursor-pointer transition hover:text-indigo-700">Quiénes somos</li>        
                <li className="mb-1 font-semibold text-gray-500  text-sm list-none hover:cursor-pointer transition hover:text-indigo-700">Contactanos</li>        
                <li className="mb-1 font-semibold text-gray-500  text-sm list-none hover:cursor-pointer transition hover:text-indigo-700">Sucursales</li>        
                <li className="mb-1 font-semibold text-gray-500  text-sm list-none hover:cursor-pointer transition hover:text-indigo-700">Legales</li>        
            </div>

            <div className='my-10 container text-center'>
                <p className="my-2 font-bold text-gray-800 underline">Datos de contacto</p>
                <li className="mb-1 font-semibold text-gray-500  text-sm list-none hover:cursor-pointer transition hover:text-indigo-600">Garantia de productos</li>        
            </div>

            {/* Boton de arrepentimiento */}
            <button className='mb-10 py-2 w-full bg-indigo-700 hover:bg-indigo-800 text-sm uppercase rounded-sm text-gray-100'>Boton de arrepentimiento</button>

            {/* Data Fiscal */}
            <img className='m-auto mb-10' src="./public/img/data_fiscal.png" alt="" />
            {/* Data Dirección */}
            <div className='w-7/12 flex justify-center gap-4 m-auto '>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                <p className='text-xs'>Calle falsa 123 - Local 4</p>
            </div>
            <p className='text-xs pb-5 m-auto text-center' >2023 TecnoStore - Derechos reservados</p>

    </div>
  )
}

export default Footer