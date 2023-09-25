import React from 'react';
import { useGetPostsQuery } from '../Features/postApi';

const Posts = () => {
    const { data: posts = [], isLoading } = useGetPostsQuery();

    return (<>
        <h1>Posts</h1>
        {isLoading ? <p>Loading...</p> : <ul>
            {posts.map((post) =>
                <li key={post.id}>{post.id}. {post.title}</li>
            )}
        </ul>}
    </>)
}

export default Posts;