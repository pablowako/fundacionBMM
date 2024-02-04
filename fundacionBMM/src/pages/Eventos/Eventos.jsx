import { NavLink } from "react-router-dom";
import './Eventos.scss';
import {events} from '../../assets/events.json'

const Eventos = () => {
    return (
        <>
            <div className="events">
                <div className="events__wrapper">
                    <div className="events__title">Eventos</div>
                    <div className="events__lista">
                        {
                            events.map((event)=>{
                                const myDate = new Date(event.date)
                                const options = {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: "numeric",
                                    minute: "2-digit",
                                  };
                                return(
                                    <div className="events__event event">
                                        <div className="event__title">
                                            <div className="title__text">- {event.title}</div>
                                            <div className="title__date">{myDate.toLocaleString('es-ES', options)}</div>
                                        </div>
                                        <div className="event__text">
                                            Evento de Inauguración de la fundación, y presentación del Libro (próximamente a la venta).
                                        </div>
                                        <div className="event__text">
                                            "The White Lab", Paseo de la Castellana, 166
                                        </div>
                                    </div>
                                )
                            })
                        }
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
