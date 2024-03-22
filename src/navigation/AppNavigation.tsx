import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MainDrawer from './MainDrawer';
import Splash from '../screens/Splash';
import {navigationRef} from './navigationRef';

const AppNavigation = () => {
  const AppStack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen
          name="Splash"
          component={Splash}
          initialParams={{initialComponent: 'mainDrawer'}}
        />
        <AppStack.Screen name="mainDrawer" component={MainDrawer} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
