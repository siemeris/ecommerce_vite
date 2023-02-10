import { useState } from 'react'
import './App.css'
import CardDestacados from './components/CardDestacados'
import CardPromociones from './components/CardPromociones'
import CardOfertas from './components/CardOfertas'

function App() {


  return (
    <div className="App">
      <h2>Esto es una app de Cero</h2>
      <CardDestacados />
      <CardPromociones />
      <CardOfertas />
    </div>
  )
}

export default App
