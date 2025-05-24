import "./Header.css";
import logo from "../../assets/logo.svg";
import { handleBlank } from "../../helpers/blank";
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Envato Market" />
                </div>
                <div className="header-actions">
                    <button
                        className="buy-now-btn"
                        onClick={() =>
                            handleBlank(
                                "https://themeforest.net/checkout/109717379/create_account?_ga=2.70952086.726178016.1748083283-1467261288.1748083283"
                            )
                        }
                    >
                        Buy now
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
