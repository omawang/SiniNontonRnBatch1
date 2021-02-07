import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import {TMDB_IMG_URL} from '@env';
import {Space} from '../../../../../components';
import {uiColor, uiDimen, uiStyle} from '../../../../../constants';

const TopRatedItem = ({data}) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.imageContainer}>
      <Image
        source={{uri: `${TMDB_IMG_URL}${data.poster_path}`}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.metaContainer}>
        <Text numberOfLines={1} style={styles.metaTitle}>
          {data.title}
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
    borderRadius: uiDimen.md,
    marginHorizontal: uiDimen.sm,
  },
  image: {width: 134, height: 180, borderRadius: uiDimen.md},
  metaContainer: {
    width: 134,
    flexDirection: 'column',
    padding: uiDimen.sm,
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
TopRatedItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TopRatedItem;
