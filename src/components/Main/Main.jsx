import "./Main.css"
import Slider from "../Slider/Slider"
import BestSeller from '../BestSeller/BestSeller'

function Main () {
    return(
        <main className="Main">
            <Slider/>
            <BestSeller/>
        </main>
    )
}

export default Main