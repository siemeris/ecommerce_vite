import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import CardDestacados from './CardDestacados';
import CardFiltroMarca from './CardFiltroMarca';
import CardOfertas from './CardOfertas';
import CardProductos from './CardProductos';
import CardPromociones from './CardPromociones';
import Spinner from './Spinner';



const ListaDeProductos = () => {

  const { categoriaProductos } = useParams()
  const [categoria, setCategoria] = useState()
  const [marca, setMarca] = useState(false)
  console.log(categoriaProductos)
  useEffect(() => {
    setCategoria(categoriaProductos)
  }, [categoriaProductos])

  const handleFilter = () => {
    setMarca(!marca)
  }
  const [productosApi, setProductosApi] = useState([])
  const [load, setLoad] = useState(true)
  // Url del link de github con el .json
  const url = "https://raw.githubusercontent.com/Nico9934/weatherApp/main/dataProductosNico.json"
  const DATOS = "https://c9-52-mern.onrender.com/"

  // Llamada a la api para guardar los productos 
  useEffect(() => {
    setLoad(true)

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProductosApi(data)
        setLoad(false)
      })

  }, [])

  return (
    <div className='w-full min-h-max pb-4'>

      {/* <h3>Esta es la lista de {categoria}</h3> */}
      <div className="mx-5 mb-5">
        <div className='flex flex-row justify-start space-x-4 mt-5'>
          <Link to="/">
            <p className='text-sm text-gray-400 hover:cursor-pointer '>Home</p>
          </Link>
          <div className='my-auto'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg> </div>
          <p className='text-sm text-gray-800 hover:cursor-pointer '>Productos</p>
        </div>

        <div className="flex flex-row justify-between">
          <p className="text-sm font-medium leading-4 ml-4 my-8 uppercase">{categoria}</p>
          <button className="my-auto cursor-pointer" onClick={handleFilter} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
          </button>
        </div>
        <p className="text-sm font-medium leading-4 ml-4 mb-8">DESTACADOS</p>

        {marca ?
          <CardFiltroMarca />
          :
          <div>
            <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8">
              {/* Mientras se carga se muestra el spinner */}
              {load ?
                <Spinner />
                :
                // Mapea todos los productos para mostrar las promociones
                productosApi.map(producto => {
                  if (producto.categoria === categoriaProductos && producto.promocion) {
                    return <CardOfertas
                      key={producto.id}
                      producto={producto}
                    />
                  }

                })
              }


              {/*               
              <CardOfertas  />
              <CardOfertas />
              <CardOfertas /> */}
            </div>
            <p className="text-sm font-medium leading-4 ml-4 my-8">PRODUCTOS</p>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3">

              {/* Mientras se carga se muestra el spinner */}
              {load ?
                <Spinner />
                :
                // Mapea todos los productos para mostrar las promociones
                productosApi.map(producto => {
                  if (producto.categoria === categoriaProductos) {
                    return <CardProductos
                      key={producto.id}
                      producto={producto}
                    />
                  }

                })
              }



              {/* <CardProductos />
              <CardProductos />
              <CardProductos />
              <CardProductos /> */}
            </div>
          </div>

        }
      </div>
    </div>)
}

export default ListaDeProductos