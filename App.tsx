import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TabMain from './src/stacks/TabMain';
import SignUp from './src/screens/SignUp';
import MainStack from './src/stacks/MainStack';

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        {/* <TabMain /> */}
        <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
