import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AnonymousSignIn = () => {
    const [user, setUser] = useState(null);
    let navigate = useNavigate();

    const handleAnonymouslySignIn = (e) => {
        e.preventDefault();

        (async () => {
            try {
                const rawResponse = await fetch(
                    "https://thebetter.bsgroup.eu/Authorization/SignIn",
                    {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            Device: {
                                PlatformCode: "WEB",
                                Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                            },
                        }),
                    }
                );
                const content = await rawResponse.json();
                // console.log(content.AuthorizationToken.Token);
                setUser(content);
                navigate("/home");
            } catch (err) {
                console.log(err);
            }
        })();
    };

    useEffect(() => {
        (async () => {
            try {
                const rawResponse = await fetch(
                    "https://thebetter.bsgroup.eu/Media/GetMediaPlayInfo",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${user.AuthorizationToken.Token}`,
                        },
                        body: JSON.stringify({
                            MediaId: 13,
                            StreamType: "TRIAL",
                        }),
                    }
                );
                const content = await rawResponse.json();
                console.log(content);
            } catch (err) {
                console.log(err);
            }
        })();
    }, [user]);

    return (
        <button className="submit" onClick={handleAnonymouslySignIn}>
            Sign in Anonymously
        </button>
    );
};
