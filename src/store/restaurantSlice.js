import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allRestaurants: [],
  restaurantDetails: [],
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    updateAllRestaurants: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.allRestaurants = action.payload;
    },
    updateRestaurantDetails: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.restaurantDetails = action.payload;
    },
  },
});

export const { updateAllRestaurants, updateRestaurantDetails } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
