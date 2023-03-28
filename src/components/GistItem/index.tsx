import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import GistHeader from '../GistHeader';
import Icon from 'react-native-vector-icons/Octicons';
import {ScrollView} from 'react-native';
import {IGist} from '../../types/gist.types';
import {IGistMeta} from '../../types/gistmeta.types';
import AppText from '../AppText';
import {getGistMeta} from './helper';
import styles from './styles';
import colors from '../../styles/colors';
import {Routes} from '../../navigation/routes';
import {useNavigation} from '@react-navigation/native';

type IProps = {
  gist: IGist;
};

const GistItem = ({gist}: IProps) => {
  const navigation = useNavigation();
  // owner info of the gist
  const {owner: gistOwner, files} = gist;
  // meta data of the gist
  const gistMeta: IGistMeta = getGistMeta(gist);
  // retrieve fileNames
  const fileNames = Object.keys(files);

  const onOpenUrl = (url: string) => {
    navigation.navigate(Routes.INFO, {
      uri: url,
    });
  };

  return (
    <>
      <GistHeader gistOwner={gistOwner} gistMeta={gistMeta} />
      {gistMeta?.description && (
        <AppText style={styles.description}>{gistMeta?.description}</AppText>
      )}
      <ScrollView
        horizontal
        contentContainerStyle={[styles.row, styles.bottom]}
        showsHorizontalScrollIndicator={false}>
        {fileNames.map((file: any) => {
          return (
            <TouchableOpacity
              style={[styles.row, styles.files]}
              key={file}
              onPress={() => onOpenUrl(files[file].raw_url)}>
              <Icon name={'file'} size={15} color={colors.blue} />
              <AppText style={styles.fileText}>{file}</AppText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};

export default memo(GistItem);
