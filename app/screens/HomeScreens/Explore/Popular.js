import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {ENTRIES1} from '../../../../assets/js/entries';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import colors from '../../../../assets/js/colors';
import CarouselItem from '../../component/CarouselItem';

const Popular = () => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.mainHeader}>Popular Destionation</Text>
          <TouchableOpacity style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>View all</Text>
            <Icon name="chevron-right" size={15} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={styles.carousel}
        data={ENTRIES1}
        renderItem={({item}) => <CarouselItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  header: {
    padding: 20,
  },
  headerText: {
    flexDirection: 'row',
  },
  mainHeader: {
    flex: 0.85,

    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  headerBtn: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBtnText: {
    fontWeight: 'bold',
    color: colors.primary,
  },
  carousel: {
    paddingLeft: 20,
  },
});
