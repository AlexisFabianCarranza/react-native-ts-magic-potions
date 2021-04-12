import React, {useContext} from 'react';
import {Modal, ActivityIndicator, View} from 'react-native';
import {LoadingContext} from '../contexts/LoadingContext';
import Colors from '../constants/Colors';
import styles from '../style/LoadingStyle';

export default () => {
  const {isLoading} = useContext(LoadingContext);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isLoading}
      testID={'modal-activity-indicator'}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.textColor} />
      </View>
    </Modal>
  );
};
