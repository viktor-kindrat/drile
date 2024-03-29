import "./Footer.css"
import Logo from "../Logo/Logo"
import background from "./images/background.webp"
import facebookIcon from "./images/facebook.svg"
import instagramIcon from "./images/instagram.svg"
import twitterIcon from "./images/twitter.svg"

function Footer () {
    return(
        <footer className="Footer" style={
            {
                background: `linear-gradient(to right, #ffffffB8, #ffffffB8), url(${background}) no-repeat center`,
                backgroundSize: "100%"
            }
        }>
            <Logo/>
            <div className="Footer-row">
                <div className="Footer-column">
                    <h2 className="Footer-headline">About us</h2>
                    <div className="Footer-link">About Us</div>
                    <div className="Footer-link">Contact Us</div>
                    <div className="Footer-link">Privacy Policy</div>
                    <div className="Footer-link">Terms of Service</div>
                </div>
                <div className="Footer-column">
                    <h2 className="Footer-headline">COMPANY</h2>
                    <div className="Footer-link">About Us</div>
                    <div className="Footer-link">Contact Us</div>
                    <div className="Footer-link">Privacy Policy</div>
                    <div className="Footer-link">Terms of Service</div>
                </div>
                <div className="Footer-column">
                    <h2 className="Footer-headline">USEFUL LINKS</h2>
                    <div className="Footer-link">About Us</div>
                    <div className="Footer-link">Contact Us</div>
                    <div className="Footer-link">Privacy Policy</div>
                    <div className="Footer-link">Terms of Service</div>
                </div>
                <div className="Footer-column">
                    <h2 className="Footer-headline">FOLLOW US</h2>
                    <div className="Footer-link"><img src={facebookIcon} alt="social media icon" className="Footer-icon" /> Facebook</div>
                    <div className="Footer-link"><img src={twitterIcon} alt="social media icon" className="Footer-icon" /> Twitter</div>
                    <div className="Footer-link"><img src={instagramIcon} alt="social media icon" className="Footer-icon" /> Instagram</div>
                </div>
            </div>
            <div className="Footer-copy">© Copyright {new Date().getFullYear()} | drile | All right reserved.</div>
        </footer>
    )
}

export default Footer