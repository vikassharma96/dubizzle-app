import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {fontFamily, fontSizes} from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContainer: {
    marginHorizontal: '3%',
    marginVertical: '3%',
  },
  noDataAvail: {
    marginTop: '10%',
    color: colors.red,
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: fontSizes.fontSize_18,
    fontFamily: fontFamily.semiBold,
  },
});

export default styles;
