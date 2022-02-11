import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import * as api from '../api';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleweare) => getDefaultMiddleweare({
    thunk: {
      extraArgument: api,
    }
  })
});
