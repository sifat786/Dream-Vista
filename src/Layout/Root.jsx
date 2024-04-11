import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from '../Shared/Header/Header';
import Footer from './../Shared/Footer/Footer';
import { ToastContainer } from "react-toastify";


const Root = () => {
    return (
        <div className="font-robot">
            <div className="container">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            
            <Footer/>

            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                theme="dark"
            />
            <ScrollRestoration />
        </div>
    );
};

export default Root;