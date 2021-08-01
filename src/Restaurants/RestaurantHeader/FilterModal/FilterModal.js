import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Button from '../../../components/Button/Button';
import { ReactComponent as CloseIcon } from '../../../resources/icons/close.svg';
import { ReactComponent as FireIcon } from '../../../resources/icons/fire.svg';
import { ReactComponent as ChervonDownIcon } from '../../../resources/icons/chervon-down.svg';
import Modal from '../../../components/Modal/Modal';
import './FilterModal.scss';

const FilterModal = ({ closeModal }) => {
  const cuisines = useSelector((state) => state.restaurants.allRestaurants
    .reduce((acc, restaurant) => {
      restaurant.restaurantCuisine.forEach((cuisine) => {
        if (!acc.includes(cuisine)) {
          acc.push(cuisine);
        }
      });
      return acc;
    }, []));
  cuisines.unshift('All');

  return (
    <Modal>
      <div className="filter-modal">
        <div className="filter-modal__header">
          <h2>Search Filters</h2>
          <Button iconOnly color="gray" onClick={closeModal}>
            <CloseIcon />
          </Button>
        </div>

        <div className="filter-modal__sort-by">
          <h2>Sort by</h2>

          <div className="filter-modal__sort-by__content">
            <FireIcon className="filter-modal__sort-by__icon" />
            <span>open</span>
          </div>
        </div>

        <div className="filter-modal__cuisine">
          <h2>Cuisine</h2>

          <div className="filter-modal__cuisine__list">
            {
                cuisines.map((cuisine, index) => (
                  <span
                    key={cuisine}
                    className={`filter-modal__cuisine__list__item ${index === 0 ? 'filter-modal__cuisine__list__item--active' : ''}`}
                  >
                    {cuisine}
                  </span>
                ))
            }
          </div>
        </div>

        <div className="filter-modal__see-more">
          <div>
            See More
          </div>

          <ChervonDownIcon />
        </div>

        <Button onClick={closeModal} className="filter-modal__apply-filters">
          Apply filters
        </Button>
      </div>
    </Modal>
  );
};

FilterModal.propTypes = {
  closeModal: PropTypes.func,
};

FilterModal.defaultProps = {
  closeModal: () => {
  },
};

export default FilterModal;
