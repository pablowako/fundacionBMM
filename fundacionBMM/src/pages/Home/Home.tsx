import React from "react";
import "./Home.scss";
import Pending from "../../components/Pending/Pending";
const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home__hero">
                    <img
                        className="home__hero--img"
                        src="/delfinAzul.png"
                        alt="Fundación Beatriz Moreno Mendoza"
                    />
                    <div className="home__hero--text">Fundación</div>
                    <div className="home__hero--text bold">Beatriz</div>
                    <div className="home__hero--text bold">Moreno Mendoza</div>
                        <Pending size={"small"}/>

                </div>
                <section className="section">
                    <div className="section__wrapper">
                        <div className="section__title">Nuestros objetivos</div>
                        <div className="section__main">
                            <img
                                src="/fotosPDF/image-057.jpg"
                                alt="test"
                                className="section__img"
                            />
                            <div className="section__text">
                                La fundación BMM tiene como objetivo promover y
                                acercar la cultura a sus miembros a través de
                                diversos eventos socioculturales: desde charlas
                                filosóficas hasta excursiones culturales al
                                rededor del arte y la música. Más allá de estos
                                eventos, nos gustaría, en el futuro, poder
                                ayudar a los estudiantes más extraordinarios con
                                una beca universitaria. La beca tendría el
                                objetivo de impulsar el campo de las artes y
                                humanidades.
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="section__wrapper">
                        <div className="section__title">La fundación</div>
                        <div className="section__main">
                            <img
                                src="/fotosPDF/image-020.jpg"
                                alt="Beatriz"
                                className="section__img"
                            />
                            <div className="section__text">
                            La misión de la Fundación consiste en promover la
                                filosofía, la sabiduría, la música y las artes a
                                través de eventos, seminarios, y “otros”.
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="section__wrapper">
                        <div className="section__title">Los miembros</div>
                        <div className="section__main">
                            <img
                                src="/fotosPDF/image-036.jpg"
                                alt="test"
                                className="section__img"
                            />
                            <div className="section__text">
                            Con la llegada de la pandemia, Fernando se
                                encuentra con muchas horas libres, y decide
                                dedicar a expandir su conocimiento de la
                                filosofía y las artes. Esta nueva pasión le
                                lleva a organizar eventos con y para sus amigos
                                en torno a la cultura. A medida que éstos
                                eventos crecen en tamaño y número, entiende que
                                tiene que crear una fundación contenedora, y
                                decide dedicarsela a su hermana Beatriz.
                                
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
