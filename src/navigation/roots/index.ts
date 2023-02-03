import type { LayoutRoot } from 'react-native-navigation';
import { SCREEN } from '@constants/navigation';

/**
 * Root stack
 */
const main = (): LayoutRoot => ({
  root: {
    stack: {
      children: [
        {
          component: {
            name: SCREEN.HOME,
          },
        },
      ],
    },
  },
});

export default main;
