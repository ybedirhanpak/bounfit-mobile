import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyMealsScreen from './myMealsScreen';
import EditMealScreen from '../EditMealScreen';

const Stack = createStackNavigator();

const MyMealsNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="MyMeals" component={MyMealsScreen} />
    <Stack.Screen name="EditMeal" component={EditMealScreen} />
  </Stack.Navigator>
);

export default MyMealsNavigator;
