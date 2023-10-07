import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    name: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',
        }),
        getComments: builder.query({
            query: () => 'comments',
        }),
        getPost: builder.query({
            query: (id) => `posts/${id}`,
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useGetCommentsQuery
} = postApi;
