import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;