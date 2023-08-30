import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Foundation';
import routes from '../../routes';
import Home from '../HomeScreens/Home';
import Flights from '../HomeScreens/Flights/Flights';
import colors from '../../../assets/js/colors';
import Favourite from '../FavouriteScreens/Favourite';
import Account from '../AccountScreens/Account';
import Transaction from '../TransactionScreen/Transaction';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.Home}
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingHorizontal: 10,
          borderTopStartRadius: 40,
          borderTopEndRadius: 40,
          height: 80,
        },
        tabBarItemStyle: {
          borderRadius: 10,
          marginTop: 15,
          marginBottom: 15,
          marginHorizontal: 20,
        },
        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor: colors.primary,
        tabBarInactiveTintColor: colors.grey,
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === routes.Home) {
            iconName = 'home';
          } else if (route.name === routes.Favourite) {
            iconName = 'heart';
          } else if (route.name === routes.Transaction) {
            iconName = 'page-multiple';
          } else if (route.name === routes.Account) {
            iconName = 'torso';
          }

          return <Icon name={iconName} color={color} size={27}></Icon>;
        },
      })}>
      <Tab.Screen
        name={routes.Home}
        component={Home}
        options={({route}) => ({
          headerShown: false,
        })}
      />
      <Tab.Screen
        name={routes.Favourite}
        component={Favourite}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={routes.Transaction}
        component={Transaction}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={routes.Account}
        component={Account}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
