import { useState, useEffect } from "react";
import { Home } from "../layout/Home";

import React from "react";

export const SplashScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

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
                <Home />
            )}
        </>
    );
};
