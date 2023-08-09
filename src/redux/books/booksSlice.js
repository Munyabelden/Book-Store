import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const POST_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AeuLAMbJtFADS9a8kaop/books';

export const fetchPosts = createAsyncThunk('bookstore/books/LOAD', async () => {
  const response = await axios.get(POST_URL);
  return response.data;
});

export const createBook = createAsyncThunk('bookstore/books/CREATE', async ({ author, title, category }) => {
  const book = {
    item_id: uuidv4(), author, title, category,
  };
  await axios.post(POST_URL, book);
  const response = await axios.get(POST_URL);
  return response.data;
});

export const removeBook = createAsyncThunk('bookstore/books/REMOVE', async (bookId) => {
  await axios.delete(`${POST_URL}/${bookId}`);
  const response = await axios.get(POST_URL);
  return response.data;
});

export default function booksSlice(state = {}, action) {
  switch (action.type) {
    case fetchPosts.fulfilled.type:
    case createBook.fulfilled.type:
    case removeBook.fulfilled.type:
      return action.payload;
    default:
      return state;
  }
}
