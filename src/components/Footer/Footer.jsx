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
                    <a href="https://google.com" target="_blank" className="Footer-link">About Us</a>
                    <a href="https://google.com" target="_blank" className="Footer-link">Contact Us</a>
                    <a href="https://google.com" target="_blank" className="Footer-link">Privacy Policy</a>
                    <a href="https://google.com" target="_blank" className="Footer-link">Terms of Service</a>
                </div>
                <div className="Footer-column">
                    <h2 className="Footer-headline">COMPANY</h2>
                    <a href="https://google.com" target="_blank" className="Footer-link">About Us</a>
                    <a href="https://google.com" target="_blank" className="Footer-link">Contact Us</a>
                    <a href="https://google.com" target="_blank" className="Footer-link">Privacy Policy</a>
                    <a href="https://google.com" target="_blank" className="Footer-link">Terms of Service</a>
                </div>
                <div className="Footer-column">
                    <h2 className="Footer-headline">USEFUL LINKS</h2>
                    <a href="https://google.com" target="_blank" className="Footer-link">About Us</a>
                    <a href="https://google.com" target="_blank" className="Footer-link">Contact Us</a>
                    <a href="https://google.com" target="_blank" className="Footer-link">Privacy Policy</a>
                    <a href="https://google.com" target="_blank" className="Footer-link">Terms of Service</a>
                </div>
                <div className="Footer-column">
                    <h2 className="Footer-headline">FOLLOW US</h2>
                    <a href="https://google.com" target="_blank" className="Footer-link"><img src={facebookIcon} alt="social media icon" className="Footer-icon" /> Facebook</a>
                    <a href="https://google.com" target="_blank" className="Footer-link"><img src={twitterIcon} alt="social media icon" className="Footer-icon" /> Twitter</a>
                    <a href="https://google.com" target="_blank" className="Footer-link"><img src={instagramIcon} alt="social media icon" className="Footer-icon" /> Instagram</a>
                </div>
            </div>
            <div className="Footer-copy">© Copyright {new Date().getFullYear()} | drile | All right reserved.</div>
        </footer>
    )
}

export default Footer