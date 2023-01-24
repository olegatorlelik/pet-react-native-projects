import React from 'react';
import type { FC, ReactNode } from 'react';
import type { ViewStyle, StyleProp } from 'react-native';
import { TouchableOpacity, View } from 'react-native';
import Content from './content';
import Title from './title';
import styles from './styles';

/**
 * Item's components.
 */
interface IComponents {
  Title: typeof Title;
  Content: typeof Content;
}

export interface ISection {
  title: ReactNode;
  onPress?: () => void;
  additionalContainerStyles?: ViewStyle;
}

type TProps = FC<ISection> & IComponents;

/**
 * Display component with title and any additional content.
 */
const Section: TProps = ({ title, onPress, additionalContainerStyles, children }) => {
  const content = (
    <>
      {title}
      {children}
    </>
  );

  const containerStyles: StyleProp<ViewStyle> = [styles.container, additionalContainerStyles];

  if (typeof onPress === 'function') {
    return (
      <TouchableOpacity onPress={onPress} style={containerStyles}>
        {content}
      </TouchableOpacity>
    );
  }

  return <View style={containerStyles}>{content}</View>;
};

Section.Title = Title;
Section.Content = Content;

export default Section;
