import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {rowCenter} from '../../../assets/js/styles';
import colors from '../../../assets/js/colors';
import {flight} from '../../../assets/js/flights';
import TransactionItem from './TransactionItem';

const Transaction = () => {
  const [type, setType] = useState('Upcoming');
  return (
    <SafeAreaView style={styles.container}>
      <View style={[rowCenter, styles.containerButton]}>
        <TouchableOpacity
          style={[
            styles.button,
            type === 'Upcoming' ? styles.activeButton : null,
          ]}>
          <Text
            style={
              type === 'Upcoming' ? styles.activeText : styles.unActiveText
            }>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            type === 'Archive' ? styles.activeButton : null,
          ]}>
          <Text
            style={
              type === 'Archive' ? styles.activeText : styles.unActiveText
            }>
            Archive
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList Data={flight} renderItem={({item}) => <TransactionItem />} />
    </SafeAreaView>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  containerButton: {
    backgroundColor: colors.primary,

    padding: 10,
    borderRadius: 40,
  },
  button: {
    flex: 1,
    padding: 20,
  },
  unActiveText: {
    color: 'white',
    textAlign: 'center',
  },
  activeButton: {
    borderRadius: 60,
    backgroundColor: 'white',
  },
  activeText: {
    color: 'black',
    textAlign: 'center',
  },
});
