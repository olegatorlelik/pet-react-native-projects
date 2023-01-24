import { fs, hp } from '@lomray/react-native-layout-helper';
import { StyleSheet } from 'react-native';
import colors from '@assets/colors';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: hp(2.217), // 18
  },
  primary: {
    backgroundColor: colors.rose,
  },
  styledButtonText: {
    fontWeight: '600',
    color: colors.white,
    fontSize: fs(4.8), // 18
  },
  disabledStyle: {
    opacity: 0.6,
  },
});

export default styles;
