import React from "react";
import Logo from "../assets/Logo.jpg"
import Navbar from "./Navbar";

function Header(){
    return(
        <div className="z-50 mb-32 top-5 flex flex-row fixed justify-self-center justify-between items-center w-[85vw] backdrop-blur-sm">
            <img src={Logo} className="w-[90px]" />
            <Navbar />
        </div>

    );
}

export default Header;