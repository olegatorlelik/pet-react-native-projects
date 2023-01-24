import type { FC } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';
import Text from '@components/text';
import styles from './styles';

interface IPremiumIndicator {
  isPremium: boolean;
  size?: 'small' | 'medium' | 'large';
  additionalStyles?: ViewProps['style'];
}

const PremiumIndicator: FC<IPremiumIndicator> = ({
  isPremium,
  size = 'small',
  additionalStyles = {},
}) => {
  const { t } = useTranslation('translation');

  if (!isPremium) {
    return null;
  }

  return (
    <View style={[styles.wrapperPremiumIndicator, styles[size], additionalStyles]}>
      <Text additionalStyles={[styles.text, styles[`text${size}`]]}>{t('pro')}</Text>
    </View>
  );
};

export default PremiumIndicator;
