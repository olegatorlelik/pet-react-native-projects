import { fs, hp, wp } from '@lomray/react-native-layout-helper';
import { StyleSheet } from 'react-native';
import { HEADER_HEIGHT } from './constants';

const HORIZONTAL_SPACE = wp(4.267); // 16
const VERTICAL_SPACE = hp(1.355); // 11,

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: HEADER_HEIGHT,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    paddingHorizontal: HORIZONTAL_SPACE,
    zIndex: 2,
  },
  innerWrapper: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: VERTICAL_SPACE,
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackWrapper: {
    position: 'absolute',
    left: -HORIZONTAL_SPACE,
    bottom: -VERTICAL_SPACE,
    zIndex: 1,
    paddingHorizontal: HORIZONTAL_SPACE,
    paddingVertical: VERTICAL_SPACE,
  },
  title: {
    fontWeight: '700',
    fontSize: fs(4.533), // 17
  },
});

export default styles;
