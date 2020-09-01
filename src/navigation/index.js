import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './appNavigation'


const MainNavigator = props => {

  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
};

export default MainNavigator;
