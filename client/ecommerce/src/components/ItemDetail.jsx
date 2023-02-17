import React from 'react'

const ItemDetail = () => {
  return (
    <>
    <div className='container'>
        <div className="w-11/12 m-auto">

            {/* Imagen container */}
            <div className='shadow-lg rounded-md'>
                <div className="flex justify-between items-center">
                    <svg className="w-6 h-6 text-gray-400 hover:text-red-400 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" /></svg>
                    <h4 className='text-2xl font-semibold text-gray-400 text-center'>Logitech</h4>
                    <svg  className="w-6 h-6 text-gray-400 hover:fill-red-400 hover:text-red-400 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>

                </div>
                <img className='w-52 m-auto' src="../public/img/parlante.png"  alt="Imagen producto" />    
                <div className='flex w-2/2 gap-1 justify-around'>
                    <img className='w-16' src="../public/img/parlante.png" alt="Imagen producto" />
                    <img className='w-16' src="../public/img/parlante.png" alt="Imagen producto" />
                    <img className='w-16' src="../public/img/parlante.png" alt="Imagen producto" />
                </div>
            </div>

            {/* Descripcion */}

            {/* Titulo */}
            <div className='mt-10'>
                <div className='text-xl font-semibold flex justify-between items-center'>
                    <h2 className=''>Parlante Logitec G G335 Lightspeed</h2>
                    <p className=''>$100.00</p>
                </div>
            </div>

            {/* Descripcion */}
            <p className='text-sm  text-grey-400 mt-10'>
                Parlante Bluetooh Logitech Flip 6 party boost, potencia 20W, resistente al agua IP67, hasta 12 horas de reproducción, color negro
            </p>
            {/*Valoración y counter*/}
            <div className='mt-10 flex justify-between content-center items-center'>
                <div className='flex w-1/2 text-start'>
                    <svg className="w-6 h-6 text-yellow-300 hover:fill-yellow-300 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                    <svg className="w-6 h-6 text-yellow-300 hover:fill-yellow-300 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                    <svg className="w-6 h-6 text-yellow-300 hover:fill-yellow-300 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                    <svg className="w-6 h-6 text-yellow-300 hover:fill-yellow-300 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                    <svg className="w-6 h-6 text-yellow-300 hover:fill-yellow-300 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                </div>
                <div className='flex'>
                    <p className='py-1 px-2 m-auto text-sm bg-gray-300 rounded-l-lg hover:cursor-pointer hover:bg-gray-400'>-</p>
                    <p className='py-1 px-2'>2</p>
                    <p className='py-1 px-2 m-auto text-sm bg-gray-300 rounded-r-lg hover:cursor-pointer hover:bg-gray-400'>+</p>
                    
                </div>

            </div>

            {/* Botones */}
            <div className='flex justify-center gap-3 mt-10' > 
                <button className='rounded-xl text-xs py-2 px-3 w-1/3 bg-blue-700 hover:bg-blue-600 text-white '>Comprar</button>
                <button className='rounded-xl text-xs py-2 px-3 w-1/3 bg-blue-700 hover:bg-blue-600 text-white '>Agregar al carrito</button>
            </div>
            
            {/* Especificaciones */}
            <div className='mt-5 py-6'>
                {/* Titulos */}
                <div className="flex justify-between border-gray-300 border-b">
                    <p className='hover:cursor-pointer 1/3'>Descripcion</p>
                    <p className='hover:cursor-pointer 1/3 pb-4 text-blue-700 border-blue-700 border-b-2'>Caracteristicas</p>
                    <p className='hover:cursor-pointer 1/3'>Reseñas</p>
                </div>
                {/* Tabla */}
                <div className='border-gray-400 rounded-md w-2/2 mt-10 shadow '>
                    <p className='font-semibold text-xs p-3 bg-gray-100 text-gray-500 uppercase'>Especificaciones técnicas</p>
                    <div className="flex justify-between p-4 border border-gray-200">
                        <p className='text-sm text-start w-1/2'>Bluetooth</p>
                        <p className='text-sm text-center w-1/2 text-gray-400'>Sí</p>
                    </div>
                    <div className="flex justify-between p-4 border border-gray-200">
                        <p className='text-sm text-start w-1/2'>Versión Bluetooth</p>
                        <p className='text-sm text-center w-1/2 text-gray-400'>5.1</p>
                    </div>
                    <div className="flex justify-between p-4 border border-gray-200">
                        <p className='text-sm text-start w-1/2'>Potencia</p>
                        <p className='text-sm text-center w-1/2 text-gray-400'>20W</p>
                    </div>
                    <div className="flex justify-between p-4 border border-gray-200">
                        <p className='text-sm text-start w-1/2'>Fuente True Wireless</p>
                        <p className='text-sm text-center w-1/2 text-gray-400'>Sí</p>
                    </div>
                    <div className="flex justify-between p-4 border border-gray-200">
                        <p className='text-sm text-start w-1/2'>Control remoto</p>
                        <p className='text-sm text-center w-1/2 text-gray-400'>No</p>
                    </div>
                    
                </div>
            </div>



        </div>
    </div>
    </>
  )
}

export default ItemDetail

