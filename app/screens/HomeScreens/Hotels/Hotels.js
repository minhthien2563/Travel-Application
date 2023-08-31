import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import colors from '../../../../assets/js/colors';
import Icon from 'react-native-vector-icons/Entypo';
import {hotel} from '../../../../assets/js/hotels';
import HotelItem from './HotelItem';

const Hotels = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.mainHeader}>Entire Popular</Text>
          <TouchableOpacity style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>View all</Text>
            <Icon name="chevron-right" size={15} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        style={{
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: colors.background,
        }}
        data={hotel}
        numColumns={2}
        renderItem={({item}) => <HotelItem item={item} />}
      />
    </View>
  );
};

export default Hotels;

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: colors.background,
  },
  headerText: {
    flexDirection: 'row',
  },
  mainHeader: {
    flex: 1,

    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  headerBtn: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBtnText: {
    fontWeight: 'bold',
    color: colors.primary,
  },
});
