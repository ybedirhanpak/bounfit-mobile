import React, { useState } from 'react';
import { StyleSheet, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { TopNavigation } from '@ui-kitten/components';
import Screen from '../Screen';
import SchoolCardContainer from '../../containers/School/schoolCard';

const SchoolScreen = (props) => {
  const { navigation } = props;
  const [refreshing, setRefreshing] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 500);
  };

  return (
    <Screen
      renderNavigation={() => (
        <TopNavigation title="SCHOOL" alignment="center" />
      )}
      style={styles.screen}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <SchoolCardContainer refreshing={refreshing} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

SchoolScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SchoolScreen;
