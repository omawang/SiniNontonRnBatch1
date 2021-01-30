import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import {Button, Input, Space} from '../../../components';
import {uiDimen, uiStyle} from '../../../constants';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={uiStyle.baseContainer}>
      <View style={styles.container}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Space height={uiDimen.lg} />
          <View style={styles.logoContainer}>
            <Image source={require('../../../../assets/images/logo-128.png')} />
            <Space height={uiDimen.md} />
            <Text style={styles.title}>Sini Nonton</Text>
          </View>
          <Space height={uiDimen.sm * 5} />

          <Text style={styles.subtitle}>Sign in to your account</Text>
          <Space height={uiDimen.lg} />

          <Text style={styles.label}>Email</Text>
          <Space height={uiDimen.sm} />
          <Input value={email} onChange={(v) => setEmail(v)} />
          <Space height={uiDimen.lg} />

          <Text style={styles.label}>Password</Text>
          <Space height={uiDimen.sm} />
          <Input value={password} onChange={(v) => setPassword(v)} />
          <Space height={uiDimen.lg} />

          <Space height={uiDimen.sm} />
          <Button
            title={'Sign In'}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
          <Space height={uiDimen.md} />

          <Text style={styles.question}>Don't have an account</Text>
          <Space height={uiDimen.md} />
          <Button
            outlined
            title={'Sign Up'}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
          <Space height={uiDimen.lg} />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: uiDimen.lg,
  },
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {...uiStyle.textBold, fontSize: 24},
  subtitle: {...uiStyle.textRegular, fontSize: 20},
  label: {...uiStyle.textSemiBold, fontSize: 16},
  question: {...uiStyle.textRegular, fontSize: 16, textAlign: 'center'},
});
