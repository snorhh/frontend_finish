import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App';
import Error from './components/Error';
import Customers from './components/Customers';
import Trainings from './components/Trainings';

// main code from https://github.com/juhahinkula/reactrouter/blob/main/src/main.jsx
// Navigate: https://refine.dev/blog/navigate-react-router-redirect/#how-to-use-the-navigate-component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Navigate to="customers"  replace={true} /> ,
        
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "trainings",
        element: <Trainings />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);