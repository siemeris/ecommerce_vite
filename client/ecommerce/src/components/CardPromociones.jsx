import React from 'react'
import { Link } from 'react-router-dom'
import Kerfin from '../img/Kerfin7_NEA_2267-01.png'
import { useCompra } from './AppProvider'

const CardPromociones = ({producto}) => {

    //De cada producto hacemos destructuring para mostrar en pantalla las caracteristicas
    const {title, price, subtitle, photos} = producto

    return (
        <div className="flex-none w-64 rounded-md overflow-hidden shadow-lg border border-gray-300 py-4">
            
            <div className='w-11/12 m-auto h-auto'>
            <div className='flex justify-around w-full m-auto'>
                <div className='h-32 w-2/3  object-contain'>
                    <img className="w-auto h-full " src={photos[0]} alt="Kerfin" />
                </div>
                <p className='w-1/3 -rotate-90 font-bold text-xl transform uppercase flex justify-center -mr-10'>{title}</p>
            </div>

            <div className="">
                <div className="font-semibold text-3xl mb-2 flex justify-between items-center">
                    <p>$ {price}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-800 uppercase whitespace-nowrap font-bold w-4/5">
                        {subtitle}
                    </p>
                </div>
            </div>

            <div className="pt-4">
                <div className="flex justify-between">
                    <div className="flex text-yellow-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FBBF24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FBBF24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FBBF24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FBBF24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FBBF24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                    
                </div>
                    <span className="inline-blockrounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">3.0</span>
                </div>
            </div>

            <div className="flex justify-center flex-col gap-1">
                
                {/* Al hacer click en el link de agregar al carrito, se abre la ventana de 
                detalle del producto para elegir la cantidad
                Se pasa por useParams el id del producto*/}
                <Link 
                    to={`/producto/${producto.id}`}
                    className="w-full text-center border-2 border-violet-700 hover:border-violet-900 hover:text-violet-800 text-violet-700 text-xs py-2 px-4 rounded-md">Agregar al carrito</Link>
                <Link className="w-full text-center bg-violet-700 hover:bg-violet-800 text-white text-xs py-2 px-4 rounded-md" to={"/productos/itemdetail"}>Comprar</Link>
            </div>
            </div>
        </div>
    )
}

export default CardPromociones