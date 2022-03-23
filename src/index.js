import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Home } from "./layout/Home";
import { SignIn } from "./layout/SignIn";
import "./css/main.css";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
