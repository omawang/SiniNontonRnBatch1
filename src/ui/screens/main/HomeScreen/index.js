import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Input, Space} from '../../../components';

import {uiStyle, uiDimen, uiColor} from '../../../constants';

import PopularSection from './components/PopularSection';
import TopRatedSection from './components/TopRatedSection';

const HomeScreen = () => {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={uiStyle.baseContainer}>
      <ScrollView style={styles.container}>
        <Space height={uiDimen.md} />
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../../assets/images/logo-128.png')}
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>Sini Nonton</Text>
        </View>
        <Space height={uiDimen.md} />

        <View style={styles.searchContainer}>
          <Input
            fullCircle
            onChange={(v) => {
              setSearch(v);
            }}
            value={search}
            placeholder="Search ..."
            placeholderLeftIcon={
              <Icon name="search" size={16} color={uiColor.placeholder} />
            }
          />
        </View>
        <Space height={uiDimen.lg} />

        <Text style={styles.title}>Movies</Text>
        <Space height={uiDimen.md} />

        <PopularSection />
        <Space height={uiDimen.lg} />

        <TopRatedSection />
        <Space height={uiDimen.lg} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: uiDimen.lg,
  },
  logoImage: {width: 40, height: 40},
  logoText: {...uiStyle.textBold, fontSize: 18},
  searchContainer: {marginHorizontal: uiDimen.lg},
  title: {...uiStyle.textBold, fontSize: 20, textAlign: 'center'},
});
export default HomeScreen;
