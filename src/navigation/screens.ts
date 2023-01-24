import { TopFlashMessages } from '@lomray/client-helpers-react-native/components/top-flash-messages';
import type { ComponentType } from 'react';
import { SCREEN, OVERLAY } from '@constants/navigation';
import Home from '@screens/home';

/**
 * Register all application screens
 */
const screens = new Map<string, ComponentType | [ComponentType, boolean]>();

// APP
screens.set(SCREEN.HOME, Home);

// OVERLAYS
screens.set(OVERLAY.TOP_FLASH_MESSAGES, [TopFlashMessages, false]);

export default screens;
