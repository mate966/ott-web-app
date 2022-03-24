import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./layout/Home";
import { SignIn } from "./layout/SignIn";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import "./css/main.css";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/sign-in" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
