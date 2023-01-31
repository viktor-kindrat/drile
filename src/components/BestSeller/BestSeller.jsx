import "./BestSeller.css"
import data from "../../data/items.json"
import ItemCard from "../ItemCard/ItemCard"

console.log(data)

function BestSeller(){
    return(
        <div className="BestSeller">
            <h3 className="BestSeller-headline">Best Seller Items</h3>
            <div className="BestSeller-container">
                {
                    data.map((item, index) => 
                        <ItemCard discount={item.discount} hot={item.hot} image={item.image} name={item.name} price={item.price}/>
                    )
                }
            </div>
        </div>
    )
}

export default BestSeller