import React, { useEffect, useState } from 'react';
import './Restaurants.scss';
import RestaurantList from './RestaurantList/RestaurantList';
import apiInterface from '../core/APIInterface';

const Restaurants = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    apiInterface('allRestaurants', {})
      .then((response) => {
        setRestaurants(response.allRestaurants);
        setIsLoading(false);
      });
  }, []);

  return (
    <RestaurantList loading={isLoading} restaurants={restaurants} />
  );
};

export default Restaurants;
