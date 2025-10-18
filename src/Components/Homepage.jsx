import React from "react";
import Herosection from "./Herosection";
import Heritage from "../assets/Heritage.jpg"
import HisGrace from "../assets/HisGrace.jpg"
import MealsDelight from "../assets/mealsD.jpg"
import { Link } from "react-router-dom";
import Dominos from "../assets/dominos.png"
import ChickenR from "../assets/ChickenRepublic.svg"
import MegaChicken from "../assets/megachicken.png"
import Theplace from "../assets/theplace.png"


function Homepage(){

    const featuredRestaurants = [
        {
            id: 1,
            image: Dominos,
            name: "Domino's Pizza",
            motto: "Deliciously fast, always fresh 🍕",
            available: true
        },

        {
            id: 2,
            image: ChickenR,
            name: "Chicken Republic",
            motto: "Taste the goodness of Nigeria 🇳🇬",
            available: true
        },
        {
            id: 3,
            image: Theplace,
            name: "The Place Restaurant",
            motto: "Eat. Drink. Lounge. Repeat.",
            available: false
        },
        {
            id: 4,
            image: MegaChicken,
            name: "Mega Chicken",
            motto: "Wrap your hunger away 🌯",
            available: true
        },
        
    ];


    return(
        <div className="">
            <Herosection />

            <div className="flex justify-center mt-24 text-4xl text-green-700 font-bold" id="CampusCaf">Featured Resturants</div>

            <div className="flex flex-col md:flex-row gap-10 justify-center items-center mt-10">
                {featuredRestaurants.map((featured) => (
                    <div key={featured.id} className="flex flex-col justify-center items-center w-[270px] h-[350px] md:w-[200px] md:h-[280px] rounded-sm shadow-2xl shadow-gray-500">
                        <p></p>
                        <div className="w-[55%] h-[62%] rounded-xl overflow-hidden">
                            <img src={featured.image}/>
                        </div>
                        <p className="font-bold text-2xl">{featured.name}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-24 text-4xl text-green-700 font-bold" id="CampusCaf">Campus Cafeterias </div>

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

                <Link to="/heritage">
                    <div className="flex flex-col gap-2 bg-white justify-center items-center w-[270px] h-[350px] md:w-[200px] md:h-[280px] rounded-sm shadow-2xl shadow-gray-500">
                        <div className="w-[65%] h-[62%] rounded-xl overflow-hidden">
                            <img src={Heritage} className="fit hover:scale-110 transition-all duration-300" />
                        </div>
                        <p className="text-xl font-bold">Heritage</p>
                        <button className="bg-green-600 w-[150px] h-[30px] md:w-[100px] md:h-[25px] rounded-sm text-white mt-2 hover:scale-105 active:bg-gray-800 transition-all duration-500">View Menu</button>
                    </div>
                </Link>

                <Link to="/hisgrace">
                    <div className="flex flex-col gap-2 bg-white justify-center items-center w-[270px] h-[350px] md:w-[200px] md:h-[280px] rounded-sm shadow-2xl shadow-gray-500">
                        <div className="w-[65%] h-[62%] rounded-xl overflow-hidden">
                            <img src={HisGrace} className="fit hover:scale-110 transition-all duration-300" />
                        </div>
                        <p className="text-xl font-bold">His Grace</p>
                        <button className="bg-green-600 w-[150px] h-[30px] md:w-[100px] md:h-[25px] rounded-sm text-white mt-2 hover:scale-105 active:bg-gray-800 transition-all duration-500">View Menu</button>
                    </div>    
                </Link>
            </div>
        </div>
    );
}
export default Homepage;