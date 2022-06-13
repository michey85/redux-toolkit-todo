import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo(state, action) {
            state.push({
              id: new Date().toISOString(),
              text: action.payload,
              completed: false,
            });
        },
        toggleComplete(state, action) {
            const toggledTodo = state.find(todo => todo.id === action.payload);
            toggledTodo.completed = !toggledTodo.completed;
        },
        removeTodo(state, action) {
            return state.filter(todo => todo.id !== action.payload);
        }
    },
});

export const {addTodo, toggleComplete, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;