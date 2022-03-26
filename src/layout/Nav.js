import React from "react";
import { useSelector } from "react-redux";
import Logo from "../assets/logo.png";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/actions/userActions";

export const Nav = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.list.User);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <nav>
            <a href={user === undefined ? "/" : "/home"}>
                <img src={Logo} alt="Ryouko TV Logo" className="logo" />
            </a>
            <div className="profile">
                {user === undefined ? (
                    <p>Welcome</p>
                ) : (
                    <>
                        <p>{user.FullName}</p>
                        <a className="dropdown" onClick={handleLogout}>
                            Logout
                        </a>
                    </>
                )}
            </div>
        </nav>
    );
};
