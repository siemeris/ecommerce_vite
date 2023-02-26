import React, { useEffect, useState} from 'react'
import CardPromociones from './CardPromociones'
import CardDestacados from './CardDestacados'
import CardOfertas from './CardOfertas'
import Spinner from './Spinner';


const Home = () => {
    
  const [productosApi, setProductosApi] = useState([])
  const [load, setLoad] = useState(true)

  // Url del link de github con el .json
  const url = "https://raw.githubusercontent.com/Nico9934/weatherApp/main/dataProductosNico.json"
  const urlBackend = "https://c9-52-mern.onrender.com/api/v1/products/"

  useEffect( () => {
    const obtenerProductos = async () => {
      try {
        await fetch(urlBackend)
                .then(response => response.json())
                .then( result => console.log(result.data.products))
      } catch (error) {
        console.error(error)
      }
    }
    obtenerProductos()
  },[])



  // Llamada a la api para guardar los productos desde el json
  useEffect( () => {
      setLoad(true)

      fetch(url)
        .then( res => res.json())
        .then( data => {
      setProductosApi(data)
      setLoad(false)
    })

  },[])
  
  
  
  return (
    <div className='w-11/12 m-auto'>
      <p className="font-bold leading-4 ml-4 my-8">PROMOCIONES</p>
      <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 gap-3">
      {/* Mientras se carga se muestra el spinner */}
      {load ?
        <Spinner/>
      :
      // Mapea todos los productos para mostrar las promociones
        productosApi.map( producto => {
          if( producto.promocion) {
            return <CardPromociones 
              key={producto.id }
              producto={producto}
            />
          }
          
        })
      }
     
      </div>
      <p className="text-sm font-medium leading-4 ml-4 my-8">DESTACADOS</p>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3">
        {/* Mientras se carga se muestra el spinner */}
      {load ?
        <Spinner/>
      :
      // Mapea todos los productos para mostrar las promociones
        productosApi.map( producto => {
          if( producto.destacados == 1) {
            return <CardDestacados 
              key={producto.id }
              producto={producto}
            />
          }
          
        })
      }
      </div>
      <p className="text-sm font-medium leading-4 ml-4 my-8">OFERTAS</p>
      <div className="flex flex-no-wrap gap-4 overflow-x-scroll scrolling-touch items-start mb-8">
              {/* Mientras se carga se muestra el spinner */}
      {load ?
        <Spinner/>
      :
      // Mapea todos los productos para mostrar las promociones
        productosApi.map( producto => {
          if( producto.blackfriday) {
            return <CardOfertas 
              key={producto.id }
              producto={producto}
            />
          }
          
        })
      }
      </div>
    </div>
  )
}



export default Home