import React from "react";

import Logo from "../assets/logo.png";

export const Nav = () => {
    return (
        <nav>
            <img src={Logo} alt="Ryouko TV Logo" className="logo" />
            <a href="/sign-in" className="button button--sign-in">
                Sign In
            </a>
        </nav>
    );
};
