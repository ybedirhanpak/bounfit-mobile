import { connect } from 'react-redux';
import MealSmallCardList from '../../components/meal/list/smallCardList';

const mapStateToProps = (state) => ({
  meals: state.user.meals,
});

export default connect(mapStateToProps, null)(MealSmallCardList);
