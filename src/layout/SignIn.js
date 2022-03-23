import React from "react";

export const SignIn = () => {
    return (
        <>
            <div className="form__container">
                <a href="/home" className="button">
                    Back
                </a>
                <form action="" className="form">
                    <input type="text" />
                    <input type="password" />
                    <input type="submit" value="Sign In" />
                </form>
            </div>
        </>
    );
};
