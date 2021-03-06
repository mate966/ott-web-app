import React, { useState, useEffect } from "react";
import { SignIn } from "../layout/SignIn";

export const SplashScreen = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 4000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="splash-screen">
                    <div className="splash__welcome">
                        <h1 className="welcome-heading">Ryouko TV</h1>
                        <h2 className="welcome-subheading">Cinema at home</h2>
                    </div>
                </div>
            ) : (
                <SignIn />
            )}
        </>
    );
};
