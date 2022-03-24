import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import anonymousUserSlice from "./anonymousUserSlice";
import moviesListSlice from "./moviesListSlice";
import mediaPlayerSlice from "./mediaPlayerSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        anonymousUser: anonymousUserSlice,
        moviesList: moviesListSlice,
        mediaPlayer: mediaPlayerSlice,
    },
});

export default store;
