import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; //* hooks
import { increment, decrement } from '../features/counter/counterSlice'; //* actions

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Counter Component</h2>
            <p>Conteggio: {count}</p>
            <button onClick={() => dispatch(increment())}>Incrementa</button>
            <button onClick={() => dispatch(decrement())}>Decrementa</button>
        </>
    )
}

export default Counter;

