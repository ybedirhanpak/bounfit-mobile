import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { TopNavigation } from '@ui-kitten/components';
import Screen from '../Screen';

const renderNavigation = () => (
  <TopNavigation title="PROFILE" alignment="center" />
);

const ProfileScreen = ({ navigation }) => {
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return <Screen renderNavigation={renderNavigation} style={styles.screen} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProfileScreen;
