import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const OnboardingItem = ({item}) => {
  const width = useWindowDimensions().width;
  return (
    <View style={[styles.container, {width}]}>
      <Image
        style={[styles.image, {resizeMode: 'contain', width}]}
        source={item.image}></Image>
      <View style={styles.content}>
        <Text style={styles.topContent}>{item.title}</Text>
        <Text style={styles.bottomContent}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  content: {
    flex: 0.3,

    alignItems: 'center',
  },
  topContent: {
    color: 'black',

    fontWeight: 'bold',
    fontSize: 25,
    padding: 20,
  },
  bottomContent: {
    color: 'grey',
    padding: 20,
  },
});
