import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../ui/screens/main/HomeScreen';
import MovieDetailScreen from '../ui/screens/main/global/MovieDetailScreen';

const Tab = createBottomTabNavigator();

import {View, Text, TouchableOpacity} from 'react-native';
import {uiColor, uiDimen, uiStyle} from '../ui/constants';

const MyTabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const routeNames = ['Movies', 'Tv Shows', 'Favourites', 'Account']

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
            <Text
              style={{
                ...uiStyle.textSemiBold,
                fontSize: 12,
                color: isFocused ? uiColor.primary : 'white',
              }}>
              {routeNames[index]}
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
      <Tab.Screen name="Movies" component={HomeScreen} />
      <Tab.Screen name="TvShows" component={MovieDetailScreen} />
      <Tab.Screen name="Favourites" component={HomeScreen} />
      <Tab.Screen name="Account" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default HomeBottomTab;
