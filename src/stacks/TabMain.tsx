import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';
import Notification from '../screens/Notification';

const Tab = AnimatedTabBarNavigator();

const TabMain = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: '#000000',
        }}
        appearance={{
          tabBarBackground: '#fff',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </View>
  );
};

export default TabMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
