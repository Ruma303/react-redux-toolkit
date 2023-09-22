import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://dog.ceo/api/breeds/list/all';

export const fetchDogs = createAsyncThunk('dogs/fetch', async () => {
    const response = await axios.get(url);
    return response.data.message;
});

const asyncSlice = createSlice({
    name: 'dogs',
    initialState: { dogs: [], status: 'idle', error: null },
    reducers: {
        addDog: (state, action) => {
            state.dogs[action.payload] = [];
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchDogs.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchDogs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.dogs = action.payload;
            })
            .addCase(fetchDogs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { addDog } = asyncSlice.actions;
export default asyncSlice.reducer;