import React from 'react';
import {View, StyleSheet, Platform, Vibration} from 'react-native';
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

const TabMain: React.FC = () => {
  const handleTabPress = () => {
    Vibration.vibrate(50);
  };

  const renderTabIcon = ({route, focused}: {route: any; focused: boolean}) => {
    let iconComponent;
    const iconSize = 20;

    switch (route.name) {
      case 'HomeStack':
        iconComponent = (
          <HomeIcon
            width={iconSize}
            height={iconSize}
            fill={focused ? '#FFFFFF' : '#000000'}
          />
        );
        break;
      case 'Cart':
        iconComponent = (
          <CartIcon
            width={iconSize}
            height={iconSize}
            fill={focused ? '#FFFFFF' : '#000000'}
          />
        );
        break;
      case 'Notification':
        iconComponent = (
          <NotificationIcon
            width={iconSize}
            height={iconSize}
            fill={focused ? '#FFFFFF' : '#000000'}
          />
        );
        break;
      case 'Profile':
        iconComponent = (
          <ProfileIcon
            width={iconSize}
            height={iconSize}
            fill={focused ? '#FFFFFF' : '#000000'}
          />
        );
        break;
      default:
        break;
    }

    return (
      <View style={[styles.tabIconWrapper, focused && styles.activeIcon]}>
        {iconComponent}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({route}: {route: any}) => ({
          tabBarIcon: ({focused}: {focused: boolean}) =>
            renderTabIcon({route, focused}),
        })}
        tabBarOptions={{
          tabStyle: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            ...Platform.select({
              android: {
                elevation: 8,
              },
              ios: {
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
              },
            }),
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
          options={{tabBarLabel: 'Home'}}
          listeners={{tabPress: handleTabPress}}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{tabBarLabel: 'Cart'}}
          listeners={{tabPress: handleTabPress}}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{tabBarLabel: 'Notification'}}
          listeners={{tabPress: handleTabPress}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{tabBarLabel: 'Profile'}}
          listeners={{tabPress: handleTabPress}}
        />
      </Tab.Navigator>
    </View>
  );
};

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

export default TabMain;
