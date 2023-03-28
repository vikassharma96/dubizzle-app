import React from 'react';
import {View} from 'react-native';
import Searchbar from '../SearchBar';
import styles from './styles';
import Icon from 'react-native-vector-icons/Octicons';

type IProps = {
  onSearchUserGist: (userName: string) => void;
  onResetUserGist: () => void;
};

const Header = ({onSearchUserGist, onResetUserGist}: IProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Icon name={'mark-github'} size={20} color={'white'} />
        <Searchbar
          onSearchUserGist={onSearchUserGist}
          onResetUserGist={onResetUserGist}
        />
      </View>
    </View>
  );
};

export default Header;
