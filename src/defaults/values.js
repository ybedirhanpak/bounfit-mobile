import PropTypes from 'prop-types';

const propType = PropTypes.shape({
  protein: PropTypes.number,
  carb: PropTypes.number,
  fat: PropTypes.number,
  calories: PropTypes.number,
});

const defaultProp = {
  name: 'default raw food',
  protein: -1,
  carb: -1,
  fat: -1,
  calories: -1,
};

export default {
  propType,
  defaultProp,
};
