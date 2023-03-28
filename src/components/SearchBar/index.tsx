import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Keyboard, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import styles from './styles';

type IProps = {
  onSearchUserGist: (userName: string) => void;
  onResetUserGist: () => void;
};

const SearchBar = ({onSearchUserGist, onResetUserGist}: IProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');

  const onSearch = () => {
    Keyboard.dismiss();
    onSearchUserGist(userName.trim());
  };

  const onReset = () => {
    Keyboard.dismiss();
    setUserName('');
    setIsFocused(false);
    if (userName) {
      onResetUserGist();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="search" color="black" size={15} />
        <TextInput
          style={styles.input}
          numberOfLines={1}
          placeholder="Search Gists for the username"
          value={userName}
          onChangeText={setUserName}
          returnKeyType={'search'}
          onSubmitEditing={onSearch}
          onFocus={() => setIsFocused(true)}
        />
        {isFocused && (
          <TouchableOpacity onPress={onReset}>
            <Icon name="x" color="black" size={15} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchBar;
