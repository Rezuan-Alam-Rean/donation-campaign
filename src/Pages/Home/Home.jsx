import { useEffect, useState } from "react";
import Cart from "../../Component/Cart/Cart";
import Banner from "../../Component/Banner/Banner";


const Home = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('/fakedata.json')
        .then((res)=>res.json())
        .then((data)=>setData(data));
        console.log(data);
    },[])
    const [searchText,setSearchText]=useState("")
    const handleSearch = () => {
        
        const filteredDonations = data.filter((donation) =>
          donation.category.toLowerCase().includes(searchText.toLowerCase())
        );
        setData(filteredDonations);
      };
    return (
        <div>
            <Banner setSearchText={setSearchText} handleSearch={handleSearch}></Banner>
           <div className=" mt-10 grid lg:grid-cols-4 md:grid-cols-2 gap-5">
{
    data?.map((d,i)=><Cart key={i} d={d}></Cart>)
}
           </div>
        </div>
    );
};

export default Home;