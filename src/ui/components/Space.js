import React from 'react';
import {View} from 'react-native';

const Space = (props) => {
  return (
    <View
      style={{
        height: props.height ? props.height : 0,
        width: props.width ? props.width : 0,
      }}
    />
  );
};

export default Space;
