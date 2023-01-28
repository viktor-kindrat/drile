import "./Header.css"
import Logo from "../Logo/Logo"
import searchIcon from "./images/search.svg"
import avatarIcon from "./images/avatar.svg"
import cartIcon from "./images/cart.svg"

function Header() {
    return (
        <header className="Header">
            <Logo/>
            <nav className="Header-menu">
                <ul className="Header-menu-list">
                    <li className="Header-menu-item">Home</li>
                    <li className="Header-menu-item">Shop</li>
                    <li className="Header-menu-item">Product</li>
                    <li className="Header-menu-item">Blog</li>
                    <li className="Header-menu-item">Page</li>
                    <li className="Header-menu-item">Contact</li>
                </ul>
            </nav>
            <div className="Header-button-place">
                <button className="Header-button"><img src={searchIcon} alt="icon" className="Header-button-icon" /></button>
                <button className="Header-button"><img src={avatarIcon} alt="icon" className="Header-button-icon" /></button>
                <button className="Header-button"><img src={cartIcon} alt="icon" className="Header-button-icon" /></button>
            </div>
        </header>
    )
}

export default Header