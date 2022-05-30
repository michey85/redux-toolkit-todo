import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './todoSlice';
import filterReducer from './filterSlice';
import themeReducer from './themeSelector';

export default configureStore({
  reducer: {
    todos: todoReducer,
    filters: filterReducer,
    theme: themeReducer,
  },
});
