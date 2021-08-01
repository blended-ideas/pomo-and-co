import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './restaurantSlice';

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
  },
});

export default store;
