import React from 'react'
import CardPromociones from './CardPromociones'
import CardDestacados from './CardDestacados'
import CardOfertas from './CardOfertas'


const Home = () => {
  return (
    <div>
    <p className="text-sm font-medium leading-4 ml-4 my-8">PROMOCIONES</p>
    <div className="flex overflow-x-scroll w-screen">
    <CardPromociones />
    <CardPromociones />
    <CardPromociones />
    </div>
    <p className="text-sm font-medium leading-4 ml-4 my-8">DESTACADOS</p>
    <CardDestacados />
    <p className="text-sm font-medium leading-4 ml-4 my-8">OFERTAS</p>
    <CardOfertas />
    </div>
  )
}

export default Home