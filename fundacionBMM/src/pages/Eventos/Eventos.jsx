import { NavLink } from "react-router-dom";
import './Eventos.scss';

const Eventos = () => {
    return (
        <>
            <div className="events">
                <div className="events__wrapper">
                    <div className="events__title">Eventos</div>
                    <div className="events__lista">
                        <div className="events__event event">
                            <div className="event__title">
                                <div className="title__text">- Inauguración</div>
                                <div className="title__date">19:30, 15 Abril 2023</div>
                            </div>
                            <div className="event__text">
                                Evento de Inauguración de la fundación, y presentación del Libro (próximamente a la venta).
                            </div>
                            <div className="event__text">
                                "The White Lab", Paseo de la Castellana, 166
                            </div>
                        </div>
                        {/* <div className="events__event event">
                            <div className="event__title">
                                <div className="title__text">- Evento 2</div>
                                <div className="title__date">???</div>
                            </div>
                            <div className="event__text"></div>
                        </div>
                        <div className="events__event event">
                            <div className="event__title">
                                <div className="title__text">- Evento 3</div>
                                <div className="title__date">???</div>
                            </div>
                            <div className="event__text"></div>
                        </div>
                        <div className="events__event event">
                            <div className="event__title">
                                <div className="title__text">- Evento 4</div>
                                <div className="title__date">???</div>
                            </div>
                            <div className="event__text"></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Eventos;
