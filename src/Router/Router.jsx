import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import { createBrowserRouter } from 'react-router-dom';
import Contact from '../../src/components/Contact/Contact';
import UpdateProfile from './../components/UpdateProfile/UpdateProfile';
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';
import EstateDetails from './../components/EstateDetails/EstateDetails';
import PrivateRoute from './PrivateRoute';
import Agents from './../components/Agents/Agents';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/agents',
          element: <PrivateRoute><Agents/></PrivateRoute>
        },
        {
          path: '/update',
          element: <PrivateRoute><UpdateProfile/></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/estateDetails/:id',
          element: <PrivateRoute><EstateDetails/></PrivateRoute>
        }
      ]
    },
]);

export default router;