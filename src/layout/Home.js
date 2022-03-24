import React, { useEffect } from "react";
import { Nav } from "./Nav";

export const Home = () => {
    useEffect(() => {
        // (async () => {
        //     try {
        //         const rawResponse = await fetch(
        //             "https://thebetter.bsgroup.eu/Media/GetMediaList",
        //             {
        //                 method: "POST",
        //                 headers: {
        //                     "Content-Type": "application/json",
        //                 },
        //                 body: JSON.stringify({
        //                     Username: "test@bsgroup.eu",
        //                     Password: "Test12!@",
        //                     Device: {
        //                         Name: "string",
        //                         PlatformCode: "WEB",
        //                         FirebaseToken: "string",
        //                         DpiCode: "string",
        //                     },
        //                     MediaListId: 2,
        //                     IncludeCategories: false,
        //                     IncludeImages: true,
        //                     IncludeMedia: false,
        //                     PageNumber: 1,
        //                     PageSize: 15,
        //                 }),
        //             }
        //         );
        //         const content = await rawResponse.json();
        //         console.log(content);
        //     } catch (err) {
        //         console.log(err);
        //     }
        // })();
    }, []);

    return (
        <section className="home wrapper">
            <Nav />
        </section>
    );
};
