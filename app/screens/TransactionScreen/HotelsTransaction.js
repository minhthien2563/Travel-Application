import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../../assets/js/colors';
import {hotel_transaction} from '../../../assets/js/hotel_transaction';
import HotelsItem from './HotelsItem';

const HotelsTransaction = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={hotel_transaction}
        renderItem={({item}) => <HotelsItem item={item} />}
      />
    </View>
  );
};

export default HotelsTransaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.background,
  },
});
