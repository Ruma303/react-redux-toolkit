import React from 'react';
import Posts from "../Components/Posts";
import SearchPost from "../Components/SearchPost";

export const routes = [
    {
        path: '/',
        element: React.createElement(Posts)
    },
    {
        path: '/search',
        element: React.createElement(SearchPost)
    },
];
