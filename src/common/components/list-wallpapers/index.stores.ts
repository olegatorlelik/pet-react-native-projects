import type { StoresType } from '@lomray/react-mobx-manager';
import UserStore from '@store/modules/common/user';

const stores = {
  userStore: UserStore,
};

export type StoreProps = StoresType<typeof stores>;

export default stores;
