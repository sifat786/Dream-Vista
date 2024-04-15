import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from '../Shared/Header/Header';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from './../Shared/Footer/Footer';


const Root = () => {
    return (
        <div className="font-robot">
            <div className="container">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            
            <Footer/>

            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              theme="dark"
            />
            <ScrollRestoration />
        </div>
    );
};

export default Root;