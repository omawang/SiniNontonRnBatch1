import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../ui/screens/main/HomeScreen';
import DummyScreen from '../ui/screens/main/DummyScreen';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dummy" component={DummyScreen} />
      <Tab.Screen name="Dummy2" component={DummyScreen} />
    </Tab.Navigator>
  );
}

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MyTabs} />
    </Stack.Navigator>
  );
};

export default MainStack;
