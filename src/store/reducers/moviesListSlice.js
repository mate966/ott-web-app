import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMoviesList = createAsyncThunk(
    "moviesList/getMoviesList",
    async userToken => {
        try {
            const rawResponse = await fetch(
                "https://thebetter.bsgroup.eu/Media/GetMediaList",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${userToken}`,
                    },
                    body: JSON.stringify({
                        MediaListId: 3,
                        IncludeCategories: false,
                        IncludeImages: true,
                        IncludeMedia: false,
                        PageNumber: 1,
                        PageSize: 15,
                    }),
                }
            );
            const content = await rawResponse.json();
            return content;
        } catch (err) {
            console.log(err);
        }
    }
);

const moviesListSlice = createSlice({
    name: "moviesList",
    initialState: {
        list: [],
        status: null,
    },
    extraReducers: {
        [getMoviesList.pending]: (state, action) => {
            state.status = "loading";
        },
        [getMoviesList.fulfilled]: (state, { payload }) => {
            state.list = payload;
            state.status = "succes";
        },
        [getMoviesList.rejected]: (state, action) => {
            state.status = "failed";
        },
    },
});

export const moviesListAcctions = moviesListSlice.actions;

export default moviesListSlice.reducer;
