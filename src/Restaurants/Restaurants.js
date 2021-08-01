import React, { useEffect } from 'react';
import './Restaurants.scss';
import { useDispatch } from 'react-redux';
import RestaurantList from './RestaurantList/RestaurantList';
import RestaurantHeader from './RestaurantHeader/RestaurantHeader';
import CategoryList from './CategoryList/CategoryList';
import populateRestaurantStore from '../core/populateRestaurantStore';

const Restaurants = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    populateRestaurantStore(dispatch);
  }, []);

  return (
    <>
      <RestaurantHeader />
      <CategoryList />
      <RestaurantList />
    </>
  );
};

export default Restaurants;
