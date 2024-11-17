import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './MainLayOuut/MainLayOut';
import Home from './Pages/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import SignUp from './Components/SignUp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut/>,
    children: [
      {
        path: '/',
        element: <Home/>,

      },
      {
        path: 'login',
        element: <Login/>,
      },
      {
        path: 'Register',
        element: <Register/>
      },
      {
        path:'signUp',
        element: <SignUp/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
