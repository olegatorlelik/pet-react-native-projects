import React from 'react';
import type { FC, ReactNode } from 'react';
// eslint-disable-next-line import/default
import type { StyleProp, ViewStyle } from 'react-native';
import { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import Header from './header';
import styles from './styles';

interface ITopBar {
  render: (
    onScroll: ReturnType<typeof useAnimatedScrollHandler>,
    styles: StyleProp<ViewStyle>,
  ) => ReactNode;
  title?: string;
  hasBackButton?: boolean;
  hasAnimated?: boolean;
}

/**
 * Component that wrap content with the TopBar component.
 */
const TopBar: FC<ITopBar> = ({ render, title = '', hasBackButton = true, hasAnimated = true }) => {
  const scrollY = useSharedValue(0);

  /**
   * Set the header position.
   */
  const handleScroll = useAnimatedScrollHandler((ev) => {
    scrollY.value = ev.contentOffset.y;
  });

  return (
    <>
      <Header
        title={title}
        scrollY={scrollY}
        hasBackButton={hasBackButton}
        hasAnimated={hasAnimated}
      />
      {render(handleScroll, styles.inner)}
    </>
  );
};

export default TopBar;
