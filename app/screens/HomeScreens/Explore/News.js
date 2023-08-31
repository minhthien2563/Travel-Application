import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {ENTRIES2} from '../../../../assets/js/entries';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import NewsItem from './NewsItem';
import colors from '../../../../assets/js/colors';

const News = () => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.mainHeader}>Lastest News</Text>
          <TouchableOpacity style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>View all</Text>
            <Icon name="chevron-right" size={15} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      {ENTRIES2.map((item, index) => (
        <NewsItem item={item} key={index} />
      ))}

      {/* <FlatList
        style={styles.carousel}
        data={ENTRIES2}
        renderItem={({item}) => }
        initialNumToRender={5}
        showsVerticalScrollIndicator={false}
      /> */}
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  header: {
    // position: 'absolute',
    padding: 20,
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
  carousel: {
    paddingLeft: 20,
  },
});
