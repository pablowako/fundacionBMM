import { NavLink } from "react-router-dom";
import "./Header.scss";
import { useState } from "react";
import Pending from "../Pending/Pending";
import {events} from '../../assets/events.json'


const Header = () => {
    events.sort((a,b)=> a.date - b.date)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const futureEvents = events.map((e)=>{
        return({isPast: new Date(e.date) > new Date(), event: e})
    })
    const nextEvent = futureEvents.find((e)=>e.isPast)
    console.log("nextEvent",nextEvent);
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
                        <Pending/>
                    </div>
                </div>
            </div>
            <div className={isMenuOpen ? "header open" : "header"}>
                <div className="header__wrapper">
                    <NavLink to="/" className="header__left">
                        <div className="header__icon"></div>
                        <h2 className="header__title">Fundación Beatriz MM</h2>
                        <Pending/>
                    </NavLink>
                    <div className="header__right">
                        <NavLink
                            onClick={() => {
                                setIsMenuOpen(false);
                            }}
                            to="/"
                            className="header__link"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            onClick={() => {
                                setIsMenuOpen(false);
                            }}
                            to="/about-us"
                            className="header__link"
                        >
                            Nosotros
                        </NavLink>
                        <NavLink
                            onClick={() => {
                                setIsMenuOpen(false);
                            }}
                            to="/contact"
                            className="header__link"
                        >
                            Contacto
                        </NavLink>
                        <NavLink
                            onClick={() => {
                                setIsMenuOpen(false);
                            }}
                            to="/events"
                            className="header__link"
                        >
                            Eventos
                        </NavLink>
                    </div>
                </div>
                <div className="notifs">
                    {nextEvent ?
                        <NavLink to="/events" onClick={()=>{setIsMenuOpen(false)}} className="notifs__wrapper">
                            <div className="notifs__text">
                                Próximo Evento: {nextEvent.event.title}
                            </div>
                            <div className="notifs__button" >
                                Más información
                            </div>
                        </NavLink>
                        :
                        <></>
                    }
                </div>
            </div>
        </>
    );
};

export default Header;
