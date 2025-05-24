import "./Header.css";
import logo from "../../assets/logo.svg";
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Envato Market" />
                </div>
                <div className="header-actions">
                    <button className="buy-now-btn">Buy now</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
