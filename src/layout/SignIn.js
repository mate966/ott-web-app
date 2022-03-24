import React from "react";

import { Nav } from "./Nav";
import { AnonymousSignIn } from "../components/AnonymousSignIn";

export const SignIn = () => {
    return (
        <div className="sign-in wrapper">
            <Nav />
            <div className="form__container">
                <form className="form">
                    <input type="text" className="input" />
                    <input type="password" className="input" />
                    <input type="submit" value="Sign In" className="submit" />
                </form>
                <AnonymousSignIn />
            </div>
        </div>
    );
};
// "test@bsgroup.eu",
//  "Test12!@",
