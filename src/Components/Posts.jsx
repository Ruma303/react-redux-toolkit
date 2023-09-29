import { useGetPostsQuery } from '../Features/postApi';

const Posts = () => {
    /* const dataFetch = useGetPostsQuery();
    console.log(dataFetch); */

    /* const { data } = useGetPostQuery();
    console.log(data); */

    /* const { data: posts } = useGetPostsQuery();
    const { data: post } = useGetPostQuery();
    console.log(data);
    console.log(post); */

    const { data: posts = [], isLoading, error } = useGetPostsQuery();
    return (<>
        <h1>Posts</h1>
        {isLoading ? (
            <p>Loading...</p>
        ) : error ? (
            <>
                <p>Error type: <b>{error.error}</b></p>
                <p>Error status: <b>{error.status}</b></p>
            </>
        ) : posts && (
            <ul> {posts.map((post) =>
                <li key={post.id}>{post.id}. {post.title}</li>)}
            </ul>
        )}
    </>);
}
export default Posts;

