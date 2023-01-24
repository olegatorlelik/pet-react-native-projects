/**
 * @format
 */

// NOTE: it must be first import
import './src/setup';
import Config from '@lomray/client-helpers-react-native/services/config';
import { Navigation } from 'react-native-navigation';
import Log from '@services/log';
import Start from './src/navigation/start';

if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  import('./reactotron-config').then(() => console.log('Reactotron Configured'));
}

Config.setup({ logger: Log });

// eslint-disable-next-line @typescript-eslint/no-misused-promises
Navigation.events().registerAppLaunchedListener(() => Start());
