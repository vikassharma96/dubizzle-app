import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {InfoScreenProps} from '../../navigation/types';
import colors from '../../styles/colors';
import styles from './styles';

const Info: React.FC<InfoScreenProps> = ({route}) => {
  const {uri} = route.params;

  const renderLoader = () => (
    <ActivityIndicator color={colors.blue} size="large" style={styles.loader} />
  );

  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: uri,
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={() => renderLoader()}
        startInLoadingState={true}
        style={styles.container}
      />
    </View>
  );
};

export default Info;
