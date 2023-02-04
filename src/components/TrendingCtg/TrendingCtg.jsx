import "./TrendingCtg.css"
import categories from "../../data/category.json"
import goods from "../../data/trending.json"

import CategoryCard from "../CategoryCard/CategoryCard"
import ItemCard from "../ItemCard/ItemCard"

import nextBtn from "./images/right.svg"
import prevBtn from "./images/left.svg"

function TrendingCtg(props) {
    return (
        <section className="TrendingCtg">
            <h2 className="TrendingCtg-headline">TRENDING CATEGORIES</h2>
            <div className="TrendiongCtg-block">
                <button className="TrendingCtg-btn">
                    <img src={prevBtn} alt="" />
                </button>
                <div className="TrendiongCtg-container">
                    {
                        categories.map(ctg => 
                            <CategoryCard text={ctg.name} image={ctg.image}/>    
                        )
                    }
                </div>
                <button className="TrendingCtg-btn">
                    <img src={nextBtn} alt="" />
                </button>
            </div>
            <div className="TrendiongCtg-cards">
                {
                    goods.map(item => 
                        <ItemCard image={item.image} price={item.price} name={item.name}/>    
                    )
                }
            </div>
        </section>
    )
}

export default TrendingCtg