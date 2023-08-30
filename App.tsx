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
import Favourite from './app/screens/FavouriteScreens/Favourite';
import Account from './app/screens/AccountScreens/Account';
import TravelDetail from './app/screens/HomeScreens/TravelAgency/TravelDetail';
import colors from './assets/js/colors';
import Transaction from './app/screens/TransactionScreen/Transaction';

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

        <Stack.Screen
          name={routes.Favourite}
          component={Favourite}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={routes.Account}
          component={Account}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={routes.TravelDetail}
          component={TravelDetail}
          options={{
            headerShadowVisible: false,
            title: 'Agency Profile',
            headerStyle: {
              backgroundColor: colors.background,
            },
          }}
        />
        <Stack.Screen name={routes.Transaction} component={Transaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
