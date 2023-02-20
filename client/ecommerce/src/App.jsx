import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import {BrowserRouter} from "react-router-dom";
import MainRoutes from './components/MainRoutes';
<<<<<<< HEAD
import AppProvider from './components/AppProvider';

=======
import PedidoState from './components/PedidoState';
>>>>>>> pedidostate

function App() {


  return (
    <div className="App flex flex-col ">

        <AppProvider>
          <BrowserRouter>
            <Header/>
              <MainRoutes />
            <Footer />
          </BrowserRouter>
        </AppProvider>
    </div>
  )
}

export default App
