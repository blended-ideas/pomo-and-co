import React from 'react';
import Restaurants from '../Restaurants/Restaurants';
import RestaurantDetail from '../RestaurantDetail/RestaurantDetail';

const routes = Object.freeze([
  {
    id: 'restaurant-detail',
    path: '/restaurant-detail/:id',
    exact: false,
    component: <RestaurantDetail />,
  },
  {
    id: 'restaurants',
    path: '/',
    exact: true,
    component: <Restaurants />,
  },
]);

export default routes;
