import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Mainlayout from './pages/Mainlayout';

import Allvisas from './Components/Allvisas';
import AddVisa from './Components/AddVisa';
import Myaddedvisa from './Components/Myaddedvisa';
import Myvisaapp from './Components/Myvisaapp';
import Auth from './Components/Auth';
import SignUp from './Components/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/visas',
        element: <Allvisas></Allvisas>,
        loader: ()=> fetch('http://localhost:3000/visas')
      },
      {
        path: '/add',
        element: <AddVisa></AddVisa>
      },
      {
        path: '/my-visas',
        element: <Myaddedvisa></Myaddedvisa>,
        loader: ()=> fetch('http://localhost:3000/my-visas')
      },
      {
        path: '/visa-app/:id',
        
        element: <Myvisaapp></Myvisaapp>,
        
      },
      {
        path: '/login',
        element: <SignUp></SignUp>
      },
      
    ]
  }
  
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
