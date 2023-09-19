import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../Redux/Features/Todos/todoSlice.js'

const Todos = () => {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    const removeTodoHandler = (id) => {
        dispatch(removeTodo(id));
    }

    return (
        <div className='todo-items'>
            <ul>
                {todos.map((todo) => (
                    <li className='todo-item' key={todo.id}>
                        <p className='todo-title'>{todo.title}</p>
                        <button
                            onClick={() => removeTodoHandler(todo.id)}
                            className='btn btn-danger'
                        >Done</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos;
