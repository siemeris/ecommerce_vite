import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompra } from './AppProvider'

const FiltroProductos = ({ menuVisible, setMenuVisible }) => {


    const [categoriasVisible, setCategoriasVisible] = useState(false)
    const { brand, setBrand } = useCompra()

    const handleFilter = (e) => {
        setBrand(e.target.innerText)
        setMenuVisible(!menuVisible)
    }

    return (
        <div className='absolute -inset-0 w-2/3 flex flex-col h-full bg-slate-50 p-4 z-30'>

            {/* Titulo y cierre */}
            <div className="w-full flex justify-between content-center">
                <h3 className="w-4/5 text-start uppercase font-bold my-auto mx-auto">filtrar por:</h3>
                <svg className="w-5 h-5 m-auto hover:cursor-pointer transition hover:text-red-600" onClick={() => setMenuVisible(!menuVisible)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>

            <div className="ml-10 mt-4">

                <div className="w-full mb-2 flex justify-start">
                    <li className='list-none hover:cursor-pointer transition hover:text-indigo-700'>Color</li>
                </div>
                <div className="w-full mb-2 flex justify-start">
                    <li className='list-none hover:cursor-pointer transition hover:text-indigo-700'>Más recientes</li>
                </div>

                {/* Categorías y productos */}
                <div className="w-full pb-5 flex flex-col leading-loose  ">
                    <div className="w-full mb-2 flex justify-between">
                        <li className='list-none hover:cursor-pointer hover:text-indigo-700'>Marca</li>
                        <svg className='my-auto w-3 h-3 hover:cursor-pointer hover:text-indigo-700' onClick={() => setCategoriasVisible(!categoriasVisible)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                    </div>
                    {/* Categorias */}
                    {
                        categoriasVisible
                        &&
                        <div className='flex flex-col text-center w-full transition-all '>
                            <p className="list-none hover:cursor-pointer hover:text-indigo-700 text-start ml-5" onClick={handleFilter} value="Logitech">Logitech</p>
                            <p className="list-none hover:cursor-pointer hover:text-indigo-700 text-start ml-5" onClick={handleFilter}>Asus</p>
                            <p className="list-none hover:cursor-pointer hover:text-indigo-700 text-start ml-5" onClick={handleFilter}>Iphone</p>
                            <p className="list-none hover:cursor-pointer hover:text-indigo-700 text-start ml-5" onClick={handleFilter}>Microsoft</p>
                            <p className="list-none hover:cursor-pointer hover:text-indigo-700 text-start ml-5" onClick={handleFilter}>Samsung</p>
                            <p className="list-none hover:cursor-pointer hover:text-indigo-700 text-start ml-5" onClick={handleFilter}>Hp</p>
                        </div>

                    }

                    <div className="w-full mb-2 flex justify-start">
                        <li className='list-none hover:cursor-pointer transition hover:text-indigo-700'>Precio</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiltroProductos