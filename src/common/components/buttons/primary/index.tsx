import type { FC } from 'react';
import React, { useCallback } from 'react';
import type { TouchableOpacityProps, TextProps, GestureResponderEvent } from 'react-native';
import { TouchableOpacity } from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Text from '@components/text';
import styles from './styles';

export const options = {
  enableVibrateFallback: false, // iOS only. if haptic feedback is not available
  ignoreAndroidSystemSettings: true, // Android only. if Haptic is disabled in the Android system settings this will allow ignoring the setting and trigger haptic feedback
};

export interface IPrimary extends TouchableOpacityProps {
  onPress: (
    event: GestureResponderEvent | React.FormEvent<HTMLFormElement>,
  ) => Promise<void | string> | void | string;
  type?: 'primary' | 'secondary';
  additionalStyles?: TouchableOpacityProps['style'];
  hasResetStyles?: boolean;
  title?: string;
  titleStyles?: TextProps['style'];
}

/**
 * Primary button component
 */
const Primary: FC<IPrimary> = ({
  children,
  title,
  titleStyles,
  additionalStyles,
  disabled,
  onPress,
  type = 'primary',
  hasResetStyles = false,
  ...props
}) => {
  /**
   * Handle button pressed
   */
  const handleOnPress = useCallback(
    (event: GestureResponderEvent) => {
      ReactNativeHapticFeedback.trigger('impactMedium', options);
      void onPress?.(event);
    },
    [onPress],
  );

  return (
    <TouchableOpacity
      style={[
        !hasResetStyles && [styles.button, styles[type]],
        additionalStyles,
        disabled && styles.disabledStyle,
      ]}
      onPress={handleOnPress}
      disabled={disabled}
      {...props}>
      {(title !== undefined && (
        <Text style={[styles.styledButtonText, titleStyles]}>{title}</Text>
      )) ||
        children}
    </TouchableOpacity>
  );
};

export default Primary;
