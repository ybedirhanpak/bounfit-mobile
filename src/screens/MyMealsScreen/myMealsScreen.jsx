import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Modal,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import Screen from '../Screen';
import TotalValuesContainer from '../../containers/todayValuesContainer';
import MealSmallCardListContainer from '../../containers/meal/smallCardListContainer';
import CreateMealContainer from '../../containers/createMealContainer';

const MyMealsScreen = (props) => {
  const { navigation } = props;

  const [modalVisible, setModalVisible] = useState(false);

  const styles = useStyleSheet(themedStyles);

  // eslint-disable-next-line no-unused-vars
  const navigateTo = (screen, payload) => {
    navigation.navigate(screen, payload);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const TopNavigation = () => (
    <TotalValuesContainer
      hasAdd
      onAddPress={openModal}
    />
  );

  return (
    <Screen
      noScroll
      renderNavigation={TopNavigation}
      style={styles.screen}
    >
      <Layout style={styles.container}>
        <Layout style={styles.container}>
          <MealSmallCardListContainer
            onAddPress={(meal) => console.log('Meal add: ', meal.name)}
            onEditPress={(meal) => navigateTo('EditMeal', { meal })}
          />
        </Layout>
      </Layout>
      <Modal
        style={styles.modal}
        backdropStyle={styles.backdrop}
        onBackdropPress={closeModal}
        visible={modalVisible}
      >
        <CreateMealContainer
          closeModal={closeModal}
          navigateExplore={() => navigateTo('Explore')}
          navigateEditMeal={(meal) => navigateTo('EditMeal', { meal })}
        />
      </Modal>
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

MyMealsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default MyMealsScreen;
