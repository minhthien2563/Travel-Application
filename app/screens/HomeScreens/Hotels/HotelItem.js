import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import StarRating from 'react-native-star-rating-widget';

const HotelItem = ({item}) => {
  const width = useWindowDimensions().width;
  const onChangeStart = () => {};
  return (
    <TouchableOpacity style={[styles.container, {width: width / 2.2}]}>
      <Image source={{uri: item.image}} height={250} style={styles.image} />
      <View style={styles.containerText}>
        <Text style={[styles.text, {fontWeight: 'bold'}]}>{item.name}</Text>
        <StarRating
          rating={item.rating}
          onChange={() => onChangeStart()}
          starSize={15}
          color={'#FAB205'}
        />
        <Text style={styles.text}>${item.price} USD/night</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HotelItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  image: {
    borderRadius: 20,
    width: 'auto',
  },
  containerText: {
    position: 'absolute',
    bottom: 1,
    padding: 20,
  },
  text: {
    color: 'white',
  },
});
