import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';

const CartDetails = () => {
  const [data, setData] = useState({})

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





  const handleAddToFavorites = () => {
    const addedFavoritesArray = [];

    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));


    if (!favoriteItems) {
      addedFavoritesArray.push(data);
      localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
      toast.success("Submitted")
    }

    else {


      const isExits = favoriteItems.find((data) => data.id === id);


      if (!isExits) {

        addedFavoritesArray.push(...favoriteItems, data);
        localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
      
        toast.success("-Donation store")

      } else {
       
        toast.error("No you can not repate")

      }




    }




  };



  return (
    <div className=' text-center '>

      <img className='w-[800px]  m-auto ' src={data.picture} alt=""  />
      <button onClick={handleAddToFavorites} className='btn p-3 mt-4 ' style={{ backgroundColor: data?.category_bg, color: data.text_and_button_bg }}>Price: ${data?.price}</button>
      <h1 className='text-3xl font-bold mt-5 mb-5'>{data.title}</h1>
      <p>{data.description}</p>
      
    </div>
  );
};

export default CartDetails;