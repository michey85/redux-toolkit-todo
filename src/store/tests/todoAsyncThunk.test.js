import { fetchTodos } from '../todoSlice';

global.fetch = jest.fn();

describe('todoThunk', () => {
  it('should fetchTodos with resolved response', async () => {
    const mockTodos = [{
      id: 1, title: 'test', completed: false, userId: 1
    }]
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockTodos)
    })
    
    const dispatch = jest.fn();
    const thunk = fetchTodos();

    await thunk(dispatch, () => ({}));

    const { calls } = dispatch.mock
    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe(fetchTodos.pending().type);
    expect(end[0].type).toBe(fetchTodos.fulfilled().type);
    expect(end[0].payload).toBe(mockTodos);
  });

  it('should fetchTodos with rejected response', async () => {
    fetch.mockResolvedValue({
      ok: false,
    })

    const dispatch = jest.fn();
    const thunk = fetchTodos();

    await thunk(dispatch, () => ({}));

    const { calls } = dispatch.mock
    expect(calls).toHaveLength(2);

    const [start, end] = calls;
    console.log(end);

    expect(start[0].type).toBe(fetchTodos.pending().type);
    expect(end[0].type).toBe(fetchTodos.rejected().type);
    expect(end[0].meta.rejectedWithValue).toBe(true);
    expect(end[0].payload).toBe("Can't fetch");
  });
});
