import React, { useState, useCallback, useEffect } from "react";
import { send } from "emailjs-com";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";
// import Recaptcha from "react-google-invisible-recaptcha";
import "./Contact.scss";

export const Contact = () => {
    const refRecaptcha = React.useRef(null);

    const [isVerified, setIsVerified] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [toSend, setToSend] = useState({
        from_name: "",
        message: "",
        reply_to: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send("fundacionBMM", "template_ypc0nq1", toSend, "lleXoagByt5UWIx8Q")
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                setIsVerified(false);
                setIsSent(true);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log("FAILED...", err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className="form">
                <div className="form__wrapper">
                    <div className="form__title">
                        <div className="form__head">
                            ¿Quieres hablar con nosotros?
                        </div>
                        <div className="form__text">
                            Rellena este formulario y en cuanto podamos
                            contactaremos contigo por email
                        </div>
                    </div>
                    <form
                        className="form__form"
                        onSubmit={(e) => {
                            if (isVerified && !isSent && !isLoading)
                                onSubmit(e);
                            setIsLoading(true);
                        }}
                    >
                        <input
                            className="form__input"
                            required
                            type="text"
                            name="from_name"
                            placeholder="Tu nombre"
                            value={toSend.from_name}
                            onChange={handleChange}
                        />
                        <input
                            required
                            className="form__input"
                            type="email"
                            name="reply_to"
                            placeholder="Tu email"
                            value={toSend.reply_to}
                            onChange={handleChange}
                        />
                        <textarea
                            required
                            cols={30}
                            rows={5}
                            className="form__textarea"
                            type="textarea"
                            name="message"
                            placeholder="Tu mensaje"
                            value={toSend.message}
                            onChange={handleChange}
                        />
                        <button className="form__button" type="submit">
                            Enviar
                        </button>
                        {isSent && <div className="sent">¡Enviado!</div>}
                    </form>
                    <GoogleReCaptcha
                        onVerify={() => {
                            setIsVerified(true);
                        }}
                    ></GoogleReCaptcha>
                    <div className="">O escríbenos un email a <a className="form__email" href="mailto:fmm@paratrix.es">fmm@paratrix.es</a></div>
                </div>
            </div>
        </>
    );
};
