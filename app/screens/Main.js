import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import BottomNavigator from './component/BottomNavigator';
import colors from '../../assets/js/colors';

const Main = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <BottomNavigator></BottomNavigator>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({});
