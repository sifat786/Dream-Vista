import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from '../Shared/Header/Header';


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <ScrollRestoration />
        </div>
    );
};

export default Root;