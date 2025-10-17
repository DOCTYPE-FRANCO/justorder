import React from "react";
import Herosection from "./Herosection";
import Heritage from "../assets/Heritage.jpg"
import HisGrace from "../assets/HisGrace.jpg"
import MealsDelight from "../assets/mealsD.jpg"
import { Link } from "react-router-dom";

function Homepage(){
    return(
        <div className="">
            <Herosection />

            <div className="flex justify-center mt-24 text-4xl text-green-700 font-bold ">Campus Cafeterias </div>

            <div className="flex flex-col md:flex-row gap-10 justify-center items-center mt-10">
                <Link to="/mealsd">
                    <div className="flex flex-col gap-2 bg-white justify-center items-center w-[270px] h-[350px] md:w-[200px] md:h-[280px] rounded-sm shadow-2xl shadow-gray-500">
                        <div className="w-[65%] h-[62%] rounded-xl overflow-hidden">
                            <img src={MealsDelight} className="fit hover:scale-110 transition-all duration-300" />
                        </div>
                        <p className="text-xl  font-bold">Meals Delights</p>
                        <button className="bg-green-600 w-[150px] h-[30px] md:w-[100px] md:h-[25px] rounded-sm text-white mt-2 hover:scale-105 active:bg-gray-800 transition-all duration-500">View Menu</button>
                    </div>
                </Link>

                <div className="flex flex-col gap-2 bg-white justify-center items-center w-[270px] h-[350px] md:w-[200px] md:h-[280px] rounded-sm shadow-2xl shadow-gray-500">
                    <div className="w-[65%] h-[62%] rounded-xl overflow-hidden">
                        <img src={Heritage} className="fit hover:scale-110 transition-all duration-300" />
                    </div>
                    <p className="text-xl font-bold">Heritage</p>
                    <button className="bg-green-600 w-[150px] h-[30px] md:w-[100px] md:h-[25px] rounded-sm text-white mt-2 hover:scale-105 active:bg-gray-800 transition-all duration-500">View Menu</button>
                </div>

                <div className="flex flex-col gap-2 bg-white justify-center items-center w-[270px] h-[350px] md:w-[200px] md:h-[280px] rounded-sm shadow-2xl shadow-gray-500">
                    <div className="w-[65%] h-[62%] rounded-xl overflow-hidden">
                        <img src={HisGrace} className="fit hover:scale-110 transition-all duration-300" />
                    </div>
                    <p className="text-xl font-bold">His Grace</p>
                    <button className="bg-green-600 w-[150px] h-[30px] md:w-[100px] md:h-[25px] rounded-sm text-white mt-2 hover:scale-105 active:bg-gray-800 transition-all duration-500">View Menu</button>
                </div>    
            </div>
        </div>
    );
}
export default Homepage;