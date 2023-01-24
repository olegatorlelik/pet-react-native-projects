import CloseSplashScreen from '@lomray/client-helpers-react-native/navigation/helpers/close-splash-screen';
import HandleChangeInternetConnection
  from '@lomray/client-helpers-react-native/navigation/helpers/handle-change-internet-connection';
import {
  HandleChangeScreen,
} from '@lomray/client-helpers-react-native/navigation/helpers/handle-change-screen';
import HandleClickBottomBar from '@lomray/client-helpers-react-native/navigation/helpers/handle-click-bottom-bar';
import HandleBackButtonAndroid
  from '@lomray/client-helpers-react-native/navigation/helpers/handler-back-button-android';
import HideAndroidNotificationBadge
  from '@lomray/client-helpers-react-native/navigation/helpers/hide-android-notification-badge';
import RegisterScreens from '@lomray/client-helpers-react-native/navigation/helpers/register-screens';
import AppVersion from '@lomray/client-helpers-react-native/stores/app-version';
import ExtendYupValidation from '@lomray/client-helpers/helpers/extend-yup';
import RunOnceService from '@lomray/client-helpers/services/run-once-service';
import { Manager, MobxAsyncStorage } from '@lomray/react-mobx-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { HIDDEN_OVERLAYS } from '@constants/navigation';
import { initApi } from '@services/api-client';
import i18n from '@services/localization';
import ComponentWrapper from './component-wrapper';
import DefaultNavOptions from './options';
import Screens from './screens';
import ChangeNavigationStack from '@helpers/navigation/change-navigation-stack';

LogBox.ignoreLogs([
  'RNReactNativeHapticFeedback is not available',
  'Require cycle:',
  '[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!',
]); // ignored useless logs

// Register screens
RegisterScreens(Screens, ComponentWrapper);

/**
 * Start application
 */
export default async (): Promise<void> => {
  const { endpoints, apiClient } = initApi();

  const manager = new Manager({
    storesParams: { endpoints },
    storage: new MobxAsyncStorage(AsyncStorage),
  });

  apiClient.setStoreManager(manager);

  await manager.init();

  // Enable analytic collection only for production
  Navigation.setDefaultOptions(DefaultNavOptions());

  const appVersion = manager.getStore(AppVersion);

  await Promise.all([
    // Init language
    i18n.setDefaultLanguage(),
  ]);


  // Register splash screen close listener
  CloseSplashScreen(HIDDEN_OVERLAYS);
  ChangeNavigationStack();

  // Protect listeners and callbacks. Run only once. (e.g. app change state foreground/background)
  RunOnceService.runOnce('StartAppServices', () => {
    // run app listeners
    appVersion.addSubscribes();

    HandleChangeScreen({
      hiddenOverlays: HIDDEN_OVERLAYS,
      hiddenModals: [],
    });
    HandleClickBottomBar();
    HandleChangeInternetConnection();
    HandleBackButtonAndroid();
    HideAndroidNotificationBadge();

    ExtendYupValidation();
  });
};
