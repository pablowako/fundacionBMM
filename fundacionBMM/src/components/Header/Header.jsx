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
                        Donaciones
                    </NavLink>
                    <NavLink to="/about-us" className="header__link">
                        About us
                    </NavLink>
                    <NavLink to="/contact" className="header__link">
                        Contacto
                    </NavLink>
                </div>
            </div>
            <div className="notifs">
                <div className="notifs__wrapper">
                    <div className="notifs__text">Próximo Evento: Inauguración de la fundación</div>
                    <a href="/" className="notifs__button">Más información</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
