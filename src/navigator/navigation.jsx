import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon, StyleService, useStyleSheet } from '@ui-kitten/components';

import { SafeAreaView } from 'react-native-safe-area-context';

// Screens
import SchoolScreen from '../screens/SchoolScreen';
import TodayScreen from '../screens/TodayScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MyMealsScreen from '../screens/MyMealsScreen';

// Icons
const SchoolIcon = (style) => <Icon {...style} name="book-open-outline" />;
const TodayIcon = (style) => <Icon {...style} name="flash-outline" />;
const ExploreIcon = (style) => <Icon {...style} name="globe-2-outline" />;
const ProfileIcon = (style) => <Icon {...style} name="person-outline" />;
const MyMealsIcon = (style) => <Icon {...style} name="star-outline" />;

const BottomTab = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => {
  const onSelect = (index) => {
    navigation.navigate(state.routeNames[index]);
  };
  const style = useStyleSheet(themedStyle);
  return (
    <SafeAreaView style={style.bottomNavigation}>
      <BottomNavigation
        style={{ backgroundColor: 'white' }}
        selectedIndex={state.index}
        onSelect={onSelect}
        appearance="noIndicator"
      >
        <BottomNavigationTab title="School" icon={SchoolIcon} />
        <BottomNavigationTab title="Explore" icon={ExploreIcon} />
        <BottomNavigationTab title="Today" icon={TodayIcon} />
        <BottomNavigationTab title="MyMeals" icon={MyMealsIcon} />
        <BottomNavigationTab title="Profile" icon={ProfileIcon} />
      </BottomNavigation>
    </SafeAreaView>
  );
};

const TabNavigator = () => (
  <BottomTab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <BottomTab.Screen name="School" component={SchoolScreen} />
    <BottomTab.Screen name="Explore" component={ExploreScreen} />
    <BottomTab.Screen name="Today" component={TodayScreen} />
    <BottomTab.Screen name="MyMeals" component={MyMealsScreen} />
    <BottomTab.Screen name="Profile" component={ProfileScreen} />
  </BottomTab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

const themedStyle = StyleService.create({
  bottomNavigation: {
    elevation: 15,
  },
});

BottomTabBar.propTypes = {
  navigation: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
};

export default AppNavigator;
