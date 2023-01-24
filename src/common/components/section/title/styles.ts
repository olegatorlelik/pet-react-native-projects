import { fs, wp } from '@lomray/react-native-layout-helper';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: fs(4.267), // 16
    marginLeft: wp(1.067), // 4
  },
});

export default styles;
