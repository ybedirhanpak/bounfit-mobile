import PropTypes from 'prop-types';
import rawFood from './rawFood';
import values from './values';

const propType = PropTypes.shape({
  name: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    rawFood: rawFood.propType,
    quantity: PropTypes.number,
  })),
  total: PropTypes.shape({
    values: values.propType,
    quantity: PropTypes.number,
  }),
});

const defaultProp = {
  name: 'default food',
  ingredients: [{
    rawFood: rawFood.defaultProp,
    quantity: -1,
  }],
  total: {
    values: values.defaultProp,
    quantity: -1,
  },
};

export default {
  propType,
  defaultProp,
};
