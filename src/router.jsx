import {  createBrowserRouter } from "react-router-dom";

import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import Donate from "./Pages/Donate/Donate";
import Statistics from "./Pages/Statistics/Statistics";
import CartDetails from "./Pages/CartDetails/CartDetails";



const myCreatedRoute =  createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout>,
       
        children : [
            {
                path : "/",
                element: <Home></Home>,
                
            },
            {
                path : "/donate",
                element: <Donate></Donate>,
                
            },
            {
                path : "/statistics",
                element: <Statistics></Statistics>,
               
                
            },
            {
                path : "/details/:id",
                element: <CartDetails></CartDetails>,
                loader : ()=> fetch(`/fakedata.json`)
            },
          
        ]

    }
])

export default myCreatedRoute;