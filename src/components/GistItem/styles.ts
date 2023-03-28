import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {fontFamily, fontSizes} from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  description: {
    marginBottom: '2%',
    fontFamily: fontFamily.regular,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
  },
  bottom: {
    marginBottom: '2%',
    marginStart: '3%',
  },
  files: {
    marginEnd: '1%',
    alignItems: 'center',
  },
  fileText: {
    marginStart: '1.5%',
    color: colors.blue,
    fontSize: fontSizes.fontSize_12,
    fontFamily: fontFamily.regular,
  },
});

export default styles;
