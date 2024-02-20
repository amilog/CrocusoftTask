import {StyleSheet, Text, Vibration, View} from 'react-native';
import React from 'react';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';
import Notification from '../screens/Notification';
import HomeIcon from '../assets/svgs/HomeIcon';
import CartIcon from '../assets/svgs/CartIcon';
import NotificationIcon from '../assets/svgs/NotificationIcon';
import ProfileIcon from '../assets/svgs/ProfileIcon';
import HomeStack from './HomeStack';

const Tab = AnimatedTabBarNavigator();

const TabMain = () => {
  const handleTabPress = () => {
    Vibration.vibrate(50);
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}: any) => {
            let iconComponent;
            let iconSize = 20;

            if (route.name === 'HomeStack') {
              iconComponent = (
                <HomeIcon
                  width={iconSize}
                  height={iconSize}
                  fill={focused ? '#FFFFFF' : '#000000'}
                />
              );
            } else if (route.name === 'Cart') {
              iconComponent = (
                <CartIcon
                  width={iconSize}
                  height={iconSize}
                  fill={focused ? '#FFFFFF' : '#000000'}
                />
              );
            } else if (route.name === 'Notification') {
              iconComponent = (
                <NotificationIcon
                  width={iconSize}
                  height={iconSize}
                  fill={focused ? '#FFFFFF' : '#000000'}
                />
              );
            } else if (route.name === 'Profile') {
              iconComponent = (
                <ProfileIcon
                  width={iconSize}
                  height={iconSize}
                  fill={focused ? '#FFFFFF' : '#000000'}
                />
              );
            }
            return (
              <View
                style={[styles.tabIconWrapper, focused && styles.activeIcon]}>
                {iconComponent}
              </View>
            );
          },
        })}
        tabBarOptions={{
          tabStyle: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}
        appearance={{
          tabBarBackground: '#fff',
          activeTabBackgrounds: '#EEEEEE',
          topPadding: 15,
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          listeners={{tabPress: () => handleTabPress()}}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          listeners={{tabPress: () => handleTabPress()}}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          listeners={{tabPress: () => handleTabPress()}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          listeners={{tabPress: () => handleTabPress()}}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabIconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIcon: {
    position: 'absolute',
    left: -45,
    top: -20,
    backgroundColor: 'black',
    borderRadius: 20,
    width: 40,
    height: 40,
  },
});
