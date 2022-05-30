import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  FormControl,
  Input,
} from '@chakra-ui/react';

import { addTodo } from '../store/todoSlice';

const NewTodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText('');
    }
  }

  const handleKey = (event) => {
    if (event.key === "Enter") handleAction();
  } 

  return (
    <FormControl display={'flex'} mt={6}>
      <Input
        id="newtodo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKey}
      />
      <Button onClick={handleAction}>Add todo</Button>
    </FormControl>
  );
};

export default NewTodoForm;
