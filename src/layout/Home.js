import { Nav } from "./Nav";
import { MoviesList } from "./../components/MoviesList";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/actions/userActions";

import { Footer } from "./Footer";

export const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userNotExist = useSelector(state => state.user.list.Message);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <div className="home__container wrapper">
            <Nav />
            <div className="home">
                {userNotExist !== undefined ? (
                    <>
                        <button onClick={handleLogout} className="submit">
                            Back
                        </button>
                        <p class="user-message">
                            The username or password is incorrect
                        </p>
                    </>
                ) : (
                    <MoviesList />
                )}
            </div>
            <Footer />
        </div>
    );
};
