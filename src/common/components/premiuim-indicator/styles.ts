import { fs, hp, wp } from '@lomray/react-native-layout-helper';
import { StyleSheet } from 'react-native';
import colors from '@assets/colors';

const styles = StyleSheet.create({
  wrapperPremiumIndicator: {
    zIndex: 20,
    position: 'absolute',
    borderRadius: 5,
    backgroundColor: 'rgba(253, 3, 198, 0.7)',
  },
  small: {
    paddingVertical: hp(0.369), // 3
    paddingHorizontal: wp(1.067), // 4
    top: hp(1.232), // 10
    right: wp(2.133), // 8
  },
  medium: {
    paddingVertical: hp(0.246), // 2
    paddingHorizontal: wp(0.933), // 3.5
    top: hp(1.601), // 13
    right: wp(2.667), // 10
  },
  large: {
    paddingVertical: hp(0.369), // 3
    paddingHorizontal: wp(2.133), // 8
    backgroundColor: colors.rose,
    top: hp(6.773), // 55
    right: wp(8.0), // 30
  },
  text: {
    fontWeight: '700',
    color: colors.white,
  },
  textsmall: {
    fontSize: fs(1.867), // 7
  },
  textlarge: {
    fontSize: fs(4.8), // 18
  },
  textmedium: {
    fontSize: fs(2.667), // 10
  },
});

export default styles;
