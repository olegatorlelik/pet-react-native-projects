import { hp, wp } from '@lomray/react-native-layout-helper';
import { StyleSheet } from 'react-native';

const BUTTON_SIZE = hp(4.926); // 40

const styles = StyleSheet.create({
  wrapperImage: {
    position: 'relative',
    width: wp(43.733), // 164,
    height: hp(43.473), // 353,
    borderRadius: 8,
    marginBottom: hp(1.97), // 16
  },
  extraMargin: {
    marginBottom: hp(14.315),
  },
  buttonImage: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  favouriteButton: {
    width: BUTTON_SIZE, // 40
    height: BUTTON_SIZE, // 40
    paddingVertical: BUTTON_SIZE / 2,
    paddingHorizontal: BUTTON_SIZE / 2,
    zIndex: 2,
    position: 'absolute',
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
