import "./DealCard.css"

function DealCard(props) {
    return (
        <div className="DealCard">
            <img src={props.image} alt="deal example" className="DealCard-img" />
        </div>
    )
}

export default DealCard