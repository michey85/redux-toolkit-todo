import { createSlice } from '@reduxjs/toolkit';

const initialState = 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => state === 'light' ? 'dark' : 'light',
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;