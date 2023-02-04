import "./CategoryCard.css"

function CategoryCard(props) {
    return (
        <div className="CategoryCard">
            <img src={props.image} alt="category_item" className="CategoryCard-image" />
            <p className="CategoryCard-text">{props.text}</p>
        </div>
    )
}

export default CategoryCard