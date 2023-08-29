import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Foundation';
import routes from '../../routes';
import Home from '../HomeScreens/Home';
import Flights from '../HomeScreens/Flights/Flights';
import colors from '../../../assets/js/colors';

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
        tabBarInactiveTintColor: 'black',
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === routes.Home) {
            iconName = 'home';
          } else if (route.name === 'Flights') {
            iconName = 'heart';
          } else if (route.name === 'Test') {
            iconName = 'page-multiple';
          } else if (route.name === 'Test2') {
            iconName = 'torso';
          }

          return <Icon name={iconName} color={color} size={27}></Icon>;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={({route}) => ({
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Flights"
        component={Flights}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Test"
        component={Flights}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Test2"
        component={Flights}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
