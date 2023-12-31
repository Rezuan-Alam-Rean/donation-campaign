import { useState } from "react";


const Banner = ({setSearchText,handleSearch}) => {

    return (
        <div>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/nj3bjRP/Rectangle-4281.png)'}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People </h1>
      
      <div className=" flex ">
                <input
                  onChange={(event) => setSearchText(event.target.value)}
                  type="text"
                  placeholder="Search here...."
                  className="border  p-2 bg-transparent border-cyan-100  pr-16 text-white::placeholder  placeholder-white w-full"
                  required
                />
                <button 
                  onClick={handleSearch}
                  className=" btn btn-error     "
                >
                  Search
                </button>
          </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;