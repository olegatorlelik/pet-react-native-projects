import { withStores } from '@lomray/react-mobx-manager';
import stores from './index.stores';
import BottomTabs from './index';

export default withStores(BottomTabs, stores);
