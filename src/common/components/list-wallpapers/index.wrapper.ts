import { withStores } from '@lomray/react-mobx-manager';
import stores from './index.stores';
import ListWallpapers from './index';

export default withStores(ListWallpapers, stores);
