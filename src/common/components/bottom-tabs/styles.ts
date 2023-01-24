import { fs, hp, wp } from '@lomray/react-native-layout-helper';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: hp(4.187), // 34,
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  container: {
    borderRadius: 20,
    position: 'relative',
    width: wp(91.467), // 343
  },
  blur: {
    position: 'absolute',
    borderRadius: 20,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  wrapperButton: {
    borderRadius: 20,
    width: '100%',
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(2.094), // 17
    paddingHorizontal: wp(10.133), // 38
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginTop: hp(0.616), // 5
    fontSize: fs(2.933), // 11
  },
});

export default styles;
