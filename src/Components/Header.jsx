import React from "react";
import Logo from "../assets/Logo.jpg"
function Header(){
    return(
        <div className="z-50 top-5 fixed justify-self-center items-center w-[85vw] backdrop-blur-sm">
            <img src={Logo} className="w-[90px]" />
        </div>
    );
}

export default Header;