const BASE_TODOS_URL = 'https://jsonplaceholder.typicode.com/todos/';

const commonConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const createTodo = async (todoTitle) => {
    const response = await fetch(BASE_TODOS_URL, {
            ...commonConfig,
            method: 'POST',
            body: JSON.stringify({
                userId: 1,
                title: todoTitle,
                completed: false
            }),
        });
        const data = await response.json();
        return data;
}
export const toggleTodo = async (todoId, fields) => {
    const response = await fetch(BASE_TODOS_URL+todoId, {
            ...commonConfig,
            method: 'PATCH',
            body: JSON.stringify(fields),
        });
        const data = await response.json();
        return data;
}
export const removeTodo = async (todoId) => {
    const response = await fetch(BASE_TODOS_URL + todoId, {
        ...commonConfig,
        method: 'DELETE',
    });
    return await response.json();
}