import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TextInput, View} from 'react-native';
import {uiColor, uiDimen, uiStyle} from '../constants';

const Input = ({value, onChange}) => {
  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={onChange} style={styles.input} keyboardType="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: uiColor.accent1,
    borderWidth: 1,
    borderColor: uiColor.border,
    borderRadius: uiDimen.sm,
    paddingHorizontal: uiDimen.md,
    paddingVertical: uiDimen.sm / 2,
  },
  input: {
    flex: 1, // is required, cause inside view
    ...uiStyle.textRegular,
    fontSize: 16,
  },
});

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Input;
