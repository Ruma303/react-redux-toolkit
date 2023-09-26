import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',
            providesTags: ['Posts'],
        }),
        getPost: builder.query({
            query: (id) => `posts/${id}`,
            providesTags: ['Post'],
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
            invalidatesTags: ['Posts'],
        }),
        updatePost: builder.mutation({
            query: ({ id, ...fields }) => ({
                url: `posts/${id}`,
                method: 'PUT',
                body: fields,
            }),
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
})
export const {
    useGetPostsQuery,
    useGetPostQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
} = postApi;
