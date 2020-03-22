import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout, Icon } from '@ui-kitten/components';
import Screen from '../Screen';
import MealCardSmall from '../../components/mealCardSmall';
import MealTotalInfo from '../../components/mealTotalInfo';

import dailyPlan from '../../defaults/dailyPlan';

const renderFabIcon = (style) => <Icon {...style} name="plus-outline" />;

const TodayScreen = (props) => {
  const { navigation, today } = props;

  // eslint-disable-next-line no-unused-vars
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  const onFabPress = () => {
    console.log('Go to AddMealScreen');
  };

  const renderTopNavigation = () => (
    <MealTotalInfo values={today.totalValues} />
  );

  const renderMeals = () => {
    const meals = today.meals.map((meal, index) => (
      <MealCardSmall
        key={`${meal.name}-${index}`}
        containerStyle={styles.meal}
        meal={meal}
      />
    ));
    return meals;
  };

  return (
    <Screen
      renderNavigation={renderTopNavigation}
      style={styles.screen}
      fab={{
        iconRenderer: renderFabIcon,
        onPress: onFabPress,
      }}
    >
      <Layout style={styles.mealGroup}>{renderMeals()}</Layout>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mealGroup: {
    marginTop: 20,
  },
  meal: {
    marginBottom: 15,
  },
});

TodayScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  today: dailyPlan.propType,
};

TodayScreen.defaultProps = {
  today: dailyPlan.defaultProp,
};

const mapStateToProps = (state) => ({
  today: state.user.today,
});

export default connect(mapStateToProps, null)(TodayScreen);
