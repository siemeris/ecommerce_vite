import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CheckOut from './CheckOut'
import Home from './Home'
import ItemDetail from './ItemDetail'
import ListaDeProductos from './ListaDeProductos'
import Login from './Login'




const MainRoutes = () => {
  return (
    <main>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<CheckOut />} />
          {/* Con esta ruta, se filtrarian celulares, tablets, compus, lo que sea */}
          <Route path='/productos/:categoriaProductos' element={<ListaDeProductos />}/>
          <Route path='/productos/itemdetail' element={<ItemDetail />}/>

        </Routes>
    </main>
  )
}

export default MainRoutes