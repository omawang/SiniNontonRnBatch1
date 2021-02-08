import React from 'react';
import {Image, Text, View} from 'react-native';
import {TMDB_IMG_CAST_URL} from '@env';

import {Space} from '../../../../../components';

import {uiDimen, uiStyle} from '../../../../../constants';

const CastSection = ({data}) => {
  return (
    <View style={{paddingHorizontal: uiDimen.lg}}>
      <Text style={{...uiStyle.textSemiBold, fontSize: 16}}>Cast</Text>
      <Space height={uiDimen.sm} />

      {data?.map((item, index) => {
        return (
          <View
            key={index}
            style={{flexDirection: 'row', marginBottom: uiDimen.md}}>
            <Image
              source={{uri: `${TMDB_IMG_CAST_URL}${item.profile_path}`}}
              style={{borderRadius: uiDimen.sm, width: 62, height: 62}}
            />
            <Space width={uiDimen.md} />

            <View style={{justifyContent: 'center'}}>
              <Text style={{...uiStyle.textSemiBold, fontSize: 14}}>
                {item?.name}
              </Text>
              <Text style={{...uiStyle.textRegular, fontSize: 16}}>
                {item?.character}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default CastSection;
