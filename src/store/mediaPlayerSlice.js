import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMediaPlayer = createAsyncThunk(
    "mediaPlayer/getMediaPlayer",
    async userToken => {
        try {
            const rawResponse = await fetch(
                "https://thebetter.bsgroup.eu/Media/GetMediaPlayInfo",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${userToken}`,
                    },
                    body: JSON.stringify({ MediaId: 1, StreamType: "TRIAL" }),
                }
            );
            const content = await rawResponse.json();
            return content;
        } catch (err) {
            console.log(err);
        }
    }
);

const mediaPlayerSlice = createSlice({
    name: "mediaPlayer",
    initialState: {
        list: [],
        status: null,
    },
    extraReducers: {
        [getMediaPlayer.pending]: (state, action) => {
            state.status = "loading";
        },
        [getMediaPlayer.fulfilled]: (state, { payload }) => {
            state.list = payload;
            state.status = "succes";
        },
        [getMediaPlayer.rejected]: (state, { payload }) => {
            state.status = "failed";
        },
    },
});

export const mediaPlayerAcctions = mediaPlayerSlice.actions;

export default mediaPlayerSlice.reducer;
