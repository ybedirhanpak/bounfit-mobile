import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Text, TopNavigation, Button } from '@ui-kitten/components';
import Screen from '../Screen';
import { denemeAction } from '../../state/actions/meal';

const renderNavigation = () => (
  <TopNavigation title="EXPLORE" alignment="center" />
);

const ExploreScreen = ({ navigation, meal, denemeFunc }) => {
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <Screen renderNavigation={renderNavigation} style={styles.screen}>
      <Text>{meal.deneme}</Text>
      <Button onPress={() => denemeFunc('YAHYAA')}>Hello</Button>
    </Screen>
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
  meal: PropTypes.any.isRequired,
  denemeFunc: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => ({
  meal: state.meal,
});

const mapDispatchToProps = (dispatch) => ({
  denemeFunc: (text) => dispatch(denemeAction(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreScreen);
