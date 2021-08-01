import React, { useEffect, useState } from 'react';
import './Restaurants.scss';
import RestaurantList from './RestaurantList/RestaurantList';
import apiInterface from '../core/APIInterface';
import RestaurantHeader from './RestaurantHeader/RestaurantHeader';
import CategoryList from './CategoryList/CategoryList';

const Restaurants = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = () => {
    apiInterface('allRestaurants', {})
      .then((response) => {
        const restaurantsData = response.allRestaurants
          .map((restaurant) => ({
            ...restaurant,
            restaurantCategory: JSON.parse(restaurant.restaurantCategory),
            restaurantCuisine: JSON.parse(restaurant.restaurantCuisine),
          }));
        setRestaurants(restaurantsData);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <RestaurantHeader />
      <CategoryList />
      <RestaurantList loading={isLoading} restaurants={restaurants} />
    </>
  );
};

export default Restaurants;
