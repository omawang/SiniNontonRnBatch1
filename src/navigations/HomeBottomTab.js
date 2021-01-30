import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/MaterialIcons';

import {uiColor, uiDimen, uiStyle} from '../ui/constants';
import {Space} from '../ui/components';

import MoviesScreen from '../ui/screens/main/Home/MoviesScreen';
import TvShowsScreen from '../ui/screens/main/Home/TvShowsScreen';
import FavouritesScreen from '../ui/screens/main/Home/FavouritesScreen';
import AccountScreen from '../ui/screens/main/Home/AccountScreen';

const Tab = createBottomTabNavigator();

const MyTabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const routeNames = [
    {
      title: 'Movies',
      icon: <IconMC name="filmstrip" color="white" size={24} />,
    },
    {
      title: 'Tv Shows',
      icon: <IconM name="tv" color="white" size={24} />,
    },
    {
      title: 'Favourites',
      icon: <IconMC name="filmstrip" color="white" size={24} />,
    },
    {
      title: 'Account',
      icon: <IconMC name="filmstrip" color="white" size={24} />,
    },
  ];

  return (
    <View
      style={{
        backgroundColor: uiColor.bgBottomTab,
        flexDirection: 'row',
        paddingVertical: uiDimen.md,
        alignItems: 'center',
        // justifyContent: 'space-around',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            {routeNames[index].icon}
            <Space height={uiDimen.sm} />
            <Text
              style={{
                ...uiStyle.textSemiBold,
                fontSize: 12,
                color: isFocused ? uiColor.primary : 'white',
              }}>
              {routeNames[index].title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const HomeBottomTab = () => {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="TvShows" component={TvShowsScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default HomeBottomTab;
