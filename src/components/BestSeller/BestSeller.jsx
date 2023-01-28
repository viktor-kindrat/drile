import "./BestSeller.css"

import ItemCard from "../ItemCard/ItemCard"
import BestSellerImage1 from "./images/1.png"
import BestSellerImage2 from "./images/2.png"
import BestSellerImage3 from "./images/3.png"
import BestSellerImage4 from "./images/4.png"
import BestSellerImage5 from "./images/5.png"
import BestSellerImage6 from "./images/6.png"
import BestSellerImage7 from "./images/7.png"

function BestSeller(){
    return(
        <div className="BestSeller">
            <h3 className="BestSeller-headline">Best Seller Items</h3>
            <div className="BestSeller-container">
                <ItemCard discount="-5%" hot="true" image={BestSellerImage1} name="Metal Vintage Pendant" price="$79.00"></ItemCard>
                <ItemCard hot="false" image={BestSellerImage2} name="Klosh Table Clock" price="$99.00"></ItemCard>
                <ItemCard hot="false" image={BestSellerImage3} name="Arne Dining Chair" price="$350.00"></ItemCard>
                <ItemCard hot="true" image={BestSellerImage4} name="Klosh Wall Clock" price="$80.00 – $129.00"></ItemCard>
                <ItemCard discount="-20%" hot="true" image={BestSellerImage5} name="Modern Outdoor Chair" price="$79.00"></ItemCard>
                <ItemCard hot="false" image={BestSellerImage6} name="Vipp Wool Pillow" price="$99.00"></ItemCard>
                <ItemCard discount="-17%" hot="true" image={BestSellerImage7} name="Modern Bedroom Storage" price="$499.00"></ItemCard>
            </div>
        </div>
    )
}

export default BestSeller