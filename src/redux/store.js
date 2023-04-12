import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categories/categoriesSlice';
import booksSlice from './books/booksSlice';

export const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesSlice,
  },
})