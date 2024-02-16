import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabMain from './src/stacks/TabMain';

const App = () => {
  return (
    <NavigationContainer>
      <TabMain />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
