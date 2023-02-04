import "./Main.css"
import Slider from "../Slider/Slider"
import BestSeller from '../BestSeller/BestSeller'
import Deal from "../Deal/Deal"
import TrendingCtg from "../TrendingCtg/TrendingCtg"

function Main () {
    return(
        <main className="Main">
            <Slider/>
            <BestSeller/>
            <Deal/>
            <TrendingCtg/>
        </main>
    )
}

export default Main