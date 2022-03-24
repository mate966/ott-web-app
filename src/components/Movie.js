import React, { useEffect } from "react";
import { getMoviesList } from "../store/moviesListSlice";
import { getMediaPlayer } from "../store/mediaPlayerSlice";
import { useSelector, useDispatch } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ReactPlayer from "react-player/lazy";

import { Loader } from "./Loader";

export const Movie = () => {
    const dispatch = useDispatch();
    const user = useSelector(
        state => state.anonymousUser.list.AuthorizationToken
    );

    const mediaPlayer = useSelector(
        state => state.anonymousUser.list.AuthorizationToken
    );

    const moviesList = useSelector(state => state.moviesList.list.Entities);

    const medias = useSelector(state => state.mediaPlayer.list);
    console.log(medias.ContentUrl);

    const handleMediaPlayer = () => {
        console.log("jest");
    };

    useEffect(() => {
        return user === undefined ? null : dispatch(getMoviesList(user.Token));
    }, [user]);

    useEffect(() => {
        return mediaPlayer === undefined
            ? null
            : dispatch(getMediaPlayer(user.Token));
    }, [mediaPlayer]);

    return (
        <>
            {moviesList === undefined ? (
                <Loader />
            ) : (
                <Splide options={{ arrows: false, pagination: false }}>
                    {moviesList.map(movie => (
                        <SplideSlide
                            key={movie.Guid}
                            onClick={handleMediaPlayer}
                        >
                            {movie.Images.map(image =>
                                image.ImageTypeCode === "FRAME" ? (
                                    <img
                                        src={image.Url}
                                        className="movie-image"
                                        key={movie.Guid}
                                    ></img>
                                ) : null
                            )}
                        </SplideSlide>
                    ))}
                </Splide>
            )}
            <ReactPlayer
                url={medias.ContentUrl}
                // playing={true}
                controls={true}
            />
        </>
    );
};
