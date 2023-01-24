import createLogger from '@lomray/client-helpers-react-native/services/log';
import crashlytics from '@react-native-firebase/crashlytics';

const log = createLogger({
  crashlytics: crashlytics(),
});

export default log;
