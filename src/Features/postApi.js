import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',
        }),
        getPost: builder.query({
            query: (id) => `posts/${id}`,
        }),
        createPost: builder.mutation({
            query: ({ title, body }) => ({
                url: 'posts',
                method: 'POST',
                body: {
                    title,
                    body
                },
            }),
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostQuery,
} = postApi;
