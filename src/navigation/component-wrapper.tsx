import ErrorBoundary from '@lomray/client-helpers-react-native/components/error-boundary';
import { Manager, StoreManagerProvider } from '@lomray/react-mobx-manager';
import type { ComponentType } from 'react';
import React, { Suspense } from 'react';
import { Text } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

/**
 * Screen wrapper. Add mobx provider and other wrappers.
 */
const ComponentWrapper = (Component: ComponentType, isEnableGesture = true): ComponentType => {
  const GestureComponent = gestureHandlerRootHOC(Component);

  const Wrapper = (props) => (
    <ErrorBoundary>
      <Suspense fallback={<Text>...</Text>}>
        <StoreManagerProvider storeManager={Manager.get()}>
          {(isEnableGesture && <GestureComponent {...props} />) || <Component {...props} />}
        </StoreManagerProvider>
      </Suspense>
    </ErrorBoundary>
  );

  Wrapper.displayName = `${Component.displayName}Wrapper`;

  return Wrapper;
};

export default ComponentWrapper;
