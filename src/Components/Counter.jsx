import React from 'react';
import { useDispatch } from 'react-redux'; // hooks
import { increment, decrement } from '../features/counter/counterSlice'; // actions

const Counter = () => {
  return (
    <>
        <h1>Counter Component</h1>
    </>
  )
}

export default Counter