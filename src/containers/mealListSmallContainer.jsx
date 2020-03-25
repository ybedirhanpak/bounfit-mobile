import { connect } from 'react-redux';
import MealListSmall from '../components/mealListSmall';

const mapStateToProps = (state) => ({
  meals: state.user.meals,
});

export default connect(mapStateToProps, null)(MealListSmall);
