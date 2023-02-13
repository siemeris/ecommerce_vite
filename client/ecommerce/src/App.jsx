import './App.css'
import CheckOut from './components/CheckOut'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {


  return (
    <div className="App flex flex-col ">
        <Header/>
        <Main />
        <CheckOut/>
        <Footer />
    </div>
  )
}

export default App
