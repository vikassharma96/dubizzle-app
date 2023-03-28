import React from 'react';
import {Text, TextProps} from 'react-native';
import colors from '../../styles/colors';
import defaultStyles from '../../styles/defaultStyles';

type AppTextProps = {
  color?: string;
} & TextProps;

const AppText = ({color, style, ...props}: AppTextProps) => {
  return (
    <Text
      style={[defaultStyles.text, {color: color ?? colors.text}, style]}
      {...props}
    />
  );
};

export default AppText;
