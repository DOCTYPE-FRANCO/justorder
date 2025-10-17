import React from "react";
import Jollof from "../assets/jollofrice.jpg"
import FriedRice from "../assets/friedrice.jpg"
import Sharwama from "../assets/sharwama.jpg"
import Plantain from "../assets/plantain.webp"
import Chicken  from "../assets/Chicken.jpg"
import Bread from "../assets/bread.jpg"
function Mealsdelight(){

    const menu = [
        {
            id: 1,
            name: "Jollof Rice & Chicken",
            description: "Per Portion",
            image: Jollof,
            price: 3500,
        },

        {
            id: 2,
            name: "Fried Rice",
            description: "Per Portion",
            image: FriedRice,
            price: 4200,
        },
        {
            id: 3,
            name: "Shawarma Wrap",
            description: "Lebanese-style chicken shawarma with creamy garlic sauce and crispy veggies in a soft pita wrap.",
            image: Sharwama,
            price: 2500,
        },
        {
            id: 4,
            name: "Plantain",
            description: "Three (3) Pieces",
            image: Plantain,
            price: 200,
        },
        {
            id: 5,
            name: "Chicken",
            description: "Grilled spicy beef skewers served with onions, tomatoes, and yaji pepper mix.",
            image: Chicken,
            price: 2000,
        },
        {
            id: 6,
            name: "Bread",
            description: "Meals delight Bread",
            image: Bread,
            price: 400,
        },
    ];

    return(
        <div className="mt-32">
            <p className="text-4xl font-bold flex justify-center items-center">Meals Delight</p>

            <p className="text-3xl mt-7 mb-5 pl-32"><span className="text-7xl font-bold text-green-600">.</span> Menu</p> 

            <div className="grid md:grid-cols-4 gap-4">
                {menu.map((item) => (
                    <div key={item.id} className="flex flex-col ml-4 w-[280px] h-[400px] rounded-2xl gap-3 bg-white shadow-2xl p-3">
                        <div className="flex justify-self-center items-center w-[90%] h-[30%] rounded-2xl overflow-hidden">
                            <img src={item.image} className="hover:scale-110 transition-all duration-500"  />
                        </div>
                        <p className="font-bold text-2xl">{item.name}</p>
                        <p className="text-gray-700 font-thin h-[70px]">{item.description}</p>
                        <p className="font-bold text-2xl mb-2 text-green-600">₦{item.price}</p>
                        <button className="flex justify-self-center justify-center items-center font-bold bg-green-600 w-[250px] h-[35px] text-white">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Mealsdelight;