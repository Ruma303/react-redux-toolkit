import { configureStore } from "@reduxjs/toolkit";
import dogReducer from "../Features/dogSlice";

export const store = configureStore({
    reducer: {
        dogs: dogReducer
    }
});