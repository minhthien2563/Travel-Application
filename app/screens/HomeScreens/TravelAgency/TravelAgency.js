import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {Travel} from '../../../../assets/js/travelagency';
import TravelItem from './TravelItem';
import colors from '../../../../assets/js/colors';

const TravelAgency = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Travel}
        renderItem={({item}) => <TravelItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TravelAgency;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 20,
    flex: 1,
  },
});
