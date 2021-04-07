import Diner from "../components/diner";
import Layout from "../components/layout";

export default function Food(){

    const diners = [
        {
            title: "Gaston's Tavern",
            priceRange: "$20 to $30",
            meals: [
                {
                    imgUrl: "/gt-0.png",
                    name: "Chocolate Croissant and Macarons"
                },
                {
                    imgUrl: "/gt-1.png",
                    name: "Turkey Leg"
                },
                {
                    imgUrl: "/gt-2.png",
                    name: "Beef Stew"
                },
            ]
        },
        {
            title: "The Boathouse",
            priceRange: "$30 to $50",
            meals: [
                {
                    imgUrl: "/boat-0.png",
                    name: "Filet Mignon"
                },
                {
                    imgUrl: "/boat-1.png",
                    name: "Maine Lobster Bisque"
                },
                {
                    imgUrl: "/boat-2.png",
                    name: "Key Lime Pie in a Mason Jar"
                },
            ]
        },
        {
            title: "Rock Brews - Kissimmee",
            priceRange: "$20 to $30",
            meals: [
                {
                    imgUrl: "/rbk-0.png",
                    name: "Blackened Chicken Pasta"
                },
                {
                    imgUrl: "/rbk-1.png",
                    name: "Sweet Heat Fried Chicken"
                },
                {
                    imgUrl: "/rbk-2.png",
                    name: "Giant Soft Bavarian Pretzel"
                },
            ]
        },
        {
            title: "Chef Art Smith's Homecoming",
            priceRange: "$20 to $30",
            meals: [
                {
                    imgUrl: "/cash-0.png",
                    name: "Fried chicken sandwich"
                },
                {
                    imgUrl: "/cash-1.png",
                    name: "Deviled eggs"
                },
                {
                    imgUrl: "/cash-2.png",
                    name: "Humming Bird cake"
                },
            ]
        },
        {
            title: "The Wharf at Sunset Walk",
            priceRange: "$20 to $30",
            meals: [
                {
                    imgUrl: "/wasw-0.png",
                    name: "Bipolar Burger"
                },
                {
                    imgUrl: "/wasw-1.png",
                    name: "New England Clam Chowder"
                },
                {
                    imgUrl: "/wasw-2.png",
                    name: "Ahi Tuna Avocado Stack"
                },
            ]
        },
        {
            title: "Sanaa",
            priceRange: "$20 to $30",
            meals: [
                {
                    imgUrl: "/s-0.png",
                    name: "Braised Beef and Spicy Durban Sheep"
                },
                {
                    imgUrl: "/s-1.png",
                    name: "Paneer Tikka"
                },
            ]
        },
    ]

    return (<Layout>
        <h1>Food</h1>
        {diners.map( object => {
            return <Diner title={object.title} priceRange={object.priceRange} meals={object.meals}></Diner>
        })}
    </Layout>)
}