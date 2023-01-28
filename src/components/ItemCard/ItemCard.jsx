import "./ItemCard.css"

function ItemCard(props) {
    return (
        <div className="ItemCard" data-hot={props.hot} data-discount={props.discount}>
            <img src={props.image} alt="Item" className="ItemCard-img" />
            <div className="ItemCard-description">
                <div className="ItemCard-name">{props.name}</div>
                <div className="ItemCard-price">{props.price}</div>
            </div>
        </div>
    )
}

export default ItemCard