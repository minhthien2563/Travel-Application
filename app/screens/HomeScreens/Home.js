import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useRef} from 'react';
import IconLocation from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../../../assets/js/colors';
import Explore from './Explore/Explore';
import routes from '../../routes';
import Flights from './Flights/Flights';
import Hotels from './Hotels/Hotels';
import TravelAgency from './TravelAgency/TravelAgency';
import {rowCenter} from '../../../assets/js/styles';

const Home = () => {
  const [currentScreen, setCurrentScreen] = useState(routes.Explore);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FBFEFF'}}>
      <View style={styles.container}>
        <View style={styles.location}>
          <Text style={{color: 'black'}}>Ho Chi Minh City, Vietnam</Text>
          <IconLocation name="location-pin" size={20} color={'black'} />
        </View>

        <View style={[styles.search, rowCenter]}>
          <View style={styles.searchInput}>
            <TextInput
              placeholder="Search"
              style={styles.searchInputText}></TextInput>
            <Icon name="search" size={20} color={'black'}></Icon>
          </View>
        </View>

        <FlatList
          data={[
            {key: 'Explore'},
            {key: 'Flights'},
            {key: 'Hotels'},
            {key: 'Travel Agency'},
          ]}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => setCurrentScreen(item.key)}>
              <Text
                style={[
                  styles.topNavigatorText,
                  currentScreen === item.key
                    ? styles.activeScreen
                    : styles.unActiveScreen,
                ]}>
                {item.key}
              </Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
        />
      </View>

      {currentScreen === routes.Explore ? (
        <Explore />
      ) : currentScreen === routes.Flights ? (
        <Flights />
      ) : currentScreen === routes.Hotels ? (
        <Hotels />
      ) : (
        <TravelAgency />
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,

    backgroundColor: colors.background,
  },
  location: {
    flexDirection: 'row',

    marginTop: 20,
    marginBottom: 40,
  },
  search: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: colors.primary_light,

    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',

    borderRadius: 20,
  },
  searchInputText: {
    paddingHorizontal: 20,
    flex: 0.9,
  },
  topNavigatorText: {
    paddingHorizontal: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  activeScreen: {
    color: colors.primary,
  },
  unActiveScreen: {
    color: colors.grey,
  },
  bottomNavigator: {
    position: 'absolute',
  },
});
