import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Space} from '../../../../components';
import {uiColor, uiDimen, uiStyle} from '../../../../constants';

const PopularItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../../assets/dummy/popular.png')}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Abigail</Text>
        <Space height={uiDimen.sm / 2} />
        <View style={{flexDirection: 'row'}}>
          <Icon name="star" size={14} color={uiColor.star} />
          <Space width={6} />
          <Text style={{...uiStyle.textSemiBold, fontSize: 12}}>7/10</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 236,
    height: 338,
    backgroundColor: 'red',
    marginHorizontal: uiDimen.sm,
    position: 'relative',
    borderRadius: uiDimen.sm,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: uiDimen.sm,
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    padding: uiDimen.md,
    backgroundColor: uiColor.primary,
    opacity: 0.8,
    width: '100%',
    borderBottomLeftRadius: uiDimen.sm,
    borderBottomRightRadius: uiDimen.sm,
  },
  title: {...uiStyle.textSemiBold, fontSize: 12},
});
export default PopularItem;
