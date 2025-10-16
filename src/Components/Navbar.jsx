import React from "react";
function Navbar(){
    return(
        <div className="">
            <div className="flex flex-row gap-10 justify-center items-center pr-10">
                <p className="font-bold cursor-pointer hover:text-gray-600 active:text-gray-800">Home</p>
                <p className="font-bold cursor-pointer hover:text-gray-600 active:text-gray-800">Orders</p>
                <p className="font-bold cursor-pointer hover:text-gray-600 active:text-gray-800">Profile</p>
                <p className="font-bold cursor-pointer hover:text-gray-600 active:text-gray-800">Help</p>
            </div>
        </div>
    );
}

export default Navbar;