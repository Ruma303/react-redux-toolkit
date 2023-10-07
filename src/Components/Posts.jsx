import { useGetPostsQuery, useGetPostQuery, useGetCommentsQuery } from '../Features/Api/postApi';

const Posts = () => {
    /* const dataFetch = useGetPostsQuery();
    console.log(dataFetch); */

    /* const { data } = useGetPostsQuery();
    console.log(data); */

    /* const { data: posts } = useGetPostsQuery();
    console.log(posts);

    const { data: post5 } = useGetPostQuery(5);
    console.log(post5); */

    const { data: posts = [], isLoading: postLoading, isError: postError } = useGetPostsQuery();
    const { data: comments = [], isLoading: commentLoading, isError: commentError } = useGetCommentsQuery()

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
                <li key={post.id}>{post.id}. {post.title}</li>)}
            </ul>
        )}

        <h1>Comments</h1>
        {comments && (
            <ul> {comments.map((comment) =>
                <li key={comment.id}>{comment.id}. {comment.name}: {comment.body}</li>)}
            </ul>
        )}
    </>);
}
export default Posts;

