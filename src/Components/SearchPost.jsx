import React, { useState } from 'react';
import { useGetPostQuery } from '../Features/postApi';

const SearchPost = () => {
    const [input, setInput] = useState('');
    const { data: post, isLoading, isError, error } = useGetPostQuery(input);

    const handleValueChange = (e) => {
        setInput(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setInput('');
    }

    return (
        <p>
            <h1>Search Post</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="search mr-3">Search post number: </label>
                <input
                    id="search"
                    type="number"
                    value={input}
                    onChange={handleValueChange}
                />
            </form>
            {isLoading ? (
                <p>Loading...</p>
            ) : isError ? (
                <p>Error: {error.status}</p>
            ) : post && input == '' ? (
                <p>Please, submit a number</p>
            ) : post ? (
                <p>{post.id}. {post.title}</p>
            ) : (
                <p>No post found.</p>
            )}
        </p>
    );
}

export default SearchPost;