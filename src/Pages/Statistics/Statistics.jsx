
import React, { useEffect, useState } from "react";


// import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    Tooltip,
    PieChart,
    Pie,
    ResponsiveContainer,
    Cell
  
  } from "recharts";

const Statistics = () => {

    const [favorites, setFavorites] = useState([]);
    // const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem("favorites"));


        setFavorites(favoriteItems);

    //   const total = favoriteItems.reduce((preValue, currentItem) => preValue + currentItem.price, 0)

      

    //   setTotalPrice(total)


    },[]);
   

 const donate = favorites.length;
 const percent =  (donate*100)/12

const donates = 
    [
        {
            "id": 2,
            "name": "My Donate",
            "fill": "#FF444A",
            "data": percent,
            
          },
        {
          "id": 1,
          "name": "Total Donate",
          "fill": "#00C49F",
          "data": 100-percent
        }
     
       
    ]


//   console.log(donates);

    return (

     <div>

<div className='bg-gray-200'>
                         

                         <h1 className='text-3xl font-bold text-center  text-gray-700'>Donation</h1>
                         <p className='text-center font-bold text-2xl mt-10'>Pie Chart</p>
                         <ResponsiveContainer width="100%" height={500} >
                     <PieChart width={1000} height={500}>
                       <Pie
                        
                         
                         data={donates}
                         cx="50%"
                         cy="50%"
                         labelLine={false}
                      
                         outerRadius={80}
                         fill="#8884d8"
                         dataKey="data"
                       
                       >
               {donates.map((entry, index) => (
                 <Cell key={`cell-${index}`} fill={entry.fill} />
               ))}
                         </Pie>
                       <Tooltip></Tooltip>
                     </PieChart>
                     </ResponsiveContainer>
             
                     </div>

<div>
    <p>My donation</p>
</div>

     </div>   
      
    );
};

export default Statistics;