import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeBottomTab from './HomeBottomTab';
import MovieDetailScreen from '../ui/screens/main/global/MovieDetailScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeBottomTab} />
      <Stack.Screen name="DetailMovie" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
