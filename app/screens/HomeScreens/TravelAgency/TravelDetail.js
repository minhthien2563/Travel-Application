import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import colors from '../../../../assets/js/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {rowCenter} from '../../../../assets/js/styles';
import CarouselItem from '../../component/CarouselItem';
import {ENTRIES1} from '../../../../assets/js/entries';

const TravelDetail = ({route}) => {
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://seeklogo.com/images/B/beach-tour-logo-4505456896-seeklogo.com.png',
            }}
            width={100}
            height={95}
            style={{margin: 15}}
          />
          <Text style={styles.name}>{item.name}</Text>
          <View style={rowCenter}>
            <Icon
              name="star"
              size={20}
              color={'#FAB205'}
              style={{marginRight: 5}}
            />
            <Text style={[styles.textUnderName, {marginRight: 20}]}>
              {item.rating}
            </Text>

            <Icon
              name="heart"
              size={20}
              color={'#FD433E'}
              style={{marginRight: 5}}
            />
            <Text style={styles.textUnderName}>{item.likes}</Text>
          </View>
        </View>

        <View style={[rowCenter]}>
          <Text style={[styles.midder, {flex: 1}]}>Packages</Text>
          <TouchableOpacity>
            <Text>See All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          style={styles.carousel}
          data={ENTRIES1}
          renderItem={({item}) => <CarouselItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <View>
          <Text style={styles.midder}>About</Text>
          <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
            {item.description}
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.btn}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>Chat with us</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TravelDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 20,
    flex: 1,
  },
  header: {
    alignItems: 'center',
  },
  name: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textUnderName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  midder: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 15,
  },
  btn: {
    padding: 20,
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: 'center',
  },
});
