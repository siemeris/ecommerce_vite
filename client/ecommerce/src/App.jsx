import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import {BrowserRouter} from "react-router-dom";
import MainRoutes from './components/MainRoutes';
import AppProvider from './components/AppProvider';
import { ToastContainer } from 'react-toastify';



function App() {


  return (
    <div className="App flex flex-col ">

        <AppProvider>
          <BrowserRouter>
            <Header/>
              <MainRoutes />
            <Footer />
            <ToastContainer />
          </BrowserRouter>
        </AppProvider>
    </div>
  )
}

export default App
