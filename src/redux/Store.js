import { configureStore } from '@reduxjs/toolkit'
import login from './reducers/login'
import bookingReducer from './reducers/bookingReducer'


export const store = configureStore({
  reducer: {
    login: login,
    bookingData: bookingReducer,
  },
})