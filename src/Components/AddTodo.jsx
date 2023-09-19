import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/Features/Todos/todoSlice.js';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault(),
        dispatch(addTodo(input)),
        setInput('')
    }

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div>
            <h1>My to-do list</h1>
            <form onSubmit={addTodoHandler}>
                <div className="input-group mb-3">
                    <input type="text" placeholder='Enter a Todo...'
                        value={input}
                        onChange={handleInputChange}
                        className='form-control' />
                    <button className='btn btn-info'>Add Todo</button>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;


