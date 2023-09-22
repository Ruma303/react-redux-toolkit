import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import dogReducer from "./Features/functions/dogSlice";
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        dogs: dogReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
});
