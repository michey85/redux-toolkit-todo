import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// actions predicates
function isPendingAction(action) {
    return action.type.endsWith('/pending');
}
function isRejectedAction(action) {
    return action.type.endsWith('/rejected');
}
function isFulfilledAction(action) {
    return action.type.endsWith('/fulfilled');
}

// thunks
export const createTodo = createAsyncThunk(
    'todos/create-todo',
    async (todoTitle, {extra: api}) => {
        return api.createTodo(todoTitle);
    }
)
export const toggleTodo = createAsyncThunk(
    'todos/toggle-todo',
    async (todoId, {getState, extra: api}) => {
        const todo = getState().todos.todos.find(todo => todo.id === todoId);

        return api.toggleTodo(todoId, {
            ...todo,
            completed: !todo.completed,
        });
    }
);
export const removeTodo = createAsyncThunk(
    'todos/remove-todo',
    async (todoId, {extra: api}) => {
        return api.removeTodo(todoId)
    }
)

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        loading: 'idle', // 'pending'
        error: null,
        currentRequestId: null,
    },
    reducers: {
        toggleComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload)
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                const updatedTodo = action.payload;
                const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
                state.todos[index] = updatedTodo;
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                console.log(action.meta)
                state.todos = state.todos.filter(todo => todo.id !== action.meta.arg);
            })
            .addMatcher(isPendingAction, (state, action) => {
                state.loading = 'pending';
                state.currentRequestId = action.meta.requestId;
            })
            .addMatcher(isRejectedAction, (state, action) => {
                if (action.payload) {
                    state.error = action.payload
                } else {
                    state.error = action.meta.error
                }
            })
            .addMatcher(isFulfilledAction, (state) => {
                state.loading = 'idle';
                state.currentRequestId = null;
            })
    }
});

// export const {removeTodo} = todoSlice.actions;

export default todoSlice.reducer;