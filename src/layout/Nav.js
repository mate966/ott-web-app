import React from "react";
import { useSelector } from "react-redux";
import Logo from "../assets/logo.png";

export const Nav = () => {
    const user = useSelector(state => state.anonymousUser.list.User);

    return (
        <nav>
            <img src={Logo} alt="Ryouko TV Logo" className="logo" />
            <p>
                {user === undefined ? "Welcome" : `Welcome, ${user.UserName}`}
            </p>
        </nav>
    );
};
