import { useGetPostsQuery } from '../Features/Api/postApi';

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
            <ul className='post-list'> {posts.map((post) =>
                <li key={post.id} className='post'>
                    <h2>{post.id}. {post.title}</h2>
                    <p>{post.body}</p>
                </li>)}
            </ul>
        )}
    </>);
}
export default Posts;

