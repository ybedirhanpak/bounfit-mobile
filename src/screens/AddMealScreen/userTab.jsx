import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Layout, Tab } from '@ui-kitten/components';
import MealCardSmall from '../../components/mealCardSmall';

import MEAL from '../../defaults/meal';

const UserIcon = (style) => <Icon {...style} name="person-outline" />;

const UserTab = (props) => {
  const { userMeals } = props;

  const renderMyMeals = () => {
    const meals = userMeals.map((meal, index) => (
      <MealCardSmall
        key={`${meal.name}-${index}`}
        containerStyle={styles.meal}
        meal={meal}
      />
    ));
    return meals;
  };

  return (
    <Layout style={styles.container}>
      {renderMyMeals()}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  meal: {
    marginBottom: 15,
  },
});

UserTab.propTypes = {
  userMeals: PropTypes.arrayOf(MEAL.propType).isRequired,
};

const mapStateToProps = (state) => ({
  userMeals: state.user.meals,
});

export default connect(mapStateToProps, null)(UserTab);
