import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./index";
import { Credentials, User } from "../types";

const initialState: {
    user: User | null;
} = {
    user:  null,
};

export const login = createAsyncThunk(
    "user/login",
    async (credentials: Credentials) => {
        await axios.get("/sanctum/csrf-cookie")

        try {
            await axios.post("/login", credentials);

            const response = await axios.get("/api/user");

            return response.data;
        } catch (e) {
            console.error("Failed to login", e);
            return null;
        }

    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    }
});

export const getUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
