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

    return (

        <>
            {/* aggiungere isLoading, error */}
            <h1>DogsList</h1>
            <ul>
                {dogBreeds.map((breed, index) => (
                    <li key={index}>{breed}</li>
                ))}
            </ul>
        </>
    )
}

export default DogsList;