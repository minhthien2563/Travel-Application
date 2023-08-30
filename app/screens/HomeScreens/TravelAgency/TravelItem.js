import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../../../assets/js/colors';

const TravelItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.centerRow}>
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

      <View style={styles.centerRow}>
        <View style={[styles.centerRow, {flex: 1, padding: 20}]}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
            }}
            width={35}
            height={35}
            style={styles.imageLiked}
          />
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
            }}
            width={35}
            height={35}
            style={styles.imageLiked}
          />
          <Text style={styles.numberLikes}>+{item.likes}</Text>
          <Text style={{fontWeight: '500'}}>Liked This</Text>
        </View>

        <TouchableOpacity>
          <Icon
            name={'hearto'}
            size={20}
            color={'#FD433E'}
            style={{padding: 20}}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.detailBtn}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TravelItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: colors.container,
    marginBottom: 20,
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
  },
  imageLiked: {
    borderRadius: 60,
    margin: 5,
  },
  numberLikes: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,

    backgroundColor: '#DAECFE',
    color: colors.google,
    fontWeight: 'bold',
  },
  detailBtn: {
    backgroundColor: colors.primary,

    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
});
