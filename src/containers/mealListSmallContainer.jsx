import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MealListSmall from '../components/mealListSmall';

import MEAL from '../defaults/meal';

const MealListSmallContainer = (props) => {
  const { userMeals } = props;
  return (
    <MealListSmall meals={userMeals} />
  );
};

MealListSmallContainer.propTypes = {
  userMeals: PropTypes.arrayOf(MEAL.propType).isRequired,
};

const mapStateToProps = (state) => ({
  userMeals: state.user.meals,
});

export default connect(mapStateToProps, null)(MealListSmallContainer);
