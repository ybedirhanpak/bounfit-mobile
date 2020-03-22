import PropTypes from 'prop-types';
import food from './food';
import values from './values';

const propType = PropTypes.shape({
  name: PropTypes.string,
  foods: PropTypes.arrayOf(food.propType),
  totalValues: values.propType,
});

const defaultProp = {
  name: 'default meal',
  foods: [food.defaultProp],
  totalValues: values.defaultProp,
};

export default {
  propType,
  defaultProp,
};
