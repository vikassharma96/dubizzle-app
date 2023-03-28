import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import defaultStyles from '../../styles/defaultStyles';
import {fontFamily, fontSizes} from '../../styles/fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2%',
    marginEnd: '2%',
  },
  name: {
    alignSelf: 'center',
    marginStart: '5%',
    ...defaultStyles.text,
    color: colors.blue,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftPadding: {
    paddingEnd: '4%',
  },
  fileText: {
    fontSize: 11,
    paddingEnd: '3%',
    paddingStart: '1.5%',
    color: colors.blue,
  },
  imageStyle: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
  },
  dateText: {
    fontSize: fontSizes.fontSize_10,
    fontFamily: fontFamily.regular,
    color: '#6B6D6E',
    marginBottom: '2%',
  },
});

export default styles;
