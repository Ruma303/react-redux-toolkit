import { useGetPostsQuery } from '../Features/Api/postApi';

const Posts = () => {
    const { data: posts = [], isLoading: postLoading, isError: postError } = useGetPostsQuery();

    return (<>
        <h1>Posts</h1>
        {postLoading ? (
            <p>Loading...</p>
        ) : postError ? (
            <>
                <p>Error type: <b>{error.error}</b></p>
                <p>Error status: <b>{error.status}</b></p>
            </>
        ) : posts && (
            <ul> {posts.map((post) =>
                <li key={post.id}>
                    <h3>{post.id}. {post.title}</h3>
                    <p>{post.body}</p>
                </li>)}
            </ul>
        )}
    </>);
}
export default Posts;