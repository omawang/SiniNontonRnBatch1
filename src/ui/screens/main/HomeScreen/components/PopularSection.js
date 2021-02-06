import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Space} from '../../../../components';
import {uiColor, uiDimen, uiStyle} from '../../../../constants';
import PopularItem from './PopularItem';

const PopularSection = () => {
  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={{...uiStyle.textSemiBold, fontSize: 16}}>Popular</Text>
        <Text style={{...uiStyle.textRegular, fontSize: 12}}>View all</Text>
      </View>
      <Space height={uiDimen.md} />

      <ScrollView horizontal style={{flexDirection: 'row'}}>
        <Space width={uiDimen.md} />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <PopularItem />
        <Space width={uiDimen.md} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: uiDimen.lg,
  },
});
export default PopularSection;
