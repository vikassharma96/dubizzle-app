import React from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './styles';

type IProps = {
  style?: ViewStyle;
};

const LineSeperator = (props: IProps) => {
  return <View style={[styles.divider, {...props.style}]} />;
};

export default LineSeperator;
