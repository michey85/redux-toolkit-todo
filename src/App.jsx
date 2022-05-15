import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import './App.css';
import { Flex } from '@chakra-ui/react';


function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const count = useSelector(state => state.todos.todos.length);

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({text}));
      setText('');
    }
  }

  return (
    <div className='App'>
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
      <Flex justifyContent={'center'} borderTop={'2px'} mt="5">
        <b>Total todos: {count}</b> 
      </Flex>
    </div>
  );
}

export default App;
