import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Space} from './src/ui/components';
import {uiStyle} from './src/ui/constants';

const App = () => {
  return (
    <SafeAreaView style={uiStyle.baseContainer}>
      <Text style={styles.title}>Sini Nonton</Text>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Sign in to your account</Text>
        <Space height={24} />

        <Text style={styles.label}>Email</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {...uiStyle.textBold, fontSize: 24},
  content: {marginHorizontal: 24},
  subtitle: {...uiStyle.textRegular, fontSize: 20},
  label: {...uiStyle.textSemiBold, fontSize: 16},
});
