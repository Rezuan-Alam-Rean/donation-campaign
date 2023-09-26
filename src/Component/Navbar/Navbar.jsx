import { Link } from "react-router-dom";
import logo from '../../assets/Logo.png'

const Navbar = () => {
    const navRoutes = (
        <>
        <li>
            <Link to="/">
            Home
            </Link>
        </li>
        <li>
            <Link to="/">
            Donation
            </Link>
        </li>
        <li>
            <Link to="/">
            Statistics
            </Link>
        </li>
        
        </>
    )
    return (
        <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
            {navRoutes}
            </ul>
          </div>
          <img className=" normal-case text-xl" src={logo}></img>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navRoutes}
          </ul>
        </div>

           
       
      </div>
        

    );
};

export default Navbar;