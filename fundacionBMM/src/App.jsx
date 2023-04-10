import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Book from "./pages/Book/Book";
import AboutUs from "./pages/AboutUs/AboutUs";
import Eventos from "./pages/Eventos/Eventos";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <div className="main">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/book" element={<Book />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/contact" element={<Book />} />
                        <Route path="/events" element={<Eventos />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
