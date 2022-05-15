import { useDispatch } from 'react-redux';
import { Checkbox, Text, CloseButton, HStack } from '@chakra-ui/react';
import {toggleComplete, removeTodo} from '../store/todoSlice';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <HStack spacing={3}>
      <Checkbox
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <Text>{text}</Text>
      <CloseButton  onClick={() => dispatch(removeTodo({id}))} />
    </HStack>
  );
};

export default TodoItem;
