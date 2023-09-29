import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dogs: [],
    isLoading: false,
    error: null,
}

const dogSlice = createSlice({
    name: 'dogs',
    initialState,
    reducers: {
        fetchDogsStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchDogsSuccess: (state, { payload }) => {
            state.dogs = payload;
            state.isLoading = false;
        },
        fetchDogsFailure: (state, { payload }) => {
            state.error = payload;
            state.isLoading = false;
        },
    }
});

export const { fetchDogsStart, fetchDogsSuccess, fetchDogsFailure } = dogSlice.actions;
export default dogSlice.reducer;

const url = 'https://dog.ceo/api/breeds/list/all';

//% Funzioni JavaScript
export const fetchDogs = () => async (dispatch) => {
    try {
        dispatch(fetchDogsStart());
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch(fetchDogsSuccess(data.message));
    } catch (error) {
        dispatch(fetchDogsFailure(error.toString()));
    }
};

//% Middleware API
/* export const fetchDogs = () => async (dispatch) => {
    dispatch(fetchDogsStart());
}; */