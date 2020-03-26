import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Screen from '../Screen';

import MealCardListContainer from '../../containers/meal/cardListContainer';

import TotalValuesContainer from '../../containers/todayValuesContainer';

const TodayScreen = (props) => {
  const { navigation } = props;

  // eslint-disable-next-line no-unused-vars
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  const TopNavigation = () => (
    <TotalValuesContainer
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
      <MealCardListContainer />
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
};

export default TodayScreen;
