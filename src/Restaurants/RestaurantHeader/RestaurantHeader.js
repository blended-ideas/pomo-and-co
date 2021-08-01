import React from 'react';
import Button from '../../components/Button/Button';
import { ReactComponent as BackIcon } from '../../resources/icons/chevron-left.svg';
import { ReactComponent as FilterIcon } from '../../resources/icons/filter.svg';
import { ReactComponent as CartIcon } from '../../resources/icons/shopping-cart.svg';
import './RestaurantHeader.scss';

const RestaurantHeader = () => (
  <header className="restaurant-header">
    <Button iconOnly className="restaurant-header__back-icon">
      <BackIcon />
    </Button>

    <Button className="restaurant-header__filter-icon" iconOnly>
      <FilterIcon />
    </Button>

    {/* <Search /> */}

    <Button className="restaurant-header__cart-icon" color="danger" iconOnly>
      <CartIcon />
    </Button>
  </header>
);

export default RestaurantHeader;
