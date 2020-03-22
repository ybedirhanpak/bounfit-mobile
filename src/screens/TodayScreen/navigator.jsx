import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TodayScreen from './todayScreen';
import AddMealScreen from '../AddMealScreen';

const Stack = createStackNavigator();

const TodayNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Today" component={TodayScreen} />
    <Stack.Screen name="AddMeal" component={AddMealScreen} />
  </Stack.Navigator>
);

export default TodayNavigator;
