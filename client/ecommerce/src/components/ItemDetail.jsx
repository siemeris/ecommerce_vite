import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCompra } from './AppProvider'
import ItemCount from './ItemCount'
import Spinner from './Spinner'


const ItemDetail = () => {

    // Cada vez que el cliente hace click en un producto nuevo
    // para agregar al carrito cambia el useParams y se renderiza 
    // el producto nuevo
    const {idProducto} = useParams()
    const [productoDetalle, setProductoDetalle] = useState({})
    const [load, setLoad] = useState(true)
    const [cantidad, setCantidad] = useState(1)
    const {agregarProducto} = useCompra()

    const {title, subtitle, photos, description,characteristics, price} = productoDetalle




    useEffect( () => {
        // Llamada a fetch filtrando por el id del producto
        //  al hacerse en un json no se puede insertar directamente
        // en la url
        const url = "https://raw.githubusercontent.com/Nico9934/weatherApp/main/dataProductosNico.json"
        setLoad(true)
        fetch(url)
            .then(res => res.json())
            .then( data =>( data.map(x => x.id === idProducto && setProductoDetalle(x))))
        setLoad(false)
           
    },[idProducto])


  return (
    <>
    <div className='container'>
        <div className="w-11/12 m-auto">

            { photos === undefined
            ?
                <Spinner/>
            
                :
                
                <>
                  {/* Imagen container */}
            <div className='shadow-lg rounded-md mt-5 p-5'>
            <div className="flex justify-between items-center">
                <Link
                    to={"/"}>
                    <svg to={"/"} className="w-6 h-6 text-gray-400 hover:text-red-400 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" /></svg>
                </Link>
                <h4 className='text-2xl font-semibold text-gray-400 text-center'>{title}</h4>
                <svg  className="w-6 h-6 text-gray-400 hover:fill-red-400 hover:text-red-400 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
            </div>
            
            
            <img className='w-52 m-auto' src={photos[0]}  alt="Imagen producto" />    
            <div className='flex w-2/2 gap-1 justify-around'>
                <img className='w-16' src={photos[0]} alt="Imagen producto" />
                <img className='w-16' src={photos[0]} alt="Imagen producto" />
                <img className='w-16' src={photos[0]} alt="Imagen producto" />
            </div>
        </div>

        {/* Descripcion */}

        {/* Titulo */}
        <div className='mt-10'>
            <div className='text-xl font-semibold flex justify-between items-center'>
                <h2 className=''>{subtitle}</h2>
                <p className=''>${price}</p>
            </div>
        </div>

        {/* Descripcion */}
        <p className='text-sm  text-grey-400 mt-10'>
            {description}
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
           <ItemCount
                cantidad={cantidad}
                setCantidad={setCantidad}
           />

        </div>

        {/* Botones */}
        <div className='flex justify-center gap-3 mt-10' > 
            <Link 
            to="/checkout"
            onClick={() => agregarProducto({...productoDetalle, cantidad})}
            className='rounded-xl flex items-center justify-center text-center text-xs py-2 px-3 w-1/3 bg-violet-700 hover:bg-violet-600 text-white '>Comprar</Link>
            <Link onClick={() => 
                 agregarProducto({...productoDetalle, cantidad : cantidad})
                } 
            className='rounded-xl flex items-center justify-center text-center text-xs py-2 px-3 w-1/3 bg-violet-700 hover:bg-violet-600 text-white '>Agregar al carrito</Link>
        </div>
        
        {/* Especificaciones */}
        <div className='mt-5 py-6'>
            {/* Titulos */}
            <div className="flex justify-between border-gray-300 border-b">
                <p className='hover:cursor-pointer 1/3'>Descripcion</p>
                <p className='hover:cursor-pointer 1/3 pb-4 text-violet-700 border-violet-700 border-b-2'>Caracteristicas</p>
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
        </>
            }

          



        </div>
    </div>
    </>
  )
}

export default ItemDetail

