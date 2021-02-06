import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Space} from '../../../../components';
import {uiColor, uiDimen, uiStyle} from '../../../../constants';

const TopRatedItem = () => {
  return (
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: uiDimen.sm,
  },
  image: {
    borderRadius: uiDimen.sm,
    width: 134,
    height: 180,
    borderRadius: uiDimen.sm,
  },
  infoContainer: {
    bottom: 0,
    padding: uiDimen.sm,
    backgroundColor: uiColor.primary,
    opacity: 0.8,
    width: '100%',
    borderBottomLeftRadius: uiDimen.sm,
    borderBottomRightRadius: uiDimen.sm,
  },
  title: {...uiStyle.textSemiBold, fontSize: 12},
});
export default TopRatedItem;
