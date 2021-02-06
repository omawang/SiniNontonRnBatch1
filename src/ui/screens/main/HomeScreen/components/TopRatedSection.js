import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Space} from '../../../../components';
import {uiColor, uiDimen, uiStyle} from '../../../../constants';
import PopularItem from './PopularItem';
import TopRatedItem from './TopRatedItem';

const TopRatedSection = () => {
  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={{...uiStyle.textSemiBold, fontSize: 16}}>Top Rated</Text>
        <Text style={{...uiStyle.textRegular, fontSize: 12}}>View all</Text>
      </View>
      <Space height={uiDimen.md} />

      <ScrollView horizontal style={{flexDirection: 'row'}}>
        <Space width={uiDimen.md} />
        <TopRatedItem />
        <TopRatedItem />
        <TopRatedItem />
        <TopRatedItem />
        <TopRatedItem />
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
export default TopRatedSection;
