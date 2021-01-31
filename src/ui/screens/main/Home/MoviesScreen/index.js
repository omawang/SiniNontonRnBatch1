import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Input, Space} from '../../../../components';
import {uiDimen, uiStyle} from '../../../../constants';
import PopularSection from './components/PopularSection';
import TopRatedSection from './components/TopRatedSection';

const MoviesScreen = () => {
  return (
    <SafeAreaView style={uiStyle.baseContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Space height={uiDimen.md} />
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../../../assets/images/logo-128.png')}
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>SINI NONTON</Text>
        </View>
        <Space height={uiDimen.md} />

        <View style={{marginHorizontal: uiDimen.lg}}>
          <Input
            fullCircle
            placeholder="Search ..."
            value=""
            onChange={() => {}}
          />
        </View>
        <Space height={uiDimen.lg} />

        <Text style={styles.headingText}>Movies</Text>
        <Space height={uiDimen.md} />

        <PopularSection />
        <Space height={uiDimen.lg} />

        <TopRatedSection />
        <Space height={uiDimen.md} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    marginHorizontal: uiDimen.lg,
    alignItems: 'center',
  },
  logoImage: {width: 40, height: 40},
  logoText: {...uiStyle.textBold, fontSize: 18},
  headingText: {...uiStyle.textBold, fontSize: 20, textAlign: 'center'},
});
export default MoviesScreen;
