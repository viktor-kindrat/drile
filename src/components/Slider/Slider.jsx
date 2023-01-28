import "./Slider.css"
import nextBtnImage from "./images/next.svg"
import previousBtnImage from "./images/previous.svg"
import sliderImage from "../images/slider/1.webp"

import ActionBtn from "../ActionBtn/ActionBtn"

function Slider() {
    return (
        <div className="Slider">
            <button className="Slider-button">
                <img src={previousBtnImage} alt="previous" className="Slider-button-img" />
            </button>
            <div className="Slider-items-container">
                <div className="Slider-item">
                    <img src={sliderImage} alt="slider 1" className="Slider-image" />
                    <div className="Slider-column">
                        <h2 className="Slider-headline">Get ready for Our stylist chair</h2>
                        <ActionBtn content="Shop now"/>
                    </div>
                </div>
            </div>
            <button className="Slider-button">
                <img src={nextBtnImage} alt="next" className="Slider-button-img" />
            </button>
        </div>
    )
}

export default Slider