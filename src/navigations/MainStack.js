import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MovieDetailScreen from '../ui/screens/main/global/MovieDetailScreen'
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={BottomTab} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
