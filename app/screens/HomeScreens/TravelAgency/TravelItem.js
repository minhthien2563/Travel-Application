import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../../../assets/js/colors';

const TravelItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg',
          }}
          width={100}
          height={100}
        />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={15} color={'#FAB205'} style={styles.star} />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TravelItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: colors.container,
    marginBottom: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  star: {
    backgroundColor: '#FED89B',
    borderRadius: 5,
    padding: 1,
    marginRight: 10,
  },
  ratingText: {
    fontWeight: 'bold',
  },
});
