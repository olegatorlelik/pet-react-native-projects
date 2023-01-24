import { Navigation } from 'react-native-navigation';
import Main from '@navigation/roots';
import LOG from '@services/log';

/**
 * Set navigation root stack for user
 */
const ChangeNavigationStack = (): Promise<string | void> =>
  Navigation.setRoot(Main()).catch((e: Error) => {
    LOG.error(`Navigation set root error: ${e.message}`, e);
  });

export default ChangeNavigationStack;
