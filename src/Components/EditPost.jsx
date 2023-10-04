import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUpdatePostMutation, useGetPostQuery } from '../Features/Api/postApi';

const EditPost = () => {
    const { id } = useParams(); //? Ottiene l'id dal percorso

    const { data: post, error, isLoading } = useGetPostQuery(id); //? carica i dati del post

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [editedPost, setEditedPost] = useState(null);

    const [editPost] = useUpdatePostMutation();

    //* Imposta i valori iniziali del form con i dati del post esistente
    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
        }
    }, [post]);

    const handleInputTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleInputBody = (e) => {
        setBody(e.target.value);
    }

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            const result = await editPost({ id, updatedPost: { title, body } }).unwrap();
            setEditedPost(result);
            setTitle('');
            setBody('');
        } catch (error) {
            console.error("Failed to edit post: ", error);
        }
    }

    return (
        <>
            <h1>Edit a post</h1>
            <form onSubmit={handleForm} className='d-flex flex-column'>
                <label htmlFor="post-title">New post title:</label>
                <input type="text" id='post-title'
                    value={title}
                    onChange={handleInputTitle}
                />
                <br />

                <label htmlFor="post-body">New post description:</label>
                <textarea type="text" id='post-body' rows="5"
                    value={body}
                    onChange={handleInputBody}
                />
                <br />
                <button className='btn btn-warning' disabled={isLoading}>Edit post</button>
            </form>
            {editedPost &&
                <>
                    <div className='alert alert-success mt-3'>Post edited</div>
                    <h3>Post title: {editedPost.title}</h3>
                    <p>Post description: {editedPost.body}</p>
                </>
            }
        </>

    )
}

export default EditPost;