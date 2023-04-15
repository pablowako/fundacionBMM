import { NavLink } from "react-router-dom";
import "./Header.scss";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <div
                onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                }}
                className={isMenuOpen ? "burger open" : "burger"}
            >
                <div className="burger__lines" />
                <div className="burger__lines" />
                <div className="burger__lines" />
            </div>
            <div className="headermobile">
                <div className="header__left">
                    <div className="header__wrapper">
                        <div className="header__icon"></div>
                        <h2 className="header__title">Fundación Beatriz MM</h2>
                    </div>
                </div>
            </div>
            <div className={isMenuOpen ? "header open" : "header"}>
                <div className="header__wrapper">
                    <NavLink to="/" className="header__left">
                        <div className="header__icon"></div>
                        <h2 className="header__title">Fundación Beatriz MM</h2>
                    </NavLink>
                    <div className="header__right">
                        <NavLink
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                            }}
                            to="/"
                            className="header__link"
                        >
                            Home
                        </NavLink>
                        {/* <NavLink
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                            }}
                            to="/book"
                            className="header__link"
                        >
                            Libro
                        </NavLink> */}
                        {/* <NavLink
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                            }}
                            to="/none"
                            className="header__link"
                        >
                            Razón Social
                        </NavLink> */}
                        <NavLink
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                            }}
                            to="/about-us"
                            className="header__link"
                        >
                            Nosotros
                        </NavLink>
                        <NavLink
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                            }}
                            to="/contact"
                            className="header__link"
                        >
                            Contacto
                        </NavLink>
                        <NavLink
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                            }}
                            to="/events"
                            className="header__link"
                        >
                            Eventos
                        </NavLink>
                    </div>
                </div>
                <div className="notifs">
                    <div className="notifs__wrapper">
                        <div className="notifs__text">
                            Próximo Evento: Inauguración de la fundación
                        </div>
                        <NavLink to="/events" className="notifs__button">
                            Más información
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
