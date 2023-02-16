import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="w-10/12 m-auto">
            <div className='flex justify-between w-full border-b border-gray-800 pt-6'>
                <h1 className='text-base text-center font-semibold text-gray-800 mb-1'>
                    Inicia sesión
                </h1>
                <Link to="/">
                    <button className='w-5 h-5 my-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M15.7,14.3c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0
	L12,13.4l-2.3,2.3c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l2.3-2.3L8.3,9.7c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l2.3,2.3
	l2.3-2.3c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L13.4,12L15.7,14.3z" fill="#d85b53" class="color000000 svgShape"></path></svg>
                    </button>
                </Link>

            </div>
            {/* Formulario para completar */}
            {/* Input */}
            <div className='flex flex-col gap-1 mb-3 mt-4'>
                <label className='text-sm font-semibold text-gray-800' htmlFor="name">Email </label>
                <input className='bg-gray-300 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='email' placeholder='mail@ejemplo.com' />
            </div>
            {/* Input */}
            <div className='flex flex-col gap-1 mb-3'>
                <label className='text-sm font-semibold text-gray-800' htmlFor="lastname">Contraseña </label>
                <input className='bg-gray-300 rounded-md border-0 py-1 px-3 placeholder:text-sm placeholder:text-gray-800' type="text" id='password' placeholder='******' />
            </div>
            <div className='flex w-full justify-between mb-5'>
                <div class="flex items-center my-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">Recuérdame</label>
                </div>
                <p className='text-sm font-medium underline my-4 text-gray-900'>Recuperar contraseña </p>
            </div>

            <button className='w-full rounded-md bg-red-400 text-white uppercase font-semibold text-sm py-2 hover:cursor-pointer mb-8'>Continuar</button>

            <p className='text-gray-800 text-sm inline-block text-grey-300 hover:cursor-pointer font-medium'>¿No tenés cuenta? <span className='underline hover:cursor-pointer ' >Regístrate</span></p>

            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 text-sm">o también</span>
            </div>

            <div className='flex flex-row justify-center mb-6 space-x-8'>

                <div className='w-8 h-8'>
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" fill="#d85b53" class="color000000 svgShape"></path></svg>
                </div>

                <div className='w-8 h-8'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.083 144"><path d="M72.041 14.165c-31.94 0-57.833 25.894-57.833 57.834 0 31.939 25.893 57.836 57.833 57.836s57.835-25.896 57.835-57.836c-.001-31.94-25.895-57.834-57.835-57.834zM91.792 51.16a1 1 0 0 1-1 1H76.713v7.567h14.078a1 1 0 0 1 1 1v14.077a1 1 0 0 1-1 1H77.713v30.892a1 1 0 0 1-1 1H63.408a1 1 0 0 1-1-1V75.805h-9.117a1 1 0 0 1-1-1V60.728a1 1 0 0 1 1-1h9.117V54.02c0-.082.01-.161.028-.237.008-8.131 1.747-17.433 15.068-17.475.029-.002.06-.004.09-.004h13.197a1 1 0 0 1 1 1V51.16z" fill="#d85b53" class="color000000 svgShape"></path></svg>
                </div>

                <div className='w-8 h-8'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#d85b53" d="M63.999 7.989c-30.883 0-56.009 25.126-56.009 56.01 0 30.885 25.126 56.012 56.009 56.012 30.885 0 56.011-25.127 56.011-56.012-.001-30.884-25.127-56.01-56.011-56.01zm29.81 41.402a23.97 23.97 0 0 1-5.464 5.798c.009.325.015.65.015.975 0 16.334-12.429 33.229-33.229 33.229a33.135 33.135 0 0 1-17.905-5.244.997.997 0 0 1-.402-1.177.99.99 0 0 1 1.056-.658c.877.101 1.746.151 2.584.151 4.08 0 7.968-1.097 11.381-3.193a12.318 12.318 0 0 1-8.842-8.221 1.003 1.003 0 0 1 .204-.969.993.993 0 0 1 .938-.317c.188.036.377.067.565.093-3.473-2.213-5.726-6.104-5.726-10.412v-.143a1 1 0 0 1 1.485-.874c.435.241.886.45 1.349.626a12.318 12.318 0 0 1-2.742-7.762c0-2.178.577-4.322 1.668-6.199a1 1 0 0 1 1.64-.13c5.319 6.522 13.051 10.625 21.368 11.381a12.57 12.57 0 0 1-.088-1.493c0-6.797 5.531-12.327 12.329-12.327 3.207 0 6.31 1.265 8.599 3.487a21.637 21.637 0 0 0 6.351-2.519 1 1 0 1 1 1.464 1.163 12.225 12.225 0 0 1-2.32 4.188 21.278 21.278 0 0 0 2.487-.924 1 1 0 0 1 1.235 1.471z" class="color231f20 svgShape"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default Login