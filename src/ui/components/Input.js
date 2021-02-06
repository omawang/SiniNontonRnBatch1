import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TextInput, View} from 'react-native';

import {uiColor, uiDimen, uiStyle} from '../constants';
import {Space} from '.';

const Input = ({
  value,
  onChange,
  fullCircle = false,
  secure = false,
  placeholder,
  placeholderLefIcon,
}) => {
  return (
    <View style={styles.container({fullCircle})}>
      {placeholderLefIcon}
      <Space width={uiDimen.sm / 2} />
      <TextInput
        secureTextEntry={secure}
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
  secure: PropTypes.bool,
  fullCircle: PropTypes.bool,
  placeholder: PropTypes.string,
  placeholderLefIcon: PropTypes.object,
};
export default Input;
