import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  mainContainer: {
    height: '9%',
    zIndex: 10,
    backgroundColor: colors.headerBg,
  },
  container: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
});

export default styles;
