import { connect } from 'react-redux';
import { createUserMeal } from '../state/actions/user';
import CreateMeal from '../components/createMeal';

const mapDispatchToProps = (dispatch) => ({
  createMeal: (meal) => dispatch(createUserMeal(meal)),
});

export default connect(null, mapDispatchToProps)(CreateMeal);
