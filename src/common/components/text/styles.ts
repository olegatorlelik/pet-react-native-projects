import { fs } from '@lomray/react-native-layout-helper';
import { StyleSheet } from 'react-native';
import colors from '@assets/colors';
import fonts from './fonts';

const styles = StyleSheet.create({
  default: {
    fontWeight: '400',
    fontFamily: fonts.arimoRegular,
    fontSize: fs(3.733), // 14
    color: colors.white,
  },
  arimoMedium: {
    fontFamily: fonts.arimoMedium,
  },
  arimoBold: {
    fontFamily: fonts.arimoBold,
  },
  latoRegular: {
    fontFamily: fonts.latoRegular,
  },
});

export default styles;
