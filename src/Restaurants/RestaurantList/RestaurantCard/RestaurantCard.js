import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantCard.scss';
import Badge from '../../../components/Badge/Badge';

const RestaurantCard = ({ restaurant }) => (
  <div className="restaurant-card">
    <img src={restaurant.restaurantImage} alt={restaurant.restaurantName} className="restaurant-card__image" />

    <div className="restaurant-card__detail">
      <h4 className="restaurant-card__detail__name">{restaurant.restaurantName}</h4>
      <Badge
        color={`${restaurant.isOpen ? 'primary' : 'danger'}`}
        text={`${restaurant.isOpen ? 'Opened' : 'Closed'}`}
      />
    </div>

    <div className="restaurant-card__description">
      {restaurant.restaurantDescription}
    </div>
  </div>
);

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    restaurantName: PropTypes.string,
    restaurantImage: PropTypes.string,
    isOpen: PropTypes.bool,
    restaurantDescription: PropTypes.string,
  }).isRequired,
};

export default RestaurantCard;
