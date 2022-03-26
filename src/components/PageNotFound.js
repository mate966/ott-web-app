import React from "react";
import { Nav } from "../layout/Nav";
import error404 from "../assets/error404.png";

export const PageNotFound = () => {
    return (
        <div className="page-not-found wrapper ">
            <Nav />
            <div className="page-not-found__content">
                <img src={error404} className="page-not-found__image"></img>
                <p>The page You are looking for doesn't exist</p>
            </div>
        </div>
    );
};
