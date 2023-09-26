import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CartDetails = () => {
   const [data,setData]=useState({})
  
  const { id } = useParams();
console.log(id);
  const details = useLoaderData();
console.log(details);
useEffect(() => {
    const findCart = details?.find((item) => item.id === id);
    console.log(findCart);
    setData(findCart);
  }, [id, details]);
  console.log(data);

const handleDonate=(data)=>{
   
localStorage.setItem("donateData", JSON.stringify(data))
}

    return (
        <div className=''>

            <img  className='w-[600px]' src={data.picture} alt=""  />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <button onClick={()=>handleDonate(data)} className='btn p-3' style={{ backgroundColor: data?.category_bg ,color:data.text_and_button_bg}}>Price: ${data?.price}</button>
        </div>
    );
};

export default CartDetails;