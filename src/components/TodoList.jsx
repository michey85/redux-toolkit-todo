import { useSelector } from 'react-redux';
import { todosSelectors } from '../store/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector(todosSelectors.selectAll);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id + todo.title}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
