import React, {useState, useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import auth from '@react-native-firebase/auth';

import {Button, Input, Space} from '../../../components';
import {uiDimen, uiStyle} from '../../../constants';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isPassing, setIsPassing] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('i am called');
    if (counter >= 5) {
      setIsPassing(true);
    }
  }, [counter]);

  const handleSignIn = () => {
    setError(null);

    if (email === '' || password === '') {
      setError('all fields can not be empty');
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('sukses login');
        })
        .catch((err) => {
          // console.log(typeof err.message);
          setError(err.message);
        });
    }
  };

  return (
    <SafeAreaView style={uiStyle.baseContainer}>
      <View style={styles.container}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Space height={uiDimen.lg} />
          <View style={styles.logoContainer}>
            <Image source={require('../../../../assets/images/logo-128.png')} />
            <Space height={uiDimen.md} />
            <Text style={styles.title}>Sini Nonton</Text>
            {/* <Text style={styles.title}>
              {isPassing ? 'lulus' : 'tidak lulus'}
            </Text>
            <Text style={styles.title}>{counter}</Text>
            <Button
              onPress={() => {
                setCounter(counter + 1);
              }}
              title="Tambah 1"
            /> */}
          </View>
          <Space height={uiDimen.sm * 5} />

          <Text style={styles.subtitle}>Sign in to your account</Text>
          <Space height={uiDimen.lg} />

          {error && (
            <>
              <View style={{padding: uiDimen.sm, backgroundColor: 'red'}}>
                <Text
                  style={{
                    ...uiStyle.textSemiBold,
                    fontSize: 14,
                  }}>
                  {error}
                </Text>
              </View>
              <Space height={uiDimen.sm} />
            </>
          )}

          <Text style={styles.label}>Email</Text>
          <Space height={uiDimen.sm} />
          <Input
            placeholder="Email"
            value={email}
            onChange={(v) => setEmail(v)}
          />
          <Space height={uiDimen.lg} />

          <Text style={styles.label}>Password</Text>
          <Space height={uiDimen.sm} />
          <Input
            placeholder="Password"
            value={password}
            onChange={(v) => setPassword(v)}
            secure
          />
          <Space height={uiDimen.lg} />

          <Space height={uiDimen.sm} />
          <Button title={'Sign In'} onPress={handleSignIn} />
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
