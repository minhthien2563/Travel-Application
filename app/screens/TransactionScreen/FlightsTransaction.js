import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import FlightsItem from './FlightsItem';
import {flight_transaction} from '../../../assets/js/flight_transaction';
import colors from '../../../assets/js/colors';

const FlightsTransaction = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={flight_transaction}
        renderItem={({item}) => <FlightsItem item={item} />}
      />
    </View>
  );
};

export default FlightsTransaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.background,
  },
});
