import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../assets/js/colors';

const Account = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Text style={[styles.header, {marginVertical: 40}]}>My Profile</Text>

      <View style={styles.centerRow}>
        <TouchableOpacity style={styles.sideBtn}>
          <Icon name="photo-camera" size={25} color={colors.grey} />
        </TouchableOpacity>

        <View style={styles.borderAvatar}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg',
            }}
            width={150}
            height={150}
            style={styles.avatar}></Image>
        </View>

        <TouchableOpacity style={styles.sideBtn}>
          <Icon name="logout" size={25} color={colors.grey} />
        </TouchableOpacity>
      </View>

      <Text style={[styles.header, {textAlign: 'center', marginVertical: 20}]}>
        My name
      </Text>

      <TouchableOpacity style={styles.subItem}>
        <Icon
          name={'edit-square'}
          size={20}
          color={colors.primary}
          style={{marginRight: 10}}></Icon>
        <Text style={{fontWeight: 'bold', color: colors.primary}}>
          My Account
        </Text>
      </TouchableOpacity>

      <View style={styles.subItem}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Icon
            name={'notifications-active'}
            size={20}
            color={colors.primary}
            style={{marginRight: 10}}></Icon>
          <Text style={{fontWeight: 'bold', color: colors.primary}}>
            Nofications
          </Text>
        </View>

        <Switch
          trackColor={{false: colors.grey, true: colors.primary}}
          thumbColor={'white'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <TouchableOpacity style={styles.subItem}>
        <Icon
          name={'help'}
          size={20}
          color={colors.primary}
          style={{marginRight: 10}}></Icon>
        <Text style={{fontWeight: 'bold', color: colors.primary}}>
          Help Center
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,

    padding: 20,
    flex: 1,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },
  avatar: {
    borderRadius: 200,
  },
  borderAvatar: {
    borderWidth: 5,
    borderColor: colors.primary,
    borderRadius: 200,
    padding: 5,
  },
  centerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideBtn: {
    borderRadius: 60,
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 5,
    marginHorizontal: 40,
  },
  subItem: {
    flexDirection: 'row',

    backgroundColor: colors.container,
    padding: 30,
    marginBottom: 20,

    borderRadius: 20,
  },
});
