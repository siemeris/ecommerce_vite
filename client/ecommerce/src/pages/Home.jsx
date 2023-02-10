import React from 'react'
import CardPromociones from '../components/CardPromociones'
import CardDestacados from '../components/CardDestacados'
import CardOfertas from '../components/CardOfertas'


const Home = () => {
  return (
    <div>
    <p className="text-sm font-medium leading-4 ml-4 my-8">PROMOCIONES</p>
    <CardPromociones />
    <p className="text-sm font-medium leading-4 ml-4 my-8">DESTACADOS</p>
    <CardDestacados />
    <p className="text-sm font-medium leading-4 ml-4 my-8">OFERTAS</p>
    <CardOfertas />
    </div>
  )
}

export default Home