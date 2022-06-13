import { useSelector } from 'react-redux';
import { selectTodos } from '../store/selectors';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector(selectTodos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
