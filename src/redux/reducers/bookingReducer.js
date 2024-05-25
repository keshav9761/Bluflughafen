

// userSlice.js

import { createAction, createReducer } from '@reduxjs/toolkit';

export const setBooking = createAction('booking/setBooking');

const initialState = {
  name: '',
  age: 0,
};

const bookingReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setBooking, (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
    });
});

export default bookingReducer;



