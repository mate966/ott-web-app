import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../store/reducers/userSlice";
import { authAcctions } from "../store/reducers/authSlice";

import { Nav } from "./Nav";

export const SignIn = () => {
    const initialValues = { email: "", password: "" };
    const [user, setUser] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleValue = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (e.target.name === "guest") {
            dispatch(fetchUser(user));
            dispatch(authAcctions.login());
            navigate("/home");
        } else {
            setFormErrors(validate(user));
            setIsSubmit(true);
        }
    };

    const validate = values => {
        const errors = {};
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!re.test(values.email)) {
            errors.email = "Not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        }
        return errors;
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            dispatch(fetchUser(user));
            dispatch(authAcctions.login());
        }
    }, [formErrors]);

    return (
        <div className="sign-in wrapper">
            <Nav />
            <div className="form__container">
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="email"
                        className="input"
                        placeholder="User email"
                        value={user.email}
                        onChange={handleValue}
                    />
                    <span className="error-msg">{formErrors.email}</span>
                    <input
                        type="password"
                        name="password"
                        className="input"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleValue}
                    />
                    <span className="error-msg">{formErrors.password}</span>
                    <input type="submit" value="Sign In" className="submit" />
                </form>
                <button name="guest" className="submit" onClick={handleSubmit}>
                    Sign in as Guest
                </button>
            </div>
        </div>
    );
};
