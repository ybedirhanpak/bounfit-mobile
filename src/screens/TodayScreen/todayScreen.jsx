import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout } from '@ui-kitten/components';
import Screen from '../Screen';
import MealCard from '../../components/mealCard';
import ValuesInfo from '../../components/valuesInfo';
import AddMeal from '../../components/addMeal';
import MealList from '../../components/mealList';
import MEAL from '../../defaults/meal';

const TodayScreen = (props) => {
  const { navigation, meals } = props;

  // eslint-disable-next-line no-unused-vars
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  const TopNavigation = () => (
    <ValuesInfo
      hasAdd
      onAddPress={() => navigateTo('MyMeals')}
    />
  );

  return (
    <Screen
      noScroll
      renderNavigation={TopNavigation}
      style={styles.screen}
    >
      <MealList meals={meals} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 16,
  },
  addMeal: {
    marginHorizontal: 12,
    marginBottom: 16,
  },
});

TodayScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  meals: PropTypes.arrayOf(MEAL.propType).isRequired,
};

const mapStateToProps = (state) => ({
  meals: state.user.today.meals,
});

export default connect(mapStateToProps, null)(TodayScreen);
