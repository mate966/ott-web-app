import React, { useState, useEffect } from "react";
import { getMoviesList } from "../store/reducers/moviesListSlice";
import { useSelector, useDispatch } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useNavigate } from "react-router-dom";
import { Loader } from "./Loader";
import movieBackground from "../assets/movie-background.png";

export const Movie = () => {
    const [hovered, setHovered] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const moviesList = useSelector(state => state.moviesList.list.Entities);
    const user = useSelector(state => state.user.list.AuthorizationToken);

    const toggleHover = () => setHovered(!hovered);

    const handleMediaPlayer = (id, userToken) => {
        return navigate("/player", { state: { id: id, userToken: userToken } });
    };

    useEffect(() => {
        return user && dispatch(getMoviesList(user.Token));
    }, [user]);

    return (
        <div className="movies-list">
            {!moviesList ? (
                <Loader />
            ) : (
                <>
                    <p>New Relases</p>
                    <Splide
                        options={{
                            arrows: false,
                            pagination: false,
                            gap: 10,
                            height: 200,
                            cover: true,
                        }}
                    >
                        {moviesList.map((movie, id) => (
                            <SplideSlide
                                key={movie.Guid}
                                onClick={() =>
                                    handleMediaPlayer(movie.Id, user.Token)
                                }
                                onMouseEnter={toggleHover}
                                onMouseLeave={toggleHover}
                            >
                                <p
                                    className={
                                        !hovered ? "title" : "title-active"
                                    }
                                >
                                    {movie.Title}
                                </p>
                                {movie.Images.length === 0 ? (
                                    <img
                                        src={movieBackground}
                                        className="movie-image"
                                        key={movie.Guid}
                                    ></img>
                                ) : (
                                    movie.Images.map(
                                        image =>
                                            (image.ImageTypeCode === "FRAME" ||
                                                image.Id === 1103) && (
                                                <img
                                                    src={image.Url}
                                                    className="movie-image"
                                                    key={movie.Guid}
                                                ></img>
                                            )
                                    )
                                )}
                            </SplideSlide>
                        ))}
                    </Splide>
                </>
            )}
        </div>
    );
};
