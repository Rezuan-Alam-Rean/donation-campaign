import React from 'react';

const Donate = () => {
  
    let data = {}
    const storedData = localStorage.getItem("donateData")
    if(storedData){
        data=JSON.parse(storedData)
    }
   
  
  console.log(data);
    return (
        <div>
           <div className="card card-side  shadow-xl">
  <figure><img src={data?.picture} alt="Movie"/></figure>
  <div className="card-body">
  <p className={`p-2 max-w-max `} style={{ backgroundColor: data?.category_bg ,color:data?.text_and_button_bg}}>{data?.category}</p>
                <h2 className="card-title" style={{color:data?.text_and_button_bg}}>{data?.title}</h2>
                <p className=' p-3 max-w-max ' style={{ backgroundColor: data?.category_bg ,color:data.text_and_button_bg}}>Price: ${data?.price}</p>
    <div className="">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Donate;