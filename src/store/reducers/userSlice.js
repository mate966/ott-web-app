import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const fetchUser = createAsyncThunk("user/fetchUser", async user => {
    try {
        const rawResponse = await fetch(
            "https://thebetter.bsgroup.eu/Authorization/SignIn",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Username: user.email,
                    Password: user.password,
                    Device: {
                        PlatformCode: "WEB",
                        Name: uuidv4(),
                    },
                }),
            }
        );
        const content = await rawResponse.json();
        return content;
    } catch (err) {
        console.log(err);
    }
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        list: [],
        status: null,
        error: false,
    },
    extraReducers: {
        [fetchUser.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchUser.fulfilled]: (state, { payload }) => {
            state.list = payload;
            state.status = "succes";
        },
        [fetchUser.rejected]: (state, action) => {
            state.status = "failed";
        },
    },
});

export const userAcctions = userSlice.actions;

export default userSlice.reducer;
