import todoReducer, {
  fetchTodos,
} from '../todoSlice';

const initialState = {
  todos: [],
  status: null,
  error: null,
};

describe('todoSlice', () => {
  it('should change status with "fetchTodos.pending" action', () => {
    const state = todoReducer(initialState, fetchTodos.pending());

    expect(state.status).toBe('loading')
    expect(state.error).toBeNull();
  });

  it('should fetch todos with "fetchTodos.fulfilled" action', () => {
    const todos = [{ id: 1, text: 'Redux', completed: false }];

    const state = todoReducer(initialState, fetchTodos.fulfilled(todos));
    
    expect(state).toEqual({
      todos,
      status: 'resolved',
      error: null,
    });
  });

  it('should change status and error with "fetchTodos.rejected"', () => {
    const action = {
      type: fetchTodos.rejected.type,
      payload: "Can't fetch",
    };
    // const state = todoReducer(initialState, fetchTodos.rejected("Can't fetch"));
    const state = todoReducer(initialState, action);

    expect(state).toEqual({
      todos: [],
      status: 'rejected',
      error: "Can't fetch",
    });
  });
});