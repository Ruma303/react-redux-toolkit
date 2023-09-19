import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import todoReducer from "./Features/Todos/todoSlice";
import log from "./Middleware/log";
import double from './Middleware/double';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
    middleware: [log],

    //middleware: [double],

    //middleware: [log, double],

    //middleware: [double, log],

    /* middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(), log, double], */

    /* middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(), logger], */
});

