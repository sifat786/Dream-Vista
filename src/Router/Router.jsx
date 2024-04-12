import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import { createBrowserRouter } from 'react-router-dom';
import Contact from '../../src/components/Contact/Contact';
import UpdateProfile from './../components/UpdateProfile/UpdateProfile';
import FAQ from './../components/FAQ/FAQ';
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';

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
          path: '/update',
          element: <UpdateProfile/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/faq',
          element: <FAQ/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
      ]
    },
]);

export default router;