import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider} from 'react-router-dom';
import router from './Router/Router';
import { ToastContainer } from 'react-toastify';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      theme="dark"
    />
  </React.StrictMode>,
)