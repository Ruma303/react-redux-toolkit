import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos : [{ id: 1, title: 'Fare la spesa'}],
    currentId: 2
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: state.currentId,
                title: action.payload
            }
            state.todos.push(todo);
            state.currentId++;
            console.log(action);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload
            )
        },
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;

