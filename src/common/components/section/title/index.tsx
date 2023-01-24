import React from 'react';
import type { FC, ReactNode } from 'react';
import type { TextProps } from 'react-native';
import { View } from 'react-native';
import Text from '@components/text';
import styles from './styles';

interface ITitle {
  marker: ReactNode;
  text: string;
  additionalTextStyles?: TextProps['style'];
}

/**
 * Title for the section component.
 */
const Title: FC<ITitle> = ({ marker, text, children, additionalTextStyles }) => (
  <View style={styles.container}>
    {marker}
    <Text additionalStyles={[styles.text, additionalTextStyles]}>
      {text} {children}
    </Text>
  </View>
);

export default Title;
