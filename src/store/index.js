import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import anonymousUserSlice from "./anonymousUserSlice";
import moviesListSlice from "./moviesListSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        anonymousUser: anonymousUserSlice,
        moviesList: moviesListSlice,
    },
});

export default store;
