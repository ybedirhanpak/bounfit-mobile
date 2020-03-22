import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Layout, Tab, TabView } from '@ui-kitten/components';
import Screen from '../Screen';
import MealCardSmall from '../../components/mealCardSmall';
import ValuesInfo from '../../components/valuesInfo';
import DAILYPLAN from '../../defaults/dailyPlan';
import MEAL from '../../defaults/meal';

const FabIcon = (style) => <Icon {...style} name="plus-outline" />;

const UserIcon = (style) => <Icon {...style} name="person-outline" />;

const OnlineIcon = (style) => <Icon {...style} name="globe-outline" />;

const AddMealScreen = (props) => {
  const { navigation, today, userMeals } = props;

  const [bottomTabsIndex, setBottomTabsIndex] = React.useState(0);

  // eslint-disable-next-line no-unused-vars
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const onFabPress = () => {
    console.log('Go to AddMealScreen');
  };

  const renderTopNavigation = () => (
    <ValuesInfo values={today.totalValues} hasBack backPress={goBack} />
  );

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

  const renderOnlineMeals = () => {
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
        iconRenderer: FabIcon,
        onPress: onFabPress,
      }}
    >
      <TabView selectedIndex={bottomTabsIndex} onSelect={setBottomTabsIndex}>
        <Tab title="My Meals" icon={UserIcon}>
          <Layout style={styles.tabContainer}>
            {renderMyMeals()}
          </Layout>
        </Tab>
        <Tab title="Online" icon={OnlineIcon}>
          <Layout style={styles.tabContainer}>
            {renderOnlineMeals()}
          </Layout>
        </Tab>
      </TabView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  tabContainer: {
    paddingTop: 20,
  },
  mealGroup: {
    marginTop: 20,
  },
  meal: {
    marginBottom: 15,
  },
});

AddMealScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  today: DAILYPLAN.propType.isRequired,
  userMeals: PropTypes.arrayOf(MEAL.propType).isRequired,
};

const mapStateToProps = (state) => ({
  today: state.user.today,
  userMeals: state.user.meals,
});

export default connect(mapStateToProps, null)(AddMealScreen);
