import { SplashScreen } from "./components/SplashScreen";

function App() {
    (async () => {
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

        console.log(content);
    })();

    return (
        <div className="App">
            <SplashScreen />
        </div>
    );
}

export default App;
