import { Nav } from "./Nav";
import { MoviesList } from "./../components/MoviesList";

export const Home = () => {
    return (
        <section className="home wrapper">
            <Nav />
            <MoviesList />
        </section>
    );
};
