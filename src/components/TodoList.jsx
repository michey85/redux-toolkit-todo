import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { VStack } from '@chakra-ui/react'

import { useMatchMedia, useScrollbar } from '../hooks';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const { isMobile } = useMatchMedia();
  const todoWrapper = useRef(null);
  const hasScroll = !isMobile && todos.length > 3;

  useScrollbar(todoWrapper, hasScroll);

  return (
    <div style={{ marginTop: '1rem', height: hasScroll ? '120px' : 'auto', minHeight: '120px' }} ref={todoWrapper}>
      <VStack spacing={2}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
          />
        ))}
      </VStack>
    </div>
  );
};

export default TodoList;
