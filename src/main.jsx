import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import toast, { Toaster } from 'react-hot-toast';
import router from './router'
import {
  
  RouterProvider,
} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster/>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
