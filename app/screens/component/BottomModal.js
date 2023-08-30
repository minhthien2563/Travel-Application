import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import React from 'react';

const BottomModal = ({visible}) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.bottomView}>
        <View style={styles.modalView}>
          <Text>Abc</Text>
        </View>
      </View>
    </Modal>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  bottomView: {
    backgroundColor: '#00000070',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    padding: 50,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  timePick: {
    margin: 20,
    padding: 10,
  },
  header: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
  },
  title: {
    fontSize: 15,
  },
});
