import type { StoresType } from '@lomray/react-mobx-manager';
import BottomTabsStore from '@store/modules/components/bottom-tabs';

const stores = {
  bottomTabsStore: BottomTabsStore,
};

export type StoreProps = StoresType<typeof stores>;

export default stores;
