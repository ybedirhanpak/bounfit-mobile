import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Text,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import Screen from '../Screen';
import ValuesInfo from '../../components/valuesInfo';

import MEAL from '../../defaults/meal';

const EditMealScreen = (props) => {
  const { navigation, route } = props;
  const { params } = route;
  const { meal } = params;

  const styles = useStyleSheet(themedStyles);

  // eslint-disable-next-line no-unused-vars
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  const TopNavigation = () => (
    <ValuesInfo hasBack onBackPress={() => navigateTo('MyMeals')} />
  );

  return (
    <Screen noScroll renderNavigation={TopNavigation} style={styles.screen}>
      <Layout style={styles.container}>
        <Layout style={styles.container}>
          {meal && <Text>{meal.name}</Text>}
        </Layout>
      </Layout>
    </Screen>
  );
};

const themedStyles = StyleService.create({
  screen: {
    flex: 1,
  },
  modal: {
    flex: 1,
    width: '90%',
    height: '25%',
    minHeight: 160,
    position: 'absolute',
    top: '30%',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  tabGroup: {
    flex: 1,
    flexDirection: 'row',
  },
  tabButton: {
    flex: 1,
    borderRadius: 0,
  },
  container: {
    flex: 1,
  },
});

EditMealScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      meal: MEAL.propType.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMealScreen;
