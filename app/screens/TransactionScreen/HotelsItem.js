import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../../assets/js/colors';

const HotelsItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: 'black'}}>Reservation Code </Text>
        <Text style={styles.NF}>{item.reservationId}</Text>
      </View>

      <Text style={{fontWeight: 'bold', color: 'black'}}>
        {item.accommodationName}
      </Text>
      <Text style={{color: 'black'}}>{item.location}</Text>

      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <View style={{flex: 1}}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            Check in time
          </Text>
          <Text style={{color: 'black'}}>
            {item.checkInTime} - {item.checkInDate}
          </Text>
        </View>

        <View>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            Check out time
          </Text>
          <Text style={{color: 'black'}}>
            {item.checkOutTime} - {item.checkOutDate}
          </Text>
        </View>
      </View>

      <Text style={{color: 'black'}}>Total price: ${item.price} USD</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={{color: 'white'}}>See details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HotelsItem;

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
