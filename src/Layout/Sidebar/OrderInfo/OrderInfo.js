import React from 'react';
import { ReactComponent as CloseIcon } from '../../../resources/icons/close.svg';
import { ReactComponent as OrderIcon } from '../../../resources/icons/clock.svg';
import { ReactComponent as ArrowRight } from '../../../resources/icons/arrow-right.svg';
import './OrderInfo.scss';
import Button from '../../../components/Button/Button';

const OrderInfo = () => (
  <div className="order-info">
    <CloseIcon className="order-info__icon" />

    <span className="order-info__clock">
      <OrderIcon className="order-info__clock__icon" />
    </span>

    <h5>Your Order is now Ready</h5>

    <p className="order-info__detail">
      Splint Doumo
      <br />
      Order Id: #ED564F
    </p>

    <Button block className="order-info__detail__button">
      Details
      <ArrowRight />
    </Button>
  </div>
);

export default OrderInfo;
