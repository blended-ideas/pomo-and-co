import React, { useEffect } from 'react';
import { useHistory, useParams, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import populateRestaurantStore from '../core/populateRestaurantStore';
import './RestaurantDetail.scss';
import { ReactComponent as PhoneIcon } from '../resources/icons/phone.svg';
import { ReactComponent as ClockIcon } from '../resources/icons/clock2.svg';
import { ReactComponent as WorldIcon } from '../resources/icons/world.svg';
import Button from '../components/Button/Button';
import { ReactComponent as BackIcon } from '../resources/icons/chevron-left.svg';
import { ReactComponent as ShoppingCartIcon } from '../resources/icons/shopping-cart.svg';
import Tag from '../components/Tag/Tag';

const RestaurantDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const restaurant = useSelector((state) => state.restaurants.restaurantDetails
    .find((res) => res.id === parseInt(id, 10)));

  useEffect(() => {
    populateRestaurantStore(dispatch);
  }, []);

  return (
    <div className="restaurant-detail">
      <header className="restaurant-detail__header">
        <Button
          iconOnly
          className="restaurant-detail__header__back-icon"
          onClick={() => history.push('/')}
        >
          <BackIcon />
        </Button>

        <Button iconOnly className="restaurant-detail__header__cart-icon" color="danger">
          <ShoppingCartIcon />
          <Tag color="black"> 2 </Tag>
        </Button>
      </header>

      <div className="restaurant-detail__content">
        <div className="restaurant-detail__info">
          <h1>{restaurant?.restaurantName}</h1>
          <p className="restaurant-detail__info__description">{restaurant?.restaurantDescription}</p>

          {
            restaurant?.openingHours && (
            <div className="restaurant-detail__contact">
              <ClockIcon />
              <div className="restaurant-detail__contact__text">
                {restaurant?.openingHours.split(',').join('\n')}
              </div>
            </div>
            )
          }

          {
            restaurant?.contactNumber && (
            <div className="restaurant-detail__contact">
              <PhoneIcon />
              <div className="restaurant-detail__contact__text">
                {restaurant?.contactNumber}
              </div>
            </div>
            )
          }

          {
            restaurant?.websiteUrl && (
            <div className="restaurant-detail__contact">
              <WorldIcon />
              <div className="restaurant-detail__contact__text">
                {restaurant?.websiteUrl}
              </div>
            </div>
            )
          }
        </div>
        <div className="restaurant-detail__info__image">
          <img src={restaurant?.restaurantImage} alt={restaurant?.restaurantName} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(RestaurantDetail);
