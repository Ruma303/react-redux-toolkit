import React from 'react';
import { useRoutes } from 'react-router-dom';
import Posts from "../Components/Posts";
import SearchPost from "../Components/SearchPost";

const routes = [
    {
        path: '/',
        element: React.createElement(Posts)
    },
    {
        path: '/search',
        element: React.createElement(SearchPost)
    }
];

const Routes = () => useRoutes(routes);
export default Routes;