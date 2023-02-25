import React, { useEffect, useState} from 'react'
import CardPromociones from './CardPromociones'
import CardDestacados from './CardDestacados'
import CardOfertas from './CardOfertas'
import axios from 'axios';
import Spinner from './Spinner';


const Home = () => {
    
  const [productosApi, setProductosApi] = useState([])
  const [load, setLoad] = useState(true)

  // Url del link de github con el .json
  const url = "https://raw.githubusercontent.com/Nico9934/weatherApp/main/dataProductosNico.json"
  const DATOS = "https://c9-52-mern.onrender.com/"



  // Llamada a la api para guardar los productos 
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
      <div className="flex flex-col md:flex-row">
        <CardDestacados />
        <CardDestacados />
        <CardDestacados />
      </div>
      <p className="text-sm font-medium leading-4 ml-4 my-8">OFERTAS</p>
      <div className="flex flex-no-wrap gap-4 overflow-x-scroll scrolling-touch items-start mb-8">
        <CardOfertas />
        <CardOfertas />
        <CardOfertas />
      </div>
    </div>
  )
}



export default Home