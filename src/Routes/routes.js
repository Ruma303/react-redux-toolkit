import React from 'react';
import { useRoutes } from 'react-router-dom';
import Posts from "../Components/Posts";
import SearchPost from "../Components/SearchPost";
import CreatePost from "../Components/CreatePost";
import EditPost from "../Components/EditPost";

const routes = [
    {
        path: '/',
        element: React.createElement(Posts)
    },
    {
        path: '/search',
        element: React.createElement(SearchPost)
    },
    {
        path: '/create',
        element: React.createElement(CreatePost)
    },
    {
        path: '/edit',
        element: React.createElement(EditPost)
    },
];

const Routes = () => useRoutes(routes);
export default Routes;