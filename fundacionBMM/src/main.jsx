import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <BrowserRouter> */}
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        {/* </BrowserRouter> */}
    </React.StrictMode>
);
