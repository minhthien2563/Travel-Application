import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CarouselItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  image: {
    borderRadius: 40,
    width: 200,
    height: 270,
  },
  title: {
    position: 'absolute',
    bottom: 0,

    padding: 20,

    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
