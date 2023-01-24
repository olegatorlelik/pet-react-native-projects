import PressHandler from '@lomray/client-helpers-react-native/components/press-handler';
import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Animated, TouchableWithoutFeedback, View } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Button from '@components/buttons/primary';
import Text from '@components/text';
import styles from './styles';

export interface IAlert {
  isVisible: boolean;
  onCancel: () => void;
  onSuccess: () => Promise<void> | void;
  title?: string;
  description?: string;
  successText?: string;
  cancelText?: string;
  icons?: FC<SvgProps>[];
}

/**
 * Animation time setting
 */
const OPENING_BACKGROUND_TIME = 300;
const CLOSING_TIME = 200;

const Alert: FC<IAlert> = ({
  onCancel,
  onSuccess,
  title,
  description,
  cancelText,
  successText,
  icons = [],
  isVisible = false,
}) => {
  const { t } = useTranslation('translation');

  const [LeftIcon, RightIcon] = icons;

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  /**
   * Opacity of the effect when opening the modal
   */
  const openAnim = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: OPENING_BACKGROUND_TIME,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: OPENING_BACKGROUND_TIME,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeAnim = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: CLOSING_TIME,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (isVisible) {
      return openAnim();
    }

    closeAnim();
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
        },
      ]}>
      <PressHandler style={styles.wrapper} onPress={onCancel}>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.modal, { opacity }]}>
            <View style={styles.content}>
              {title && <Text style={styles.title}>{title}</Text>}
              {description && <Text style={styles.description}>{description}</Text>}
            </View>
            <View style={styles.buttons}>
              <Button
                hasResetStyles
                additionalStyles={[styles.button, styles.buttonLeft]}
                onPress={onSuccess}>
                {LeftIcon && <LeftIcon />}
                <Text style={styles.buttonText}>{successText || t('ok')}</Text>
              </Button>
              <Button
                additionalStyles={[styles.button, styles.buttonRight]}
                hasResetStyles
                onPress={onCancel}>
                {RightIcon && <RightIcon />}
                <Text style={styles.buttonText}>{cancelText || t('cancel')}</Text>
              </Button>
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </PressHandler>
    </Animated.View>
  );
};

export default Alert;
