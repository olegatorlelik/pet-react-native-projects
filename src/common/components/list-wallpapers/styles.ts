import { hp, wp } from '@lomray/react-native-layout-helper';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    position: 'relative',
    flex: 1,
  },
  background: {
    zIndex: -1,
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  list: {
    paddingHorizontal: wp(4.267), // 16
    paddingBottom: hp(14.778), // 120
  },
  columnWrapperStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
  banner: {
    position: 'absolute',
    width: wp(100),
    height: hp(12.315), // 100
    left: wp(5),
    bottom: hp(0.7),
  },
});

export default styles;
