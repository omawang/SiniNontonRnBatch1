import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../ui/screens/main/HomeScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
