import { BlurView } from '@react-native-community/blur';
import type { FC } from 'react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
// eslint-disable-next-line import/default
import Animated, { FadeInUp, FadeOut } from 'react-native-reanimated';
import colors from '@assets/colors';
import Button from '@components/buttons/primary';
import Text from '@components/text';
import type { StoreProps } from './index.stores';
import tabs from './tabs';
import styles from './styles';

const BottomTabs: FC<StoreProps> = ({
  bottomTabsStore: { isVisible, setActiveTab, activeTab, addSubscribers },
}) => {
  const { t } = useTranslation(['modal']);

  /**
   * This event controls the display bottom tabs
   */
  useEffect(() => {
    const unsubscribes = addSubscribers();

    return () => unsubscribes();
  }, []);

  return (
    isVisible && (
      <View style={styles.main}>
        <View style={styles.container}>
          <BlurView style={styles.blur} blurType="dark" blurAmount={1} />
          <Animated.View style={styles.wrapperButton} exiting={FadeOut} entering={FadeInUp}>
            {tabs(t).map(({ title, id, Icon }) => (
              <Button
                key={id}
                additionalStyles={styles.button}
                onPress={() => setActiveTab(id)}
                hasResetStyles>
                <Icon width={18} height={18} fill={id === activeTab ? colors.rose : colors.gray} />
                <Text additionalStyles={styles.label}>{title}</Text>
              </Button>
            ))}
          </Animated.View>
        </View>
      </View>
    )
  );
};

export default BottomTabs;
