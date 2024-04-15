
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './../Hooks/useAuth';
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {

    const {user, loader} = useAuth();
    const location = useLocation();

    if(loader) {
        return (
            <div className="flex flex-col gap-4 w-[70%] mb-10 mx-auto mt-[50px]">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        )
    }else if(user) {
        return children;
    } else {
        return <Navigate to='/login' state={location.pathname}/>
    }
    
};

export default PrivateRoute;


PrivateRoute.propTypes = {
    children:PropTypes.node
}