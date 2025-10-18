import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Hamburger , MenuIcon, XIcon} from "lucide-react";
function Navbar(){
    const [nav , setNav] = useState(false);
    return(
        <div className="">
            <div className="hidden md:flex flex-row gap-10 justify-center items-center md:pr-10">
                <Link to="/">
                    <p className="font-bold cursor-pointer hover:text-gray-600 active:text-gray-800">Home</p>
                </Link>
                <p className="font-bold cursor-pointer hover:text-gray-600 active:text-gray-800">Orders</p>
                <p className="font-bold cursor-pointer hover:text-gray-600 active:text-gray-800">Profile</p>
                <p className="font-bold cursor-pointer hover:text-gray-600 active:text-gray-800">Help</p>
            </div>

            <div onClick={()=> setNav(!nav)} className="md:hidden ">
                {nav ? <XIcon size={33} /> : <MenuIcon size={33}/> }
            </div>

            {nav && (
                <div onClick={()=> setNav(false)} className="md:hidden flex flex-col gap-7 justify-center items-center fixed w-[150px] top-16 right-0.5 py-4 bg-green-500/95 backdrop-blur-sm transition-all duration-500 rounded-2xl">
                    <Link to="/">
                        <p className="text-white font-bold cursor-pointer hover:text-gray-600 active:text-gray-800">Home</p>
                    </Link>
                    <p className="text-white font-bold cursor-pointer hover:text-gray-600 active:text-gray-800">Orders</p>
                    <p className="text-white font-bold cursor-pointer hover:text-gray-600 active:text-gray-800">Profile</p>
                    <p className="text-white font-bold cursor-pointer hover:text-gray-600 active:text-gray-800">Help</p>
                </div>
            )}
        </div>
    );
}

export default Navbar;