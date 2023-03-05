import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import {BrowserRouter} from "react-router-dom";
import MainRoutes from './components/MainRoutes';
import AppProvider from './components/AppProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <div className="App flex flex-col ">

        <AppProvider>
          <BrowserRouter>
            <Header/>
              <MainRoutes />
            <Footer />
            <ToastContainer toastStyle={{ backgroundColor: "rgb(109 40 217)" }} className="w-9/12" position="top-center" autoClose={1500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored"/>
          </BrowserRouter>
        </AppProvider>
    </div>
  )
}

export default App
