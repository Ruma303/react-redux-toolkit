import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDogs, addDog } from '../Redux/Features/asyncThunk/asyncSlice';

const AsyncComponent = () => {
    const {error, isLoading, dogs} = useSelector(state => state.async);
    /*
    const error = useSelector(state => state.async.error);
    const isLoading = useSelector(state => state.async.isLoading);
    const dogs = useSelector(state => state.async.dogs); */
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    useEffect(() => {
        dispatch(fetchDogs());
    }, []);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            dispatch(addDog(input));
            setInput('');
        }
    }

    const dogBreeds = dogs ? Object.keys(dogs) : [];

    if (error) { return <h1>Errore nella richiesta</h1> }
    if (isLoading) { return <h1>Caricamento</h1> }
    return (<>
        <h1>List of dog breeds</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-dog">Insert new dog breed</label>
            <input type="text" id="new-dog" className='mx-3'
                value={input}
                onChange={handleInputChange}
            />
            <button className='btn btn-primary'>Add</button>
        </form>
        <ul>
            {dogBreeds.map((breed, index) => (
                <li key={index}>{breed}</li>
            ))}
        </ul>
    </>)
}

export default AsyncComponent;