import type { TFunction } from 'react-i18next';
import HomeIcon from '@assets/images/components/bottom-tabs/home.svg';
import SettingsIcon from '@assets/images/components/bottom-tabs/settings.svg';
import FavoriteIcon from '@assets/images/icons/favorite.svg';

export enum TABS_ID {
  HOME = 'HOME',
  FAVORITE = 'FAVORITE',
  SETTINGS = 'SETTINGS',
}

const tabs = (t: TFunction<'modal'[]>) => [
  {
    id: TABS_ID.HOME,
    title: t('modal:bottomTabHome'),
    Icon: HomeIcon,
  },
  {
    id: TABS_ID.FAVORITE,
    title: t('modal:bottomTabFavorite'),
    Icon: FavoriteIcon,
  },
  {
    id: TABS_ID.SETTINGS,
    title: t('modal:bottomTabSettings'),
    Icon: SettingsIcon,
  },
];

export default tabs;
