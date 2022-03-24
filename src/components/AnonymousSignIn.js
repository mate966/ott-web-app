import React from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { authAcctions } from "../store/authSlice";
import { fetchAnonymousUser } from "../store/anonymousUserSlice";

export const AnonymousSignIn = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleAnonymouslySignIn = e => {
        e.preventDefault();
        dispatch(fetchAnonymousUser());
        dispatch(authAcctions.login());
        // navigate("/home");
    };
    return (
        <button className="submit" onClick={handleAnonymouslySignIn}>
            Sign in Anonymously
        </button>
    );
};
