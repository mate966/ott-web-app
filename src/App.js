import { useSelector } from "react-redux";

import { SplashScreen } from "./components/SplashScreen";
import { Home } from "./layout/Home";

function App() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <div className="App">
            {!isLoggedIn && <SplashScreen />}
            {isLoggedIn && <Home />}
        </div>
    );
}

export default App;
