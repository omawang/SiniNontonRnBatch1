import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';
import MainStack from './MainStack';


const AppContainer = () => {
  const isSignedIn = true;

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <MainStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default AppContainer;
