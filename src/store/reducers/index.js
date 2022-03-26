import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import userSlice from "./userSlice";
import moviesListSlice from "./moviesListSlice";
import mediaPlayerSlice from "./mediaPlayerSlice";

const appReducer = combineReducers({
    auth: authSlice,
    user: userSlice,
    moviesList: moviesListSlice,
    mediaPlayer: mediaPlayerSlice,
});

const rootReducer = (state, action) => {
    if (action.type === "USERS_LOGOUT") {
        localStorage.removeItem("persist:root");

        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

export default rootReducer;
