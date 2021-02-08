import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {GOOGLE_YOUTUBE_API_KEY, TMDB_IMG_URL, TMDB_API_KEY} from '@env';
import {YouTubeStandaloneAndroid} from 'react-native-youtube';

import {uiColor, uiDimen, uiStyle} from '../../../../constants';
import Header from './components/Header';
import VideosSection from './components/VideosSection';
import CastSection from './components/CastSection';
import {Space} from '../../../../components';

import api from '../../../../../helpers';

const {width} = Dimensions.get('window')
const MovieDetailScreen = ({route}) => {
  const id = route.params.id;
  const [detail, setDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    api
      .get(`/movie/${id}?api_key=${TMDB_API_KEY}`)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    api
      .get(`/movie/${id}/videos?api_key=${TMDB_API_KEY}`)
      .then((res) => {
        setVideos(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });

    api
      .get(`/movie/${id}/credits?api_key=${TMDB_API_KEY}`)
      .then((res) => {
        setCredits(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const playVideo = (videoId) => {
    YouTubeStandaloneAndroid.playVideo({
      apiKey: GOOGLE_YOUTUBE_API_KEY, // Your YouTube Developer API Key
      videoId: videoId, // YouTube video ID
      autoplay: true, // Autoplay the video
      startTime: 0, // Starting point of video (in seconds)
    })
      .then(() => console.log('Standalone Player Exited'))
      .catch((errorMessage) => console.error(errorMessage));
  };

  return (
    <SafeAreaView style={uiStyle.baseContainer}>
      <Header posterPath={detail?.poster_path} />
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
            source={{uri: `${TMDB_IMG_URL}${detail?.poster_path}`}}
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
              {detail?.title}
            </Text>
            <Space height={uiDimen.sm} />
            <View style={styles.metaRating}>
              <IconM name="star" color={uiColor.star} size={20} />
              <Space width={6} />
              <Text style={styles.metaRatingText}>{detail?.vote_average}</Text>
            </View>
            <Space height={uiDimen.sm} />
            <Text
              style={{...uiStyle.textRegular, fontSize: 14}}
              numberOfLines={2}>
              {detail?.genres
                .map((item, index) => {
                  return item.name;
                })
                .join(', ')}
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
              {detail?.overview}
            </Text>
          </View>
          <Space height={uiDimen.lg} />

          <VideosSection videos={videos} playVideo={playVideo} />
          <Space height={uiDimen.lg} />

          <CastSection data={credits.cast} />
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
