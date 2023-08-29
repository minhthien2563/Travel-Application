import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../../assets/js/colors';
import {limitWords} from '../../../assets/js/function';

const NewsItem = ({item}) => {
  const limitWords = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return (
        words.slice(0, limit).join(' ') + (words.length > limit ? ' ...' : '')
      );
    } else {
      return text;
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.image}
      />
      <View style={{flex: 1}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{limitWords(item.subtitle, 15)}</Text>
      </View>
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
  },
  image: {
    borderRadius: 20,
    width: 110,
    height: 110,
  },
  title: {
    paddingHorizontal: 10,

    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    paddingHorizontal: 10,

    color: 'grey',
    fontSize: 15,
  },
});
