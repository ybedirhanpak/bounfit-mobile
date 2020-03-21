import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import SchoolScreen from "./schoolScreen";

const Stack = createStackNavigator();

const SchoolNavigator = () => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='School' component={SchoolScreen} />
    </Stack.Navigator>
);

export default SchoolNavigator;