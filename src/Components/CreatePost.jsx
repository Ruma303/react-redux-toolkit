import React, { useState } from 'react';
import { useCreatePostMutation } from '../Features/Api/postApi';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [createdPost, setCreatedPost] = useState(null);
    const [createPost, { isLoading }] = useCreatePostMutation();

    const handleInputTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleInputBody = (e) => {
        setBody(e.target.value);
    }

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            const result = await createPost({ title, body }).unwrap();
            setCreatedPost(result);
            setTitle('');
            setBody('');
        } catch (error) {
            console.error("Failed to create post: ", error);
        }
    }

    return (
        <>
            <h1>Create new post</h1>
            <form onSubmit={handleForm} className='d-flex flex-column'>
                <label htmlFor="post-title">Enter post title:</label>
                <input type="text" id='post-title'
                    value={title}
                    onChange={handleInputTitle}
                />
                <br />

                <label htmlFor="post-body">Enter post description:</label>
                <textarea type="text" id='post-body' rows="5"
                    value={body}
                    onChange={handleInputBody}
                />
                <br />
                <button className='btn btn-primary' disabled={isLoading}>Create post</button>
            </form>
            {createdPost &&
                <>
                    <div className='alert alert-success mt-3'>Post created</div>
                    <h3>Post title: {createdPost.title}</h3>
                    <p>Post description: {createdPost.body}</p>
                </>
            }
        </>

    )
}

export default CreatePost;