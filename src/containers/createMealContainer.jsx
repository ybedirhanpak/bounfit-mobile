import React from 'react';
import { connect } from 'react-redux';
import { createUserMeal } from '../state/actions/user';
import CreateMeal from '../components/createMeal';

const CreateMealContainer = (props) => (
  <CreateMeal {...props} />
);

const mapDispatchToProps = (dispatch) => ({
  createMeal: (meal) => dispatch(createUserMeal(meal)),
});

export default connect(null, mapDispatchToProps)(CreateMealContainer);
