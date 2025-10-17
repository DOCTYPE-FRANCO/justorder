import React from "react";
import Jollof from "../assets/"

function Mealsdelight(){

    const menu = [
        {
            id: 1,
            name: "Jollof Rice & Chicken",
            description: "Spicy West African jollof rice served with grilled chicken and fried plantain.",
            image: "",
            price: 3500,
        },

        {
            id: 2,
            name: "Fried Rice",
            description: "Juicy beef patty with melted cheese, lettuce, tomato, and special sauce on a toasted bun.",
            image: "https://example.com/images/beef-burger.jpg",
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
            name: "Pounded Yam & Egusi Soup",
            description: "Classic Nigerian dish with smooth pounded yam and thick melon seed soup.",
            image: "https://example.com/images/pounded-yam.jpg",
            price: 4000,
        },
    ];

    return(
        <div className="mt-32">
            <p className="text-4xl font-bold flex justify-center items-center">Meals Delight</p>

            <p className="text-3xl font-thin pl-32">Menu</p> 

            <div>
                {menu.map((item) => (
                    <div key={item.id} className="w-[300px] h-[500px] ">

                    </div>
                ))}
            </div>
        </div>
    );
}
export default Mealsdelight;