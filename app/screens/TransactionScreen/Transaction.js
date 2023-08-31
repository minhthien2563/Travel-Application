import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {rowCenter} from '../../../assets/js/styles';
import colors from '../../../assets/js/colors';
import FlightsTransaction from './FlightsTransaction';
import HotelsTransaction from './HotelsTransaction';

const Transaction = () => {
  const [rightActive, setRightActive] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.topHeader}>My transaction</Text>
      <View style={[rowCenter, styles.containerButton]}>
        <TouchableOpacity
          onPress={() => setRightActive(false)}
          style={[
            styles.button,
            rightActive === false ? styles.activeButton : null,
          ]}>
          <Text
            style={
              rightActive === false ? styles.activeText : styles.unActiveText
            }>
            Flights
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setRightActive(true)}
          style={[
            styles.button,
            rightActive === true ? styles.activeButton : null,
          ]}>
          <Text
            style={
              rightActive === true ? styles.activeText : styles.unActiveText
            }>
            Hotels
          </Text>
        </TouchableOpacity>
      </View>
      {rightActive === false ? <FlightsTransaction /> : <HotelsTransaction />}
    </SafeAreaView>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

    backgroundColor: colors.background,
  },
  topHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,
  },
  containerButton: {
    backgroundColor: colors.primary,

    padding: 10,
    borderRadius: 40,
  },
  button: {
    flex: 1,
    padding: 20,
  },
  unActiveText: {
    color: 'white',
    textAlign: 'center',
  },
  activeButton: {
    borderRadius: 60,
    backgroundColor: 'white',
  },
  activeText: {
    color: 'black',
    textAlign: 'center',
  },
});
