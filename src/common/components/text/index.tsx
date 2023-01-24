import type { FC } from 'react';
import React from 'react';
import type { TextProps } from 'react-native';
import { Text as DefaultText } from 'react-native';
import styles from './styles';

interface IText extends TextProps {
  className?: 'arimoMedium' | 'arimoBold' | 'latoRegular';
  additionalStyles?: TextProps['style'];
}

/**
 * This is a wrapper component for text that allows you to get rid of duplicate styles for text.
 */
const Text: FC<IText> = ({ className, additionalStyles, ...props }) => (
  <DefaultText
    allowFontScaling={false}
    style={[styles.default, styles[className], additionalStyles]}
    {...props}
  />
);

export default Text;
