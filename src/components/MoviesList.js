import React, { useEffect } from "react";
import { getMoviesList } from "../store/moviesListSlice";
import { useSelector, useDispatch } from "react-redux";

export const MoviesList = () => {
    const dispatch = useDispatch();
    const user = useSelector(
        state => state.anonymousUser.list.AuthorizationToken
    );
    const moviesList = useSelector(state => state.moviesList.list.Entities);

    useEffect(() => {
        return user === undefined ? null : dispatch(getMoviesList(user.Token));
    }, [user]);

    return (
        <ul className="movies__list">
            {moviesList === undefined
                ? "Welcome"
                : moviesList.map(movie => (
                      <li key={movie.Guid} className="movie">
                          {movie.Title}
                          {<img src={movie.Images[0].Url}></img>}
                          {/* {movie.Images.map(image => (
                              <img src={image.Url}></img>
                          ))} */}
                      </li>
                  ))}
        </ul>
    );
};
