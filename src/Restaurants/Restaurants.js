import React, { useEffect, useState } from 'react';
import './Restaurants.scss';
import RestaurantList from './RestaurantList/RestaurantList';
import apiInterface from '../core/APIInterface';
import RestaurantHeader from './RestaurantHeader/RestaurantHeader';
import CategoryList from './CategoryList/CategoryList';

const Restaurants = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);

  const getRestaurants = () => {
    apiInterface('allRestaurants', {})
      .then((response) => {
        const restaurantsData = response.allRestaurants
          .map((restaurant) => ({
            ...restaurant,
            restaurantCategory: JSON.parse(restaurant.restaurantCategory),
            restaurantCuisine: JSON.parse(restaurant.restaurantCuisine),
          }));

        const newCategories = restaurantsData
          .map((r) => r.restaurantCategory)
          .reduce((acc, resturantCategories) => {
            resturantCategories.forEach((category) => {
              if (!acc.includes(category)) {
                acc.push(category);
              }
            });
            return acc;
          });
        setCategories(newCategories);
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
      <CategoryList categories={categories} />
      <RestaurantList loading={isLoading} restaurants={restaurants} />
    </>
  );
};

export default Restaurants;
