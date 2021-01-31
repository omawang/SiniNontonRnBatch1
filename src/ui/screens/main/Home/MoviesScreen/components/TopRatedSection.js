import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {uiDimen, uiStyle} from '../../../../../constants';
import {Space} from '../../../../../components';
import PopularItem from './PopularItem';
import TopRatedItem from './TopRatedItem';

const TopRatedSection = () => {
  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={styles.headingTitle}>Top Rated</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.headingLinkText}>View all</Text>
        </TouchableOpacity>
      </View>
      <Space height={uiDimen.md} />

      <ScrollView horizontal>
        <Space width={uiDimen.md} />
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
    marginHorizontal: uiDimen.lg,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingTitle: {...uiStyle.textSemiBold, fontSize: 16},
  headingLinkText: {...uiStyle.textRegular, fontSize: 12},
});

export default TopRatedSection;
