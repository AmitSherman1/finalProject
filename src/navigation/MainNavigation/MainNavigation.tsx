import {createStackNavigator} from '@react-navigation/stack';
import { Colors } from 'common/Theme/Variables';
import MainTopBarGeneral from 'components/MainTopBarOptions/MainTopBarGeneral';
import { ScreenNames } from 'navigation/ScreenNames.types';
import React from 'react';
import Home from 'screens/Home/Home';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const screenParams = [
    {
      name: ScreenNames.Home,
      component: Home,
      options: {
        headerShown: true,
        headerTitle: () => <MainTopBarGeneral />,
        headerBackVisible: false,
        headerStyle: {backgroundColor: Colors.safeAreaView},
      },
      initialParams: {
        menu: true,
        avatar: false,
        logo: true,
        back: false,
        close: false,
        notifications: false,
        footerShown: true,
      },
    },
   
  ];

  const MainNavAttributes = {
    initialRouteName: ScreenNames.Home,
    screenOptions: {
      headerShown: false,
      headerLeft: () => null,
    },
  };

  return (
    <Stack.Navigator {...MainNavAttributes}>
      {screenParams.map(screen => {
        return <Stack.Screen key={screen.name} {...screen} />;
      })}
    </Stack.Navigator>
  );
};

export default MainNavigator;
