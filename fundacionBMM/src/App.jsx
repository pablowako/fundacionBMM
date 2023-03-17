import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Link } from "react-router-dom";

function App() {
    return (
            <div className="App">
                <Header />
                <Home />
                <div className="test">test</div>
                <Link to="/test">test</Link>
            </div>
    );
}

export default App;
