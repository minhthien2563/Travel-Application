import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';
import News from './News';
import Popular from './Popular';
import colors from '../../../../assets/js/colors';

const Explore = () => {
  return (
    <ScrollView style={styles.container}>
      <Popular />
      <News />
    </ScrollView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
