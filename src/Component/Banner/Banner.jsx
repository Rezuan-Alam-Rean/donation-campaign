import { useState } from "react";


const Banner = ({setSearchText,handleSearch}) => {

    return (
        <div>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className="relative ms-2 lg:inline-block hidden">
                <input
                  onChange={(event) => setSearchText(event.target.value)}
                  type="text"
                  placeholder="Search"
                  className="border rounded-2xl p-2 bg-transparent border-cyan-100  pr-16 text-white::placeholder  placeholder-white w-full"
                  required
                />
                <button
                  onClick={handleSearch}
                  className=" bg-transparent hover:none   rounded-2xl  "
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