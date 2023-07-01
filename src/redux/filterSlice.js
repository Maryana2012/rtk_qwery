import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filtered:(state, action)=>{
      state.filter=action.payload
    }

  },
});

export const {filtered} = filterSlice.actions;

export default filterSlice.reducer;


//Selectors
export const filteredSelector = state=>state.filter.filter;