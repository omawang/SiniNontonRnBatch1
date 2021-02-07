import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

import {uiColor, uiDimen, uiStyle} from '../../../../constants';
import Header from './components/Header';
import {Space} from '../../../../components';

const MovieDetailScreen = () => {
  return (
    <SafeAreaView style={uiStyle.baseContainer}>
      <Header />
      <View
        style={{
          flex: 1,
          backgroundColor: uiColor.bg,
          marginTop: -176,
          borderTopLeftRadius: uiDimen.xl,
          borderTopRightRadius: uiDimen.xl,
        }}>
        <View style={{flexDirection: 'row', paddingHorizontal: uiDimen.lg}}>
          <Image
            style={{
              width: 134,
              height: 179,
              marginTop: -45,
              borderRadius: uiDimen.sm,
            }}
            source={require('../../../../../assets/dummy/popular.png')}
          />
          <View
            style={{
              flex: 1,
              paddingVertical: uiDimen.md,
              paddingLeft: uiDimen.md,
            }}>
            <Text
              style={{...uiStyle.textSemiBold, fontSize: 18}}
              numberOfLines={1}>
              Train to bussan
            </Text>
            <Space height={uiDimen.sm} />
            <View style={styles.metaRating}>
              <IconM name="star" color={uiColor.star} size={20} />
              <Space width={6} />
              <Text style={styles.metaRatingText}>7/10</Text>
            </View>
            <Space height={uiDimen.sm} />
            <Text
              style={{...uiStyle.textRegular, fontSize: 14}}
              numberOfLines={2}>
              Fantasy, Action, Drama, Comedy
            </Text>
          </View>
        </View>
        <Space height={uiDimen.lg} />

        <ScrollView>
          <View style={{paddingHorizontal: uiDimen.lg}}>
            <Text style={{...uiStyle.textSemiBold, fontSize: 16}}>
              Overview
            </Text>
            <Space height={uiDimen.sm} />

            <Text style={{...uiStyle.textRegular, fontSize: 14}}>
              After being bitten by a genetically altered spider, nerdy high
              school student Peter Parker is endowed with amazing powers to
              become the Amazing superhero known as Spider-Man.
            </Text>
          </View>
          <Space height={uiDimen.lg} />

          <View style={{paddingHorizontal: uiDimen.lg}}>
            <Text style={{...uiStyle.textSemiBold, fontSize: 16}}>Videos</Text>
          </View>
          <Space height={uiDimen.sm} />

          <ScrollView horizontal style={{flexDirection: 'row'}}>
            <Space width={uiDimen.md} />
            <View style={{marginHorizontal: uiDimen.sm}}>
              <View style={{width: 126, height: 82, backgroundColor: 'red'}} />
              <Space height={uiDimen.sm / 2} />
              <Text style={{...uiStyle.textRegular, fontSize: 14}}>
                Official Trailer
              </Text>
            </View>
            <View style={{marginHorizontal: uiDimen.sm}}>
              <View style={{width: 126, height: 82, backgroundColor: 'red'}} />
              <Space height={uiDimen.sm / 2} />
              <Text style={{...uiStyle.textRegular, fontSize: 14}}>
                Official Trailer
              </Text>
            </View>
            <View style={{marginHorizontal: uiDimen.sm}}>
              <View style={{width: 126, height: 82, backgroundColor: 'red'}} />
              <Space height={uiDimen.sm / 2} />
              <Text style={{...uiStyle.textRegular, fontSize: 14}}>
                Official Trailer
              </Text>
            </View>
            <Space width={uiDimen.md} />
          </ScrollView>
          <Space height={uiDimen.lg} />

          <View style={{paddingHorizontal: uiDimen.lg}}>
            <Text style={{...uiStyle.textSemiBold, fontSize: 16}}>Cast</Text>
            <Space height={uiDimen.sm} />

            <View style={{flexDirection: 'row', marginBottom: uiDimen.md}}>
              <Image
                source={require('../../../../../assets/dummy/actor.png')}
                style={{borderRadius: uiDimen.sm}}
              />
              <Space width={uiDimen.md} />

              <View style={{justifyContent: 'center'}}>
                <Text style={{...uiStyle.textSemiBold, fontSize: 14}}>
                  Brad Pitt
                </Text>
                <Text style={{...uiStyle.textRegular, fontSize: 16}}>
                  Narrator (Voice)
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginBottom: uiDimen.md}}>
              <Image
                source={require('../../../../../assets/dummy/actor.png')}
                style={{borderRadius: uiDimen.sm}}
              />
              <Space width={uiDimen.md} />
              <View style={{justifyContent: 'center'}}>
                <Text style={{...uiStyle.textSemiBold, fontSize: 14}}>
                  Brad Pitt
                </Text>
                <Text style={{...uiStyle.textRegular, fontSize: 16}}>
                  Narrator (Voice)
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  metaRating: {flexDirection: 'row', alignItems: 'center'},
  metaRatingText: {...uiStyle.textRegular, fontSize: 14},
});
export default MovieDetailScreen;
