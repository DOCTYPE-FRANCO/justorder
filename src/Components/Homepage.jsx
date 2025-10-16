import React from "react";
import Herosection from "./Herosection";
import Heritage from "../assets/Heritage.jpg"
import HisGrace from "../assets/HisGrace.jpg"
import MealsDelight from "../assets/mealsD.jpg"

function Homepage(){
    return(
        <div className="">
            <Herosection />

            <div className="flex justify-center mt-24 text-4xl text-green-700 font-bold ">Campus Cafeterias </div>

            <div className="flex md:flex-row gap-10 justify-center mt-10">
                <div className="flex flex-col gap-2 bg-white justify-center items-center w-[200px] h-[260px] rounded-sm shadow-2xl shadow-gray-500">
                    <img src={MealsDelight} className="w-[65%] rounded-xl" />
                    <p className="text-xl font-bold">Meals Delights</p>
                    <button className="bg-green-600 w-[100px] h-[25px] rounded-sm text-white mt-2 hover:scale-105 active:bg-gray-800 transition-all duration-500">View Menu</button>
                </div>

                <div className="flex flex-col gap-2 bg-white justify-center items-center w-[200px] h-[260px] rounded-sm shadow-2xl shadow-gray-500">
                    <img src={HisGrace} className="w-[65%] rounded-xl" />
                    <p className="text-xl font-bold">His Grace</p>
                    <button className="bg-green-600 w-[100px] h-[25px] rounded-sm text-white mt-2 hover:scale-105 active:bg-gray-800 transition-all duration-500">View Menu</button>
                </div>

                <div className="flex flex-col gap-2 bg-white justify-center items-center w-[200px] h-[260px] rounded-sm shadow-2xl shadow-gray-500">
                    <img src={Heritage} className="w-[65%] rounded-xl" />
                    <p className="text-xl font-bold">Heritage</p>
                    <button className="bg-green-600 w-[100px] h-[25px] rounded-sm text-white mt-2 hover:scale-105 active:bg-gray-800 transition-all duration-500">View Menu</button>
                </div>
            </div>
        </div>
    );
}
export default Homepage;