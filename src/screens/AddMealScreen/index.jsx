import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import {
  Layout,
  Icon,
  Tab,
  TabView,
  Modal,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import Screen from '../Screen';
import ValuesInfo from '../../components/valuesInfo';
import UserTab from './userTab';
import OnlineTab from './onlineTab';
import CreateMeal from './createMeal';

const FabIcon = (style) => <Icon {...style} name="plus-outline" />;
const OnlineIcon = (style) => <Icon {...style} name="globe-outline" />;
const UserIcon = (style) => <Icon {...style} name="person-outline" />;

const AddMealScreen = (props) => {
  const { navigation } = props;

  const [tabIndex, setTabIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const styles = useStyleSheet(themedStyles);

  // eslint-disable-next-line no-unused-vars
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const TopNavigation = () => <ValuesInfo hasBack backPress={goBack} />;

  return (
    <Screen
      renderNavigation={TopNavigation}
      style={styles.screen}
      fab={{
        iconRenderer: FabIcon,
        onPress: openModal,
      }}
    >
      <TabView selectedIndex={tabIndex} onSelect={setTabIndex}>
        <Tab title="My Meals" icon={UserIcon}>
          <UserTab />
        </Tab>
        <Tab title="Online" icon={OnlineIcon}>
          <OnlineTab />
        </Tab>
      </TabView>
      <Modal
        style={styles.modal}
        backdropStyle={styles.backdrop}
        onBackdropPress={closeModal}
        visible={modalVisible}
      >
        <CreateMeal closeModal={closeModal} />
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
    minHeight: 150,
    position: 'absolute',
    top: '30%',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});

AddMealScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default AddMealScreen;
