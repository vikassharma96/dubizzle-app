import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import colors from '../../styles/colors';
import styles from './styles';

const Loader = ({visible = false}) => {
  return (
    <>
      {visible && (
        <View style={styles.overlay}>
          <ActivityIndicator size={'large'} color={colors.blue} />
        </View>
      )}
    </>
  );
};

export default Loader;
