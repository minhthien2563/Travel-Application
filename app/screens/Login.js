import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import colors from '../../assets/js/colors';
import IconMail from 'react-native-vector-icons/Entypo';
import IconFacebook from 'react-native-vector-icons/MaterialIcons';
import IconGoogle from 'react-native-vector-icons/AntDesign';
import {rowCenter} from '../../assets/js/styles';
import {useNavigation} from '@react-navigation/native';
import routes from '../routes';

const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>TravelX</Text>

      <Text style={styles.header}>Sign in</Text>
      <View style={[styles.input, rowCenter]}>
        <IconMail name="mail" size={20} />
        <TextInput
          placeholder={'Enter e-mail address'}
          placeholderTextColor={'grey'}
        />
      </View>

      <View style={styles.subOption}>
        <Text style={{marginVertical: 20, color: 'black', fontWeight: '500'}}>
          Or continue with
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate(routes.Main)}
          style={[styles.loginExtra, {backgroundColor: colors.google}]}>
          <IconGoogle
            name="google"
            size={20}
            color={'white'}
            style={{paddingHorizontal: 10}}></IconGoogle>
          <Text style={styles.subOptionText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(routes.Main)}
          style={[styles.loginExtra, {backgroundColor: colors.facebook}]}>
          <IconFacebook
            name="facebook"
            size={20}
            color={'white'}
            style={{paddingHorizontal: 10}}></IconFacebook>
          <Text style={styles.subOptionText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,

    flex: 1,
  },
  logo: {
    color: colors.primary,

    fontSize: 40,
    fontWeight: 'bold',

    paddingBottom: 60,
  },
  header: {
    color: 'black',

    fontSize: 35,
    fontWeight: 'bold',

    paddingBottom: 30,
  },
  input: {
    paddingHorizontal: 20,

    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'grey',
  },
  subOption: {
    alignItems: 'center',
  },
  loginExtra: {
    marginBottom: 20,
    padding: 15,

    width: '100%',
    borderRadius: 25,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subOptionText: {
    color: 'white',
  },
});
