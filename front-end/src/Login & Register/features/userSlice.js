import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        regist: (state, action) => {
            state.user = action.payload;
        },
        busInfo: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { regist, busInfo } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
