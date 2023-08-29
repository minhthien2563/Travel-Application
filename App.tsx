/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import routes from './app/routes';
import OnBoarding from './app/screens/Onboarding.js';
import Login from './app/screens/Login';
import Home from './app/screens/HomeScreens/Home';
import Main from './app/screens/Main';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.Main}>
        <Stack.Screen
          name={routes.Onboarding}
          component={OnBoarding}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={routes.Login}
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={routes.Main}
          component={Main}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={routes.Home}
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
