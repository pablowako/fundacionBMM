import { NavLink } from "react-router-dom";
import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__left">
                    <div className="header__icon"></div>
                    <h2 className="header__title">Fundación BBM</h2>
                </div>
                <div className="header__right">
                    <NavLink to="/" className="header__link">
                        Home
                    </NavLink>
                    <NavLink to="/book" className="header__link">
                        Book
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
