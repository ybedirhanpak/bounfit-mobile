import { connect } from 'react-redux';
import MealCardList from '../../components/meal/list/cardList';

const mapStateToProps = (state) => ({
  meals: state.user.today.meals,
});

export default connect(mapStateToProps, null)(MealCardList);
