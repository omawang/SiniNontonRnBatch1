import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {TMD_IMG_URL} from '@env';
import {withNavigation} from '@react-navigation/compat';

import {Space} from '../../../../../components';
import {uiColor, uiDimen, uiStyle} from '../../../../../constants';

const PopularItem = ({navigation, data}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('MovieDetail');
      }}
      style={styles.imageContainer}>
      <Image
        source={{uri: `${TMD_IMG_URL}${data.poster_path}`}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.metaContainer}>
        <Text numberOfLines={1} style={styles.metaTitle}>
          {data.original_title}
        </Text>
        <Space height={uiDimen.sm / 2} />
        <View style={styles.metaRating}>
          <IconM name="star" color={uiColor.star} size={14} />
          <Text style={styles.metaRatingText}>{data.vote_average}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 236,
    height: 338,
    borderRadius: uiDimen.md,
    marginHorizontal: uiDimen.sm,
  },
  image: {width: 236, height: 338, borderRadius: uiDimen.md},
  metaContainer: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: uiDimen.md,
    backgroundColor: uiColor.accent1,
    opacity: 0.8,
    borderBottomLeftRadius: uiDimen.md,
    borderBottomRightRadius: uiDimen.md,
    justifyContent: 'center',
  },
  metaTitle: {...uiStyle.textSemiBold, fontSize: 12},
  metaRating: {flexDirection: 'row', alignItems: 'center'},
  metaRatingText: {...uiStyle.textSemiBold, fontSize: 12},
});

PopularItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withNavigation(PopularItem);
