import {
  FlatList,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import slides from '../../assets/js/slides';
import Icon from 'react-native-vector-icons/Entypo';
import OnboardingItem from './component/OnboardingItem';
import {useNavigation} from '@react-navigation/native';
import colors from '../../assets/js/colors';
import routes from '../routes';

const OnBoarding = () => {
  const navigation = useNavigation();
  const slidesRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const moveNextItem = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate(routes.Login);
    }
  };

  const viewalbeItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({item}) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.id}
        onViewableItemsChanged={viewalbeItemsChanged}
        ref={slidesRef}
      />
      <TouchableOpacity style={styles.buttonNext} onPress={moveNextItem}>
        <Icon name={'chevron-right'} size={30} style={{color: 'white'}} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonNext: {
    marginBottom: 20,
    padding: 20,

    backgroundColor: colors.primary,
    borderRadius: 60,
  },
});
