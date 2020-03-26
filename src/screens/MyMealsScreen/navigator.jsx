import React from 'react';
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import MyMealsScreen from './myMealsScreen';
import EditMealScreen from '../EditMealScreen';

const Stack = createStackNavigator();

const MyMealsNavigator = () => (
  <Stack.Navigator
    headerMode="none"
    mode="card"
    screenOptions={{
      transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
      },
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen
      name="MyMeals"
      component={MyMealsScreen}
    />
    <Stack.Screen
      name="EditMeal"
      component={EditMealScreen}
    />
  </Stack.Navigator>
);

export default MyMealsNavigator;
