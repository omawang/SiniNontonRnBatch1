import React from 'react';
import {Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

import {uiColor, uiDimen, uiStyle} from '../../../../../constants';

const Header = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 360,
        backgroundColor: 'red',
        position: 'relative',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          padding: uiDimen.md,
          flexDirection: 'row',
          // backgroundColor: 'yellow',
          justifyContent: 'space-between',
          zIndex: 100,
        }}>
        <View
          style={{
            backgroundColor: uiColor.bg,
            width: 40,
            height: 40,
            borderRadius: 20,
            padding: uiDimen.sm,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="arrow-back" size={24} color="white" />
        </View>
        <View
          style={{
            backgroundColor: uiColor.bg,
            width: 40,
            height: 40,
            borderRadius: 20,
            padding: uiDimen.sm,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <IconMC name="heart-outline" size={24} color="white" />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: uiColor.accent1,
          opacity: 0.8,
          zIndex: 50,
        }}
      />
      <Image
        source={require('../../../../../../assets/dummy/popular.png')}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: uiColor.accent1,
          opacity: 0.8,
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default Header;
