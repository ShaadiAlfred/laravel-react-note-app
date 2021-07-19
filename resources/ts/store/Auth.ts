import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./index";
import { Credentials, User } from "../types";

const initialState: {
    user: User | null;
    error: boolean;
    loading: boolean;
} = {
    user:  null,
    error: false,
    loading: false,
};

export const login = createAsyncThunk(
    "user/login",
    async (credentials: Credentials) => {
        axios.defaults.withCredentials = true;

        await axios.get("/sanctum/csrf-cookie");

        try {
            await axios.post("/login", credentials);

            const response = await axios.get("/api/user");

            return response.data;
        } catch (e) {
            return null;
        }
    }
);

export const logout = createAsyncThunk(
    "user/logout",
    async () => {
        await axios.post("/logout");

        return null;
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(login.fulfilled, (state, action) => {
            state.error = action.payload === null;
            state.loading = false;
            state.user = action.payload;
        });

        builder.addCase(logout.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(logout.fulfilled, (state) => {
            state.loading = false;
            state.user = null;
            state.error = false;
        });
    }
});

export const getUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
