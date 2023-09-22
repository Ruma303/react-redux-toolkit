import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import dogReducer from "./Features/functions/dogSlice";
import asyncSlice from "./Features/asyncThunk/asyncSlice";

export const store = configureStore({
    reducer: {
        dogs: dogReducer,
        async: asyncSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
});
