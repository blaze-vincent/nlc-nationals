import Diner from "../components/diner";
import Layout from "../components/layout";

export default function Food(){

    const diners = [
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
        }
    ]

    return (<Layout>
        <h1>Food</h1>
        {diners.map( object => {
            return <Diner title={object.title} priceRange={object.priceRange} meals={object.meals}></Diner>
        })}
    </Layout>)
}