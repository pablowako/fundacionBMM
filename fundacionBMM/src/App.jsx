import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Book from "./pages/Book/Book";
import AboutUs from "./pages/AboutUs/AboutUs";
import Eventos from "./pages/Eventos/Eventos";
import { Contact } from "./pages/Contact/Contact";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";


function App() {
    return (
        <div className="App">
            <GoogleReCaptchaProvider badge="inline" size="invisible" reCaptchaKey={"6LeJnYslAAAAALrzIXKpHZEcAijv5O051iIrwFdw"}>

            <BrowserRouter>
                <Header />
                <div className="main">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/book" element={<Book />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/events" element={<Eventos />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </BrowserRouter>
            </GoogleReCaptchaProvider>

        </div>
    );
}

export default App;
