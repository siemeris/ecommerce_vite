import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import {BrowserRouter} from "react-router-dom";
import MainRoutes from './components/MainRoutes';
import CarritoProvider from './components/CarritoProvider';

function App() {


  return (
    <div className="App flex flex-col ">
      
      {/* Aca van los providers */}
      <CarritoProvider>
        <BrowserRouter>
          <Header/>
            <MainRoutes />
          <Footer />
        </BrowserRouter>
      </CarritoProvider>
    </div>
  )
}

export default App
