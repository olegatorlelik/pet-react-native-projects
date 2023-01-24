import Config from '@lomray/client-helpers-react-native/services/config';
import DeviceInfo from 'react-native-device-info';
import colors from '@assets/colors';
import {
  APP_BRANCH,
  APP_KEY_NAME,
  CODEPUSH_ANDROID_PRODUCTION,
  CODEPUSH_ANDROID_STAGING,
  CODEPUSH_IOS_PRODUCTION,
  CODEPUSH_IOS_STAGING,
  IS_TESTS,
  isProd,
  PACKAGE_NAME,
} from '@constants/index';

Config.setup({
  appBranch: APP_BRANCH,
  appKeyName: APP_KEY_NAME,
  packageName: PACKAGE_NAME,
  isProd,
  isProdDeployment:
    isProd &&
    ['com.android.vending', 'AppStore', 'com.sec.android.app.samsungapps'].includes(
      DeviceInfo.getInstallerPackageNameSync(),
    ),
  isTests: IS_TESTS,
  isLocalDevelopment: __DEV__,
  indicators: {
    activity: {
      color: colors.rose,
    },
    loader: {
      color: colors.rose,
    },
  },
  codepush: {
    staging: { ios: CODEPUSH_IOS_STAGING, android: CODEPUSH_ANDROID_STAGING },
    prod: { ios: CODEPUSH_IOS_PRODUCTION, android: CODEPUSH_ANDROID_PRODUCTION },
  },
});
