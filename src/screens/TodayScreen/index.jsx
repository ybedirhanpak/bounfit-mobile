import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Layout, Icon } from '@ui-kitten/components';
import Screen from '../Screen';
import MealCardSmall from '../../components/mealCardSmall';
import MealTotalInfo from '../../components/mealTotalInfo';

const FABIcon = (style) => <Icon {...style} name="plus-outline" />;

const renderTopNavigation = () => <MealTotalInfo />;

const TodayScreen = ({ navigation }) => {
  // eslint-disable-next-line no-unused-vars
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  const fabOnPress = () => {
    console.log('IM FABulous');
  };

  return (
    <Screen
      renderNavigation={renderTopNavigation}
      style={styles.screen}
      fabIcon={FABIcon}
      fab={{
        iconRenderer: FABIcon,
        onPress: fabOnPress,
      }}
    >
      <Layout style={styles.mealGroup}>
        <MealCardSmall containerStyle={styles.meal} />
        <MealCardSmall containerStyle={styles.meal} />
        <MealCardSmall containerStyle={styles.meal} />
        <MealCardSmall containerStyle={styles.meal} />
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
};

export default TodayScreen;
