import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDogs } from '../Features/dogSlice';

const DogsList = () => {
    const error = useSelector(state => state.dogs.error);
    const isLoading = useSelector(state => state.dogs.isLoading);
    const dogs = useSelector(state => state.dogs.dogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDogs());
    }, [dispatch]);

    const dogBreeds = dogs ? Object.keys(dogs) : [];

    if (error) { return <h1>Errore nella richiesta</h1> }
    if (isLoading) { return <h1>Caricamento</h1> }
    return (<>
            <h1>List of dog breeds</h1>
            <ul>
                {dogBreeds.map((breed, index) => (
                    <li key={index}>{breed}</li>
                ))}
            </ul>
        </>)
}

export default DogsList;


