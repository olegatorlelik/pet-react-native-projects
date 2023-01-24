import { fs, hp, wp } from '@lomray/react-native-layout-helper';
import { StyleSheet } from 'react-native';
import colors from '@assets/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(18, 18, 29, 0.6)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 50,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  modal: {
    width: wp(72.0), // 270
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors.lightDark3,
    borderRadius: 16,
  },
  content: {
    paddingHorizontal: wp(8.533), // 32
    paddingVertical: hp(2.463), // 20
  },
  title: {
    fontWeight: '700',
    fontSize: fs(4.267), // 16,
    lineHeight: hp(2.709), // 22,
    color: colors.white,
    marginBottom: hp(0.739), // 6
    textAlign: 'center',
  },
  description: {
    fontSize: fs(3.733), // 14,
    lineHeight: hp(2.217), // 18,
    color: colors.dark,
    marginBottom: hp(1.97), // 16
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    width: '50%',
    paddingVertical: hp(1.355), // 11
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.darkGray,
    borderTopWidth: 0.25,
  },
  buttonLeft: {
    borderEndWidth: 0.25,
  },
  buttonRight: {
    borderStartWidth: 0.25,
  },
  buttonText: {
    lineHeight: hp(2.463), // 20
    fontSize: fs(3.733), // 14,
    fontWeight: '700',
    color: colors.rose,
    marginLeft: wp(1.333), // 5
  },
});

export default styles;
