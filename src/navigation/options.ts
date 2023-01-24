import animations from '@lomray/client-helpers-react-native/navigation/screen-animation';
import type { Options } from 'react-native-navigation';
import colors from '@assets/colors';

/**
 * Default navigation options
 */
const options = (): Options => ({
  animations,
  topBar: {
    visible: false,
  },
  statusBar: {
    style: 'light',
  },
  layout: {
    orientation: ['portrait'],
    backgroundColor: colors.dark,
    componentBackgroundColor: colors.dark,
  },
  bottomTabs: {
    visible: false,
  },
});

export default options;
