/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '@screens/home/index.wrapper';

it('renders correctly', () => {
  renderer.create(<Home componentId="test" />);
});
