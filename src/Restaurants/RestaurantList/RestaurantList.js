import React from 'react';
import { useSelector } from 'react-redux';
import RestaurantCard from './RestaurantCard/RestaurantCard';
import './RestaurantList.scss';

const RestaurantList = () => {
  const restaurants = useSelector((state) => state.restaurants.allRestaurants);

  return (
    <div className="restaurant-list">
      <h2>Restaurants</h2>
      <div className="restaurant-list__content">
        {
          restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.restaurantName} restaurant={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default RestaurantList;
