import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Notification = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Notification</Text>
  </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
});
