import React from 'react';
import Button from '../../components/Button/Button';
import './CategoryList.scss';

const categories = [{
  name: 'Baked',
  icon: 'baked.png',
},
{
  name: 'Sweet',
  icon: 'sweet.png',
},
{
  name: 'Hot Dish',
  icon: 'hot-dish.png',
},
{
  name: 'Fast Food',
  icon: 'fast-food.png',
},
{
  name: 'Salads',
  icon: 'salads.png',
}];

const CategoryList = () => (
  <div className="categories">
    <h2>Categories</h2>
    <div className="categories__list">
      {
        categories.map((category) => (
          <div key={category.name} className="categories__list-item">
            <Button color="gray" iconOnly className="categories__list-item__button">
              <img src={`/logos/${category.icon}`} alt={category.name} />
            </Button>
            <h4>{category.name}</h4>
          </div>
        ))
      }
    </div>
  </div>
);

export default CategoryList;
