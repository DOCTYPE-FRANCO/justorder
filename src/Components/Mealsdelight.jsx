import React from "react";
import Jollof from "../assets/jollofrice.jpg"
import FriedRice from "../assets/friedrice.jpg"

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
            description: "Juicy beef patty with melted cheese, lettuce, tomato, and special sauce on a toasted bun.",
            image: FriedRice,
            price: 4200,
        },
        {
            id: 3,
            name: "Shawarma Wrap",
            description: "Lebanese-style chicken shawarma with creamy garlic sauce and crispy veggies in a soft pita wrap.",
            image: "https://example.com/images/shawarma.jpg",
            price: 2800,
        },
        {
            id: 4,
            name: "Pepper Soup",
            description: "Hot and spicy Nigerian soup made with assorted meat and aromatic herbs.",
            image: "https://example.com/images/pepper-soup.jpg",
            price: 2500,
        },
        {
            id: 5,
            name: "Suya Platter",
            description: "Grilled spicy beef skewers served with onions, tomatoes, and yaji pepper mix.",
            image: "https://example.com/images/suya.jpg",
            price: 3000,
        },
        {
            id: 6,
            name: "Bread",
            description: "Classic Nigerian dish with smooth pounded yam and thick melon seed soup.",
            image: "https://example.com/images/pounded-yam.jpg",
            price: 400,
        },
    ];

    return(
        <div className="mt-32">
            <p className="text-4xl font-bold flex justify-center items-center">Meals Delight</p>

            <p className="text-3xl font-thin pl-32">Menu</p> 

            <div className="grid md:grid-cols-4 gap-4">
                {menu.map((item) => (
                    <div key={item.id} className="flex flex-col ml-4 w-[280px] h-[400px] rounded-2xl gap-3 bg-white shadow-2xl p-3">
                        <div className="flex justify-self-center items-center w-[90%] h-[30%] rounded-2xl overflow-hidden">
                            <img src={item.image} className="hover:scale-110 transition-all duration-500"  />
                        </div>
                        <p className="font-bold text-2xl">{item.name}</p>
                        <p className="text-gray-700 font-thin h-[70px]">{item.description}</p>
                        <p className="font-bold text-green-600">₦{item.price}</p>
                        <button className="flex justify-self-center justify-center items-center font-bold bg-green-600 w-[250px] h-[35px] text-white">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Mealsdelight;