import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../../assets/js/colors';

const FlightsItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: 'black'}}>Flight Number </Text>
        <Text style={styles.NF}>{item.flightNumber}</Text>
      </View>

      <View style={{marginVertical: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1, color: 'black', fontWeight: 'bold'}}>
            From
          </Text>
          <Text style={{flex: 0.5, color: 'black', fontWeight: 'bold'}}>
            To
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 0.5, color: 'black'}}>{item.from}</Text>
          <Icon
            style={{flex: 0.5, color: 'black'}}
            name={'arrowright'}
            size={20}
          />
          <Text style={{flex: 0.5, color: 'black'}}>{item.to}</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.date, {flex: 1}]}>
            {new Date(item.departureTime).toLocaleDateString()}
          </Text>
          <Text style={[styles.date, {flex: 0.5}]}>
            {new Date(item.arrivalTime).toLocaleDateString()}
          </Text>
        </View>
      </View>

      <Text style={{color: 'black'}}>Seat number: {item.seatNumber}</Text>
      <Text style={{color: 'black'}}>Total price: ${item.totalPrice} USD</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={{color: 'white'}}>See details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlightsItem;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: colors.container,
  },
  button: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: 'center',
  },
  NF: {
    padding: 3,
    backgroundColor: colors.primary,
    borderRadius: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  date: {
    fontWeight: 'bold',
    color: 'black',
  },
});
