import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../../assets/js/colors';
import {flight} from '../../../../assets/js/flights';
import FlightItem from './FlightItem';
import Icon from 'react-native-vector-icons/Entypo';

const Flights = () => {
  const [seat, setSeat] = useState(0);
  const changeSeat = type => {
    if (type === 'plus') {
      setSeat(seat + 1);
    } else {
      if (seat > 0) setSeat(seat - 1);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
          }}>
          <View style={{flex: 1}}>
            <Text>From</Text>
            <Text style={styles.boldText}>Location A</Text>
            <Text>Airport A Location</Text>
          </View>

          <View>
            <Text>To</Text>
            <Text style={styles.boldText}>Location B</Text>
            <Text>Airport B Location</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <View style={{flex: 1}}>
            <Text>Date of departure</Text>
            <Text style={styles.boldText}>Mon, 10 Aug 2030</Text>
          </View>

          <View>
            <Text>Passenger</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.numberBtn}
                onPress={() => changeSeat('minus')}>
                <Icon name="minus" size={20} color={'black'} />
              </TouchableOpacity>

              <TextInput style={[styles.boldText, {textAlign: 'center'}]}>
                {seat}
              </TextInput>

              <TouchableOpacity
                style={styles.numberBtn}
                onPress={() => changeSeat('plus')}>
                <Icon name="plus" size={20} color={'black'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Text style={styles.searchBtnText}>Search Flight</Text>
        </TouchableOpacity>
      </View>
      {flight.map((item, index) => (
        <FlightItem item={item} key={index} />
      ))}
    </ScrollView>
  );
};

export default Flights;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 20,
    marginBottom: 20,

    backgroundColor: colors.background,
  },
  searchContainer: {
    backgroundColor: colors.container,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 20,
  },
  boldText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  searchBtn: {
    padding: 20,
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  numberBtn: {
    borderWidth: 0.8,
    borderRadius: 5,
    borderColor: colors.primary,
  },
});
