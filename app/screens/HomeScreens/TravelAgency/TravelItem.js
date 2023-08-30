import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../../../assets/js/colors';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../routes';

const TravelItem = ({item}) => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);
  const [iconHeart, setIconHeart] = useState('hearto');

  useEffect(() => {
    if (liked) setIconHeart('heart');
    else setIconHeart('hearto');
  });

  const handleLike = () => {
    if (liked) setLiked(false);
    else setLiked(true);
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
          <Text style={styles.numberLikes}>+{item.likes - 2}</Text>
          <Text style={{fontWeight: '500'}}>Liked This</Text>
        </View>

        <TouchableOpacity onPress={handleLike}>
          <Icon
            name={iconHeart}
            size={20}
            color={'#FD433E'}
            style={{padding: 20}}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.detailBtn}
        onPress={() => navigation.navigate(routes.TravelDetail, {item})}>
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
