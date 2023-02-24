import React, { useEffect, useState } from 'react'
import CardPromociones from './CardPromociones'
import CardDestacados from './CardDestacados'
import CardOfertas from './CardOfertas'
import axios from "axios"

const Home = () => {
  
  const [datos, setDatos] = useState([])

  // Llamada a api 
  const DATOS = "https://nocountry-production.up.railway.app/api/v1/products/allproducts"

  useEffect( () => {
    const getProducts = async () => {
      try {
        const {data} = await axios.get(DATOS)
        console.log(data)
      }
      catch (error) {
        console.log(error)
      }
    }

    getProducts()
  },[])
  

  return (
    <div className='w-11/12 m-auto'>
      <p className="font-bold leading-4 ml-4 my-8">PROMOCIONES</p>
      <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 gap-3">
        <CardPromociones />
        <CardPromociones />
        <CardPromociones />
        <CardPromociones />
        <CardPromociones />
        <CardPromociones />
        <CardPromociones />
        <CardPromociones />
        <CardPromociones />
        <CardPromociones />
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