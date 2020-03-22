import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout } from '@ui-kitten/components';
import Screen from '../Screen';
import MealCard from '../../components/mealCard';
import ValuesInfo from '../../components/valuesInfo';
import AddMeal from '../../components/addMeal';
import MEAL from '../../defaults/meal';

const TodayScreen = (props) => {
  const { navigation, meals } = props;

  // eslint-disable-next-line no-unused-vars
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  const TopNavigation = () => <ValuesInfo />;

  const renderMeals = () => {
    const mealCards = meals.map((meal, index) => (
      <MealCard
        key={`${meal.name}-${index}`}
        containerStyle={styles.meal}
        meal={meal}
      />
    ));
    return mealCards;
  };

  return (
    <Screen
      renderNavigation={TopNavigation}
      style={styles.screen}
    >
      <Layout style={styles.mealGroup}>
        {renderMeals()}
        <AddMeal
          onPress={() => navigateTo('AddMeal')}
        />
      </Layout>
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
  meals: PropTypes.arrayOf(MEAL.propType).isRequired,
};

const mapStateToProps = (state) => ({
  meals: state.user.today.meals,
});

export default connect(mapStateToProps, null)(TodayScreen);
