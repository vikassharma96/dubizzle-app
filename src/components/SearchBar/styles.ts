import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import defaultStyles from '../../styles/defaultStyles';
import {fontSizes} from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginStart: '3%',
    paddingVertical: '2%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
  },
  searchBar: {
    width: '80%',
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: '3%',
    height: '100%',
  },
  input: {
    marginStart: '2%',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    width: '90%',
    ...defaultStyles.text,
    fontSize: fontSizes.fontSize_12,
  },
});

export default styles;
