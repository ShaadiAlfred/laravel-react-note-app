import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./index";
import { NewNote, Note } from "../types";

const initialState: {
    notes: Note[];
    error: boolean;
    loading: boolean;
} = {
    notes: [],
    error: false,
    loading: false,
};

export const fetchNotes = createAsyncThunk(
    "notes/get",
    async () => {
        try {
            const response = await axios.get("/api/notes");

            return response.data;

        } catch (e) {

            return null;

        }
    }
);

export const deleteNote = createAsyncThunk(
    "notes/destroy",
    async (id: number) => {
        try {
            const response = await axios.delete(`/api/notes/${id}`);

            return response.data;

        } catch (e) {

            return null;

        }
    }
);

export const addNote = createAsyncThunk(
    "notes/add",
    async (newNote: NewNote) => {
        try {
            const response = await axios.post("/api/notes", newNote);

            return response.data;

        } catch (e) {

            return null;

        }
    }
);

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNotes.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchNotes.fulfilled, (state, action) => {
            state.error = action.payload === null;
            state.loading = false;
            state.notes = action.payload;
        });

        builder.addCase(deleteNote.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(deleteNote.fulfilled, (state, action) => {
            if (action.payload === null) {
                state.error = true;
            } else {
                state.error = false;
                state.notes = state.notes.filter(note => note.id !== action.payload);
            }
            state.loading = false;
        });

        builder.addCase(addNote.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(addNote.fulfilled, (state, action) => {
            state.error = action.payload === null;
            state.loading = false;
            state.notes.unshift(action.payload);
        });
    }
});

export const getNotes = (state: RootState) => state.notes.notes;

export default notesSlice.reducer;
