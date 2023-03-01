import React, { useState } from 'react'
import { Link, useMatch } from 'react-router-dom'

const FiltroProductos = ({ menuVisible, setMenuVisible, setMarca, marca }) => {


    const {path, url} = useMatch()
    const [categoriasVisible, setCategoriasVisible] = useState(false)

    return (
        <div className='absolute -inset-0 w-2/3 flex flex-col h-full bg-slate-50 p-4 z-30'>

            {/* Titulo y cierre */}
            <div className="w-full flex justify-between content-center">
                <h3 className="w-4/5 text-start uppercase font-bold my-auto mx-auto">filtrar por:</h3>
                <svg className="w-5 h-5 m-auto hover:cursor-pointer transition hover:text-red-600" onClick={() => setMenuVisible(!menuVisible)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>

            <div className= "ml-10 mt-4">

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
                        <Link className="list-none hover:cursor-pointer hover:text-indigo-700 text-start ml-5"  to={`${url}/Logitech`}>Logitech</Link>
                        {/* {console.log(setMarca(marca))} */}
                        <Link className="list-none hover:cursor-pointer hover:text-indigo-700 text-start ml-5" to={"/:categoriaProductos/Asus"}>Asus</Link>
                        <Link className="list-none hover:cursor-pointer hover:text-indigo-700 text-start ml-5" to={"/:categoriaProductos/Iphone"}>Iphone</Link>
                        <Link className="list-none hover:cursor-pointer hover:text-indigo-700 text-start ml-5" to={"/:categoriaProductos/Microsoft"}>Microsoft</Link>
                        <Link className="list-none hover:cursor-pointer hover:text-indigo-700 text-start ml-5" to={"/:categoriaProductos/Samsung"}>Samsung</Link>
                        <Link className="list-none hover:cursor-pointer hover:text-indigo-700 text-start ml-5" to={"/productos/Hp"}>Hp</Link>
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