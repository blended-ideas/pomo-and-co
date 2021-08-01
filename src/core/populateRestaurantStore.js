import apiInterface from './APIInterface';
import { updateAllRestaurants, updateRestaurantDetails } from '../store/restaurantSlice';
import store from '../store/store';

export default function populateRestaurantStore(dispatch) {
  const { restaurants } = store.getState();

  if (restaurants.allRestaurants.length > 0 && restaurants.restaurantDetails.length > 0) {
    return Promise.resolve();
  }

  return Promise.all([
    apiInterface('allRestaurants', {}),
    apiInterface('restaurantDetails', {}),
  ])
    .then((response) => {
      const restaurantsData = response[0].allRestaurants
        .map((restaurant) => ({
          ...restaurant,
          restaurantCategory: JSON.parse(restaurant.restaurantCategory),
          restaurantCuisine: JSON.parse(restaurant.restaurantCuisine),
        }));
      dispatch(updateAllRestaurants(restaurantsData));
      dispatch(updateRestaurantDetails(response[1].restaurantDetails));
      return null;
    });
}
