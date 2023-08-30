import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import React from 'react';
import {Travel} from '../../../assets/js/travelagency';
import FavouriteItem from './FavouriteItem';
import Icon from 'react-native-vector-icons/Entypo';
import IconLookup from 'react-native-vector-icons/FontAwesome';

import colors from '../../../assets/js/colors';
import {rowCenter} from '../../../assets/js/styles';

const Favourite = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'black',
          fontSize: 20,
          paddingVertical: 20,
        }}>
        Favourite
      </Text>
      <View style={[styles.search, rowCenter]}>
        <View style={[styles.searchInput, rowCenter]}>
          <TextInput
            placeholder="Search"
            style={styles.searchInputText}></TextInput>
          <IconLookup name="search" size={20} color={'black'}></IconLookup>
        </View>
      </View>
      <FlatList
        style={{flex: 1}}
        data={Travel}
        renderItem={({item}) => <FavouriteItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,

    backgroundColor: colors.background,
  },
  search: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: colors.primary_light,

    flex: 1,

    borderRadius: 20,
  },
  searchInputText: {
    paddingHorizontal: 20,
    flex: 0.9,
  },
});
