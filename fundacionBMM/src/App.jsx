import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Book from "./pages/Book/Book";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/book" element={<Book />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
