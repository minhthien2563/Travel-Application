import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import BottomNavigator from './component/BottomNavigator';

const Main = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BottomNavigator></BottomNavigator>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({});
