import React from "react";
import Herosection from "./Herosection";
function Homepage(){
    return(
        <div>
            <Herosection />

            <div>
                <div className="bg-black w-[200px] h-[250px] rounded-sm shadow-2xl shadow-gray-500">
                    <p>Meals Delights</p>
                </div>
            </div>
        </div>
    );
}
export default Homepage;