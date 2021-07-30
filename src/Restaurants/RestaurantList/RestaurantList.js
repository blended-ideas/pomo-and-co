import React from 'react';
import PropTypes from 'prop-types';
import RestaurantCard from './RestaurantCard/RestaurantCard';
import './RestaurantList.scss';

const RestaurantList = ({ isLoading, restaurants }) => {
  if (isLoading) {
    return 'Loading';
  }
  return (
    <div className="restaurant-list">
      <h2>Restaurants</h2>
      <div className="restaurant-list__content">
        {restaurants.map((restaurant) => <RestaurantCard restaurant={restaurant} />)}
      </div>
    </div>
  );
};

RestaurantList.propTypes = {
  isLoading: PropTypes.bool,
  restaurants: PropTypes.shape([]),
};

RestaurantList.defaultProps = {
  isLoading: false,
  restaurants: [],
};

export default RestaurantList;
