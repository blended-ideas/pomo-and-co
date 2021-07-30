import React from 'react';
import { useParams, withRouter } from 'react-router-dom';

const RestaurantDetail = () => {
  const { slug } = useParams();

  return (
    <div>
      Restaurant Detail -
      {' '}
      {slug}
    </div>
  );
};

export default withRouter(RestaurantDetail);
