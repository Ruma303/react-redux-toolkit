import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    name: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',
        }),
        getPost: builder.query({
            query: (id) => `posts/${id}`,
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostQuery,
} = postApi;
