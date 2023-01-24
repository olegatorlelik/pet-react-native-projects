import { wp, hp } from '@lomray/react-native-layout-helper';
import { StyleSheet } from 'react-native';
import colors from '@assets/colors';

const styles = StyleSheet.create({
  container: {
    minHeight: hp(5.419), // 44
    borderRadius: 8,
    paddingVertical: hp(1.601), // 13,
    paddingHorizontal: wp(4.267), // 16
    backgroundColor: colors.lightDark,
    marginBottom: hp(0.985), // 8
  },
});

export default styles;
