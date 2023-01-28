import "./Main.css"
import Slider from "../Slider/Slider"
import BestSeller from '../BestSeller/BestSeller'
import Deal from "../Deal/Deal"

function Main () {
    return(
        <main className="Main">
            <Slider/>
            <BestSeller/>
            <Deal/>
        </main>
    )
}

export default Main