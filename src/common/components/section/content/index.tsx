import React from 'react';
import type { FC } from 'react';
import { View } from 'react-native';
import styles from './styles';

/**
 * Content wrapper for the section component.
 */
const Content: FC = ({ children }) => <View style={styles.container}>{children}</View>;

export default Content;
