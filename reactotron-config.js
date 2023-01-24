import init from '@lomray/client-helpers-react-native/debug/reactotron-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IS_TESTS } from '@constants/index';

const reactotron = init({
  isDebug: __DEV__,
  isTests: IS_TESTS,
  AsyncStorage,
});

export default reactotron;
