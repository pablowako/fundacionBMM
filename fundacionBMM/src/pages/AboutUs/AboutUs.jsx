import { NavLink } from "react-router-dom";
import "./AboutUs.scss";

const AboutUs = () => {
    return (
        <>
            <div className="about">
                <div className="about__wrapper">
                    <div className="about__section">
                        <div className="about__body">
                            <div className="about__title">
                                Beatriz Moreno Mendoza
                            </div>
                            <div className="about__text">
                                La fundación está dedicada a Beatriz, hermana
                                del fundador, que falleció en 1995. Beatriz fué
                                una insipración que marcó profundamente a todos
                                los que tuvieron la increíble suerte de
                                conocerla.
                            </div>
                        </div>
                        <img
                            src="/fotosPDF/image-080.jpg"
                            alt="Beatriz"
                            className=" about__img"
                        ></img>
                    </div>
                    <div className="about__section">
                        <div className="about__body">
                            <div className="about__title">
                                Fernando Moreno Mendoza
                            </div>
                            <div className="about__text">
                                Fernando es el fundador de la Fundación Con la
                                llegada de la pandemia, Fernando se encuentra
                                con muchas horas libres, y decide dedicar a
                                expandir su conocimiento de la filosofía y las
                                artes. Esta nueva pasión le lleva a organizar
                                eventos con y para sus amigos en torno a la
                                cultura. A medida que éstos eventos crecen en
                                tamaño y número, entiende que tiene que crear
                                una fundación contenedora, y decide dedicarsela
                                a su hermana Beatriz.
                            </div>
                        </div>
                        <img
                            src="/fotosPDF/image-037.jpg"
                            alt="Fernando"
                            className=" about__img"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
