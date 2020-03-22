import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { TopNavigation } from '@ui-kitten/components';
import Screen from '../Screen';

const renderNavigation = () => (
  <TopNavigation title="EXPLORE" alignment="center" />
);

const ExploreScreen = ({ navigation }) => {
  // eslint-disable-next-line no-unused-vars
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <Screen renderNavigation={renderNavigation} style={styles.screen} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

ExploreScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ExploreScreen;
