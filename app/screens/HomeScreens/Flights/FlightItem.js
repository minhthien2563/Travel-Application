import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../../../../assets/js/colors';
import Icon from 'react-native-vector-icons/Entypo';

const FlightItem = ({item}) => {
  const classToStyleMap = {
    Economy: styles.economyStyle,
    Business: styles.businessStyle,
    First: styles.firstStyle,
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.boldText, styles.header]}>{item.airport}</Text>
      <View style={{flexDirection: 'row', paddingBottom: 15}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View>
            <Text style={styles.boldText}>{item.from}</Text>
            <Text style={styles.boldText}>{item.timeStart}</Text>
          </View>
          <Icon name={'dot-single'} size={30} />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Icon name={'dot-single'} size={30} color={colors.primary} />
          <View>
            <Text style={styles.boldText}>{item.to}</Text>
            <Text style={styles.boldText}>{item.timeEnd}</Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.boldText, {flex: 1, color: 'black'}]}>
          ${item.price} USD
        </Text>
        <Text style={styles.seatAvaible}>{item.seatAvaible} Remains</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.class}>
          <Text style={[styles.classText, classToStyleMap[item.class]]}>
            {item.class} Class
          </Text>
        </View>
        <TouchableOpacity style={styles.bookBtn}>
          <Text style={[styles.boldText, {color: 'white'}]}>Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlightItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginVertical: 10,
    padding: 20,

    backgroundColor: colors.container,
  },
  boldText: {
    fontWeight: 'bold',
  },
  header: {
    fontSize: 20,
    color: 'black',
    paddingVertical: 15,
  },
  seatAvaible: {
    color: '#F97251',
    fontWeight: 'bold',
  },
  class: {
    flex: 1,
  },
  classText: {
    fontWeight: 'bold',
    padding: 3,
    borderRadius: 30,
    width: 120,
    textAlign: 'center',
  },
  economyStyle: {
    backgroundColor: '#DBECFF',
    color: '#409aff',
  },
  businessStyle: {
    backgroundColor: '#CCFCCF',
    color: '#30c93a',
  },
  firstStyle: {
    backgroundColor: '#FDE6CC',
    color: '#ffa947',
  },
  bookBtn: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: colors.primary,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
});
