import React from 'react'
import { Link } from 'react-router-dom'

const Compras = () => {
    return (
        <div className='mt-5'>
            <div className='flex flex-row justify-start space-x-4'>

                <p className='text-sm ml-7 text-gray-400 hover:cursor-pointer '>Home</p>
                <div className='my-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg> </div>
                <p className='text-sm text-gray-800 hover:cursor-pointer '>Mis compras</p>
            </div>

            <Link to="/misCompras/1">
            <div className='max-w-xl w-11/12 py-2 px-4 border-blue-400 border-4 mx-auto rounded-md my-4'>
                <div className="flex justify-between">
                    <p className="text-sm">Fecha de compra: 24 de marzo 2023</p>
                    <div className="h-8 w-8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><g data-name="Layer 2" fill="#595bd4" className="color000000 svgShape"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" data-name="checkmark-circle-2" fill="#595bd4" className="color000000 svgShape"></path></g></svg>
                    </div>
                </div>
                <p className="text-sm text-gray-600"> Nº de pedido: 5012364785</p>
                <div className="border-b-4 border-dotted border-gray-600 mt-3"></div>

                <div className='grid grid-cols-2 w-11/12 m-auto border-b border-gray-800 mb-5'>
                    <div className='col-start-1' >
                        <img className='w-15 h-15 object-cover m-auto' src="./public/img/parlante.png" alt="" />
                    </div>
                    <div className='col-start-2 p-5'>
                        <h3 className='text-start text-gray-800 font-bold text-2xl'>Parlante Awei</h3>
                        <p className='text-start text-sm text-blue-700'>Envío gratis</p>
                        <p className='text-start text-sm text-blue-700'>Stock</p>
                        <p className='text-start text-md text-gray-800'>Negro</p>
                        {/* Counter Item */}
                        <p className='text-gray-800'>Counter Item</p>
                        <div className="w-20 flex justify-center content-center items-center gap-1 hover:cursor-pointer">
                            {/* <p className='underline text-red-500'>Eliminar</p> */}
                            {/* <svg  className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg> */}
                        </div>
                        {/* <p className='text-end font-bold text-2xl text-gray-800'>$200</p> */}

                    </div>
                </div>
            </div>
            </Link>

            <Link to="/misCompras/2">
            <div className='max-w-xl w-11/12 py-2 px-4 border-gray-400 border-4 m-auto rounded-md mb-5'>
                <div className="flex justify-between">
                    <p className="text-sm">Fecha de compra: 24 de marzo 2023</p>
                    <div className="h-8 w-8">
                        <svg id="SvgjsSvg1011" width="26" height="26" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"><defs id="SvgjsDefs1012"></defs><g id="SvgjsG1013"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path fillRule="evenodd" d="M13 0A13 13 0 0 0 0 13a13 13 0 0 0 13 13 13 13 0 0 0 13-13A13 13 0 0 0 13 0zm-2.3 8 5.3 5-5.3 5-.7-.66L14.6 13 10 8.66l.7-.66z" fill="#d9d9d9" className="color000 svgShape"></path></svg></g></svg>
                    </div>
                </div>
                <p className="text-sm text-gray-600"> Nº de pedido: 5012364785</p>
                <div className="border-b-4 border-dotted border-gray-600 mt-3"></div>

                <div className='grid grid-cols-2 w-11/12 m-auto border-b border-gray-800 mb-5'>
                    <div className='col-start-1' >
                        <img className='w-15 h-15 object-cover m-auto' src="./public/img/parlante.png" alt="" />
                    </div>
                    <div className='col-start-2 p-5'>
                        <h3 className='text-start text-gray-800 font-bold text-2xl'>Parlante Awei</h3>
                        <p className='text-start text-sm text-blue-700'>Envío gratis</p>
                        <p className='text-start text-sm text-blue-700'>Stock</p>
                        <p className='text-start text-md text-gray-800'>Negro</p>
                        {/* Counter Item */}
                        <p className='text-gray-800'>Counter Item</p>
                        <div className="w-20 flex justify-center content-center items-center gap-1 hover:cursor-pointer">
                            {/* <p className='underline text-red-500'>Eliminar</p> */}
                            {/* <svg  className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg> */}
                        </div>
                        {/* <p className='text-end font-bold text-2xl text-gray-800'>$200</p> */}
                    </div>
                </div>
            </div>
            </Link>

        </div>
    )
}

export default Compras