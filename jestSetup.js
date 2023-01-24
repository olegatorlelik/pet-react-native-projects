import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';
import 'react-native';

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
const { JSDOM } = jsdom;
const { window } = new JSDOM('<!doctype html><html lang="ru"><body></body></html>');

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global['window'] = window;
global['document'] = window.document;
global['navigator'] = {
  userAgent: 'node.js',
};
copyProps(window, global);

const originalConsoleError = console.error;

console.error = (message) => {
  if (message.startsWith('Warning:')) {
    return;
  }

  originalConsoleError(message);
};

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native/Libraries/LogBox/LogBox');
