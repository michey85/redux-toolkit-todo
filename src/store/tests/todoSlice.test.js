import todoReducer, {
  addTodo,
  removeTodo,
  toggleComplete,
} from '../todoSlice';

describe('todoSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = todoReducer(undefined, { type: '' });

    expect(result).toEqual([]);
  });

  it('should add new todo item with "addTodo" action', () => {
    const action = { type: addTodo.type, payload: 'Hello' };

    const result = todoReducer([], action);

    expect(result[0].text).toBe('Hello');
  });

  it('should toggle todo status by id with "toggleComplete" action', () => {
    const todos = [{ id: 123, text: 'Redux', completed: false }];
    const action = { type: toggleComplete.type, payload: 123 };

    const result = todoReducer(todos, action);

    expect(result[0].completed).toBe(true);
  });

  it('should remove todo by id with "removeTodo" action', () => {
    const todos = [{ id: 123, text: 'Redux', completed: false }];
    const action = { type: removeTodo.type, payload: 123 };

    const result = todoReducer(todos, action);

    expect(result).toEqual([]);
  });
});
