import NavigationService from '@lomray/client-helpers-react-native/services/navigation';
import React from 'react';
import type { FC } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import type { SharedValue } from 'react-native-reanimated';
// eslint-disable-next-line import/default
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import GoBackIcon from '@assets/images/icons/header/go-back.svg';
import Button from '@components/buttons/primary';
import Text from '@components/text';
import { DARK_BACKGROUND_START_POSITION } from './constants';
import styles from './styles';

interface IHeader {
  title: string;
  scrollY: SharedValue<number>;
  hasBackButton: boolean;
  hasAnimated: boolean;
}

const handleGoBack = () => void Navigation.pop(NavigationService.getComponentId());

/**
 * Custom header component with dimming for the TobBar.
 */
const Header: FC<IHeader> = ({ title, scrollY, hasBackButton, hasAnimated }) => {
  /**
   * Styles that define position and background of the header.
   */
  const containerAnimatedStyles = useAnimatedStyle(() => ({
    backgroundColor:
      scrollY.value >= DARK_BACKGROUND_START_POSITION
        ? withTiming('rgba(1, 1, 1, 0.7)', { duration: 150, easing: Easing.ease })
        : withTiming('rgba(1, 1, 1, 0)', { duration: 150, easing: Easing.ease }),
    transform: [
      {
        translateY: interpolate(scrollY.value, [0, 0], [0, 0], Extrapolate.CLAMP),
      },
    ],
  }));

  return (
    <Animated.View style={[styles.container, hasAnimated && containerAnimatedStyles]}>
      <View style={styles.innerWrapper}>
        {hasBackButton && (
          <Button hasResetStyles onPress={handleGoBack} style={styles.goBackWrapper}>
            <GoBackIcon />
          </Button>
        )}
        <View style={styles.titleWrapper}>
          <Text additionalStyles={styles.title}>{title}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default Header;
