import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import colors from '../../../assets/js/colors';

const FavouriteItem = ({item}) => {
  const limitWords = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return (
        words.slice(0, limit).join(' ') + (words.length > limit ? '...' : '')
      );
    } else {
      return text;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.centerRow}>
        <Image
          source={{
            uri: 'https://seeklogo.com/images/B/beach-tour-logo-4505456896-seeklogo.com.png',
          }}
          width={70}
          height={65}
          style={{margin: 15}}
        />
        <View style={{flex: 1}}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="star" size={15} color={'#FAB205'} style={styles.star} />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
          <Text>{limitWords(item.description, 8)}</Text>
        </View>
        <TouchableOpacity style={{flex: 0.2}}>
          <Icon name="heart" size={20} color={'#FD433E'}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FavouriteItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: colors.container,
    marginBottom: 20,
    padding: 10,
  },
  centerRow: {
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
    flex: 1,
  },
});
