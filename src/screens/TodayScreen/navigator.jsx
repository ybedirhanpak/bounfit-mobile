import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TodayScreen from './todayScreen';

const Stack = createStackNavigator();

const TodayNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Today" component={TodayScreen} />
  </Stack.Navigator>
);

export default TodayNavigator;
