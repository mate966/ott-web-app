import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAnonymousUser = createAsyncThunk(
    "anonymousUser/fetchAnonymousUser",
    async () => {
        try {
            const rawResponse = await fetch(
                "https://thebetter.bsgroup.eu/Authorization/SignIn",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        Device: {
                            PlatformCode: "WEB",
                            Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                        },
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

const anonymousUserSlice = createSlice({
    name: "anonymousUser",
    initialState: {
        list: [],
        status: null,
    },
    extraReducers: {
        [fetchAnonymousUser.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchAnonymousUser.fulfilled]: (state, { payload }) => {
            state.list = payload;
            state.status = "succes";
        },
        [fetchAnonymousUser.rejected]: (state, action) => {
            state.status = "failed";
        },
    },
});

export const anonymousUserAcctions = anonymousUserSlice.actions;

export default anonymousUserSlice.reducer;
