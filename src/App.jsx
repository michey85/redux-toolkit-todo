import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { createTodo } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(createTodo(text)).then(({payload: {title}}) => {
        toast(`Todo ${title} were created`);
      })
      
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
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
