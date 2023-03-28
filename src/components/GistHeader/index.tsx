import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {Routes} from '../../navigation/routes';
import colors from '../../styles/colors';
import {IOwner} from '../../types/gist.types';
import {IGistMeta} from '../../types/gistmeta.types';
import {CREATED_AT, FILE, FILES, LAST_UPDATED} from '../../utils/constants';
import AppText from '../AppText';
import styles from './styles';

type IProps = {
  gistOwner: IOwner;
  gistMeta: IGistMeta;
};

const GistHeader = ({gistOwner, gistMeta}: IProps) => {
  const navigation = useNavigation();
  // gist owner info details
  const {avatar_url, login: userName, html_url: userProfile} = gistOwner;
  // gist meta info
  const {files, html_url: gistUrl, created_at, updated_at} = gistMeta;
  // files count
  const filesSize = Object.keys(files).length;
  // timestamps
  const createdAt = new Date(created_at).toLocaleDateString();
  const updatedAt = new Date(updated_at).toLocaleDateString();

  const onOpenUrl = (url: string) => {
    navigation.navigate(Routes.INFO, {
      uri: url,
    });
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.row}
          onPress={() => onOpenUrl(userProfile)}>
          <Image source={{uri: avatar_url}} style={styles.imageStyle} />
          <AppText style={styles.name}>{userName}</AppText>
        </TouchableOpacity>
        <View style={styles.rightContainer}>
          <TouchableOpacity
            style={styles.row}
            onPress={() => onOpenUrl(gistUrl)}>
            <Icon name={'code'} color={colors.blue} size={16} />
            <AppText style={styles.fileText}>{`${filesSize} ${
              filesSize <= 1 ? FILE : FILES
            }`}</AppText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onOpenUrl(`${gistUrl}/forks`)}>
            <Icon
              name={'repo-forked'}
              color={colors.blue}
              size={15}
              style={styles.leftPadding}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onOpenUrl(`${gistUrl}/#comments`)}>
            <Icon
              name={'comment'}
              color={colors.blue}
              style={styles.leftPadding}
              size={15}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onOpenUrl(`${gistUrl}/stargazers`)}>
            <Icon name={'star-fill'} color={colors.blue} size={15} />
          </TouchableOpacity>
        </View>
      </View>
      <AppText
        style={
          styles.dateText
        }>{`${CREATED_AT} ${createdAt}  ${LAST_UPDATED} ${updatedAt}`}</AppText>
    </>
  );
};

export default GistHeader;
