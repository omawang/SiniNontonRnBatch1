import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TextInput, View} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';

import {uiColor, uiDimen, uiStyle} from '../constants';
import {Space} from '.';

const Input = ({value, onChange, fullCircle = false, placeholder}) => {
  return (
    <View style={styles.container({fullCircle})}>
      <IconM name="search" color={uiColor.placeholder} size={16} />
      <Space width={uiDimen.sm / 2} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={uiColor.placeholder}
        value={value}
        onChangeText={onChange}
        style={styles.input}
        keyboardType="default"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: ({fullCircle}) => ({
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: uiColor.accent1,
    borderWidth: 1,
    borderColor: uiColor.border,
    borderRadius: fullCircle ? uiDimen.xl : uiDimen.sm,
    paddingHorizontal: uiDimen.md,
    paddingVertical: uiDimen.sm / 2,
  }),
  input: {
    flex: 1, // is required, cause inside view
    ...uiStyle.textRegular,
    fontSize: 16,
  },
});

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fullCircle: PropTypes.bool,
  placeholder: PropTypes.string,
};
export default Input;
