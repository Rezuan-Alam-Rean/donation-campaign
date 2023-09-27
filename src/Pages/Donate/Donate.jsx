
import React, { useEffect, useState } from "react";


const Donate = () => {

  const [favorites, setFavorites] = useState([]);
  const [noFound, setNofound] = useState(false);
  const [isShow, setIsShow] = useState(false)

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

    if (favoriteItems) {
      setFavorites(favoriteItems);

      const total = favoriteItems.reduce((preValue, currentItem) => preValue + currentItem.price, 0)

      console.log(total);

      setTotalPrice(total)


    } else {
      setNofound("No Data Found");
    }
  }, []);

  console.log(favorites);

  const handleRemove = () => {
    localStorage.clear();
    setFavorites([]);
    setNofound("No Data Found");
  };


  console.log(isShow);


  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          {/* {favorites.length > 0 && (
            <div>
              <button
                onClick={handleRemove}
                className="px-5 bg-green-200 block mx-auto"
              >
                Deleted All favorites
              </button>

              <h1>Total price : {totalPrice}</h1>
            </div>
          )} */}

          <div className="grid grid-cols-2 gap-5">
            {
              isShow ? favorites.map((data) => (
                <div className="card card-side  shadow-xl">
                  <figure><img src={data?.picture} alt="Movie" /></figure>
                  <div className="card-body">
                    <p className={`p-2 max-w-max `} style={{ backgroundColor: data?.category_bg, color: data?.text_and_button_bg }}>{data?.category}</p>
                    <h2 className="card-title" style={{ color: data?.text_and_button_bg }}>{data?.title}</h2>
                    <p className=' p-3 max-w-max ' style={{ backgroundColor: data?.category_bg, color: data.text_and_button_bg }}>Price: ${data?.price}</p>
                    <div className="">
                      <button className="btn btn-primary">View Details</button>
                    </div>
                  </div>
                </div>
              ))

                : favorites.slice(0, 4).map((data) => (
                  <div className="card card-side  shadow-xl">
                    <figure><img src={data?.picture} alt="Movie" /></figure>
                    <div className="card-body">
                      <p className={`p-2 max-w-max `} style={{ backgroundColor: data?.category_bg, color: data?.text_and_button_bg }}>{data?.category}</p>
                      <h2 className="card-title" style={{ color: data?.text_and_button_bg }}>{data?.title}</h2>
                      <p className=' p-3 max-w-max ' style={{ backgroundColor: data?.category_bg, color: data.text_and_button_bg }}>Price: ${data?.price}</p>
                      <div className="">
                        <button className="btn btn-primary">View Details</button>
                      </div>
                    </div>
                  </div>
                ))
            }
          </div>

          {favorites.length > 2 && <button  onClick={() => setIsShow(!isShow)} className="px-5 btn btn-secondary  block mx-auto mt-5 mb-10">
            {isShow ? "See less" : "See more"}
          </button>}
        </div>
      )}
    </div>
  );
};




export default Donate;