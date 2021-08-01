import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { ReactComponent as BackIcon } from '../../resources/icons/chevron-left.svg';
import { ReactComponent as FilterIcon } from '../../resources/icons/filter.svg';
import { ReactComponent as SearchIcon } from '../../resources/icons/search.svg';
import { ReactComponent as RestaurantIcon } from '../../resources/icons/restaurant.svg';
import { ReactComponent as CartIcon } from '../../resources/icons/shopping-cart.svg';
import { ReactComponent as MenuIcon } from '../../resources/icons/menu.svg';
import './RestaurantHeader.scss';

const RestaurantHeader = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <header className="restaurant-header">
      <Button iconOnly className="restaurant-header__back-icon">
        <BackIcon />
      </Button>

      <div className="restaurant-header__location">
        <RestaurantIcon className="restaurant-header__location__restaurant-icon" />
        <h5 className="restaurant-header__location__name">Da Otto</h5>
        <MenuIcon className="restaurant-header__location__menu-icon" />
      </div>

      <div className="restaurant-header__search">
        <SearchIcon className="restaurant-header__search-icon" />
        <input
          className="restaurant-header__search-input"
          type="text"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          title="Search"
          placeholder="Search for Restaurants (Press Enter to search)"
        />
      </div>

      <Button className="restaurant-header__filter-icon" iconOnly>
        <FilterIcon />
      </Button>

      <Button className="restaurant-header__cart-icon" color="danger" iconOnly>
        <CartIcon />
      </Button>
    </header>
  );
};

export default RestaurantHeader;
