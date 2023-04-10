import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategoryStatus: (state) => {
      return state.status;
    },
  },
});

export const { getCategoryStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
