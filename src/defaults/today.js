import PropTypes from 'prop-types';
import values from './values';
import meal from './meal';

const propType = PropTypes.shape({
  meals: PropTypes.arrayOf(meal.propType),
  totalValues: values.propType,
});

const defaultProp = {
  name: 'default today\'s plan',
  meals: [meal.defaultProp],
  totalValues: values.defaultProp,
};

export default {
  propType,
  defaultProp,
};
