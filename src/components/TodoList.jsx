import { useSelector } from 'react-redux';
import { VStack } from '@chakra-ui/react'

import TodoItem from './TodoItem';
import { selectTodosByFilter } from '../store/selectors';

const TodoList = () => {
  const todos = useSelector(selectTodosByFilter);
  console.log('render todos')

  return (
    <VStack spacing={2} mt={4}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </VStack>
  );
};

export default TodoList;
