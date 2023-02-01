import "./ItemCard.css"

import arrows from "./images/circleArrow.svg"
import heart from "./images/heart.svg"
import cart from "./images/cart.svg"

function ItemCard(props) {
    return (
        <div className="ItemCard" data-hot={props.hot} data-discount={props.discount}>
            <img src={props.image} alt="Item" className="ItemCard-img" />
            <div className="ItemCard-description">
                <div className="ItemCard-name">{props.name}</div>
                <div className="ItemCard-price">{props.price}</div>
            </div>
            <div className="ItemCard-btn-menu">
                <button className="ItemCard-btn">
                    <img src={arrows} alt="swipe" className="ItemCart-img" />
                </button>
                <button className="ItemCard-btn">
                    <img src={heart} alt="swipe" className="ItemCart-img" />
                </button>
                <button className="ItemCard-btn">
                    <img src={cart} alt="swipe" className="ItemCart-img" />
                </button>
            </div>
        </div>
    )
}

export default ItemCard